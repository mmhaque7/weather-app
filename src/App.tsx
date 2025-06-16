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

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://weather-backend-mehedi-4e2981098294.herokuapp.com/api/weather?city=${encodeURIComponent(
          city
        )}`
      );
      if (!res.ok) {
        const { error } = await res.json();
        alert(error || "Failed to get weather.");
        return;
      }

      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Something went wrong while fetching the weather.");
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
