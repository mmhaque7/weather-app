import { Input } from "./ui/input";
import { Button } from "./ui/button";

type CityData = {
  city: string;
  setCity: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({ city, setCity, onSearch }: CityData) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Input
        className="w-[200px]"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City Name"
      />
      <Button
        onClick={onSearch}
        className="text-black px-4 py-1 rounded transition"
      >
        Get Weather
      </Button>
    </div>
  );
}
