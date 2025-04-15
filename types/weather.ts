// Интерфейс для данных о погоде
export interface WeatherData {
  temp: number;
  city: string;
  description: string;
  timestamp: number;
}

// Интерфейс для ответа API
export interface WeatherResponse {
  main: { temp: number };
  weather: { description: string }[];
  name: string;
}
