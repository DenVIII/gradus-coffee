<script setup lang="ts">
const props = defineProps(["product", "weather"]);
</script>

<template>
  <section
    id="promo"
    class="forecast-promo"
  >
    <h2 class="forecast-promo__header mobile">Наш сегодняшний прогноз:</h2>
    <div class="forecast-promo__content-block">
      <h2 class="forecast-promo__header">Наш сегодняшний прогноз:</h2>
      <div class="forecast-promo__weather">
        <p class="forecast-promo__location">Сейчас в Москве:</p>
        <p class="forecast-promo__temperature">
          <span class="accent-text"
            >{{ weather.temp }}°C, а за окном {{ weather.description }}</span
          >
        </p>
      </div>
      <div class="forecast-promo__offer">
        <p>Попробуйте {{ product.name }}!</p>
        <p>
          Всего за
          <span class="forecast-promo__discount"
            >{{ product.price * (1 - product.discount) }}₽</span
          >
          вместо {{ product.price }}₽ до конца дня!
        </p>
      </div>
    </div>
    <NuxtImg
      :src="product.imageUrl"
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
  scroll-margin-top: 100px;
  position: relative;
  margin: 0 auto;
  display: flex;
  gap: 10rem;
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
    left: calc((var(--content-width) - 100vw) / 2);
    border-top-right-radius: 250px;
  }
  .mobile {
    display: none;
  }
}

@media (max-width: 1024px) {
  .forecast-promo {
    gap: 4rem;
    ::after {
      width: 90vw;
      border-top-right-radius: 200px;
    }
  }
}

@media (max-width: 768px) {
  .forecast-promo {
    ::after {
      width: 100vw;
      border-top-right-radius: 100px;
    }
  }
}

@media (max-width: 480px) {
  .forecast-promo {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    &__image {
      margin: 0 auto;
      margin-top: auto;
      width: 140px;
      height: 210px;
    }
    &__header {
      display: none;
    }
    .mobile {
      display: block;
      grid-area: 1 / 1/ 2/ 3;
    }
    ::after {
      border-top-right-radius: 60px;
    }
  }
}
</style>
