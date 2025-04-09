<script setup lang="ts"></script>

<template>
  <section class="forecast-promo">
    <div class="forecast-promo__content-block">
      <h2 class="forecast-promo__header">Наш сегодняшний прогноз:</h2>
      <div class="forecast-promo__weather">
        <p class="forecast-promo__location">Сейчас в Москве:</p>
        <p class="forecast-promo__temperature">+5°C и 🌧️ небольшой дождь</p>
      </div>
      <div class="forecast-promo__offer">
        <p>Время согреться! Попробуйте горячий шоколад!</p>
        <p>
          Всего за <span class="forecast-promo__discount">200 ₽</span> вместо
          250 ₽ до конца дня!
        </p>
      </div>
    </div>
    <NuxtImg
      src="/products/iced-latte.jpg"
      alt="Ледяной латте"
      width="200"
      height="300"
      class="forecast-promo__image"
    />
  </section>
</template>
<style lang="scss">
@use "@/assets/scss/helpers/variables.scss" as *;

.forecast-promo {
  position: relative;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  &__weather {
    padding: 1.5rem 0;
  }
  &__image {
    border-radius: 12px;
  }
  &__discount {
    font-weight: bold;
    color: $accent-color;
  }
  ::after {
    content: "";
    position: absolute;
    background-color: $primary-color;
    height: 120%;
    top: -10%;
    width: 80vw;
    z-index: -1;
    left: calc(($content-width - 100vw) / 2);
    border-top-right-radius: 250px;
  }
}
</style>
