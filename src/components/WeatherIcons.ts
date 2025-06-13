import sunny from "@/assets/sunny.svg";
import cloudy from "@/assets/cloudy.svg";
import rainy from "@/assets/rainy.svg";
import storm from "@/assets/thunder.svg";
import defaultIcon from "@/assets/weather.svg";
import snow from "@/assets/snowy.svg";
import drizzle from "@/assets/rainy.svg";

export function WeatherIcons(description: string): string {
  const lower = description.toLowerCase();

  if (lower.includes("sunny") || lower.includes("clear")) return sunny;
  if (lower.includes("cloud")) return cloudy;
  if (lower.includes("rain") || lower.includes("shower")) return rainy;
  if (lower.includes("storm") || lower.includes("thunder")) return storm;
  if (lower.includes("snow")) return snow;
  if (lower.includes("drizzle")) return drizzle;

  return defaultIcon;
}
