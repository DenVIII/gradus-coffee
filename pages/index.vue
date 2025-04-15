<script setup lang="ts">
import { computed } from "vue";
import type { WeatherData } from "~/types/weather";
import type { Product } from "~/types/product";

// Дефолтные данные
const defaultWeather: WeatherData = {
  temp: 15,
  city: "Москва",
  description: "ясно",
  timestamp: 0,
};

// Загрузка данных с серверного роута
const { data: weather } = await useAsyncData<WeatherData>("weather", () =>
  $fetch("/api/weather", {
    query: { city: "Moscow" },
  })
);

// Вычисляемые свойства для отображения
const displayWeather = computed(() => weather.value || defaultWeather);

// Добавляем дефолтные данные акционного напитка

let promoDrink = ref<Product>({
  imageUrl: "/products/fruit-tea.jpg",
  name: "Фруктовый чай",
  price: 150,
  discount: 0.2,
});

let promoText = ref(["Забегайте к нам на чай!"]);
// Получаем акционный напиток, в зависимости от текущей погоды

const fetchMenu = async () => {
  try {
    const response = await fetch("/data/menu.json");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();

    // Выбираем акционный напиток в зависимости от погоды
    if (weather.value) {
      if (weather.value.temp > 14) {
        promoDrink.value = data.offers.cold[3];
        promoText.value = ["Ну и жара!", "Забегайте и попробуйте:"];
      } else {
        promoDrink.value = data.offers.hot[3];
        promoText.value = [
          "На улице холодно!",
          "Заходите согреться и попробовать:",
        ];
      }
      promoDrink.value.discount = 0.2;
    }
  } catch (error) {
    console.error("Error loading menu:", error);
  }
};

onMounted(fetchMenu);
</script>
<template>
  <hero-section />
  <promo-section :product="promoDrink">
    {{ promoText[0] }} <br />
    {{ promoText[1] }}
  </promo-section>
  <promo-statement />
  <menu-section />
  <about-section />
  <forecast-promo
    :product="promoDrink"
    :weather="displayWeather"
  />
  <contacts-section />
  <footer-section />
</template>
