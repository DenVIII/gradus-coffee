import { defineEventHandler, getQuery } from "h3";
import { differenceInHours } from "date-fns";
import { WeatherData, WeatherResponse } from "~/types/weather";

// Дефолтные данные
const DEFAULT_DATA: WeatherData = {
  temp: 15,
  city: "Москва",
  description: "ясно",
  timestamp: 0,
};

// Переменные для кэширования
let cachedData: WeatherData | null = null;
let lastUpdated: number | null = null;

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const city = (query.city as string) || "Moscow";
  const apiKey = useRuntimeConfig().public.weatherApiKey;

  const now = Date.now();
  if (
    !cachedData ||
    !lastUpdated ||
    differenceInHours(now, lastUpdated) >= 24
  ) {
    try {
      const response = await $fetch<WeatherResponse>(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          query: {
            q: city,
            units: "metric",
            lang: "ru",
            appid: apiKey,
          },
        }
      );
      cachedData = {
        temp: Math.round(response.main.temp),
        city: response.name,
        description: response.weather[0].description,
        timestamp: now,
      };
      lastUpdated = now;
    } catch (err) {
      console.error("Ошибка загрузки погоды:", err);
      cachedData = { ...DEFAULT_DATA, timestamp: now };
    }
  }
  return cachedData;
});
