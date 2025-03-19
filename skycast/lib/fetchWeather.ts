
import { WeatherData } from '../types/weather.d'; // Import the type

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=5fddedd14207446ca08181824251903&q=${city}`
  );

  if (!response.ok) {
    throw new Error('Weather data not found');
  }

  const data = await response.json();
  return data;
};
