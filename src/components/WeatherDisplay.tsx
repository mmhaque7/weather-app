import { WeatherIcons } from "./WeatherIcons";
type Props = {
  weather: {
    cityName: string;
    temperature: number;
    description: string;
  } | null;
};
import { Card, CardDescription, CardTitle } from "./ui/card";

export default function WeatherDisplay({ weather }: Props) {
  if (!weather) return null;
  const iconSrc = WeatherIcons(weather.description);

  return (
    <Card className="flex flex-col items-center gap-2 text-center mt-5 w-1/4 justify-center mx-auto ">
      <CardTitle className="text-2xl">{weather.cityName}</CardTitle>
      <CardDescription className="flex flex-col items-center  text-center">
        <img src={iconSrc} alt={weather.description} className="w-25 h-25" />
        <p>{weather.description}</p>
        <p>Temperature: {weather.temperature} °C</p>
      </CardDescription>
    </Card>
  );
}
