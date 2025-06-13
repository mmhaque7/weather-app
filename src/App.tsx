import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

type WeatherData = {
  cityName: string;
  temperature: number;
  description: string;
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const API_KEY = import.meta.env.VITE_ACCUWEATHER_API_KEY;
  const baseUrl = "https://dataservice.accuweather.com";

  const getWeather = async () => {
    if (!city) return;

    try {
      // Step 1: Get location key from city name
      const locationRes = await fetch(
        `${baseUrl}/locations/v1/cities/search?apikey=${API_KEY}&q=${encodeURIComponent(
          city
        )}`
      );
      const locationData = await locationRes.json();

      if (!locationData.length) {
        alert("City not found");
        return;
      }

      const locationKey = locationData[0].Key;

      // Step 2: Get current weather for the location key
      const weatherRes = await fetch(
        `${baseUrl}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        cityName: locationData[0].LocalizedName,
        temperature: weatherData[0].Temperature.Metric.Value,
        description: weatherData[0].WeatherText,
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Weather React App</CardTitle>
        </CardHeader>
        <CardContent>
          <SearchBar city={city} setCity={setCity} onSearch={getWeather} />
          <WeatherDisplay weather={weather} />
        </CardContent>
        <CardFooter>Created by Mehedi</CardFooter>
      </Card>
    </>
  );
}

export default App;
