<script setup lang="ts">
const heroImagePath = "/bg-hero.jpg";

const sizesConfig = {
  // 100vw на всех экранах + кастомные брейкпоинты
  xs: "100vw",
  sm: "100vw",
  md: "100vw",
  lg: "100vw",
  xl: "100vw",
  xxl: "100vw",
};
</script>

<template>
  <section
    class="hero"
    id="hero"
  >
    <h1 class="hero__header">Градус°</h1>
    <p class="hero__subtitle">Ваш кофе-прогноз на сегодня!</p>

    <NuxtPicture
      :src="heroImagePath"
      :sizes="sizesConfig"
      :modifiers="{
        fit: 'cover',
        quality: 80,
        dpr: [1, 2],
      }"
      class="hero__background"
      alt="Hero Background"
      loading="eager"
      fetchpriority="high"
    />
  </section>
</template>

<style lang="scss">
@use "@/assets/scss/helpers/variables.scss" as *;

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100vw;
  position: relative;
  &__header {
    color: $background-color;
  }
  &__subtitle {
    color: $background-color;
    font-weight: 300;
    margin-top: 30px;
  }
  &__background {
    filter: brightness(0.35);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    border-bottom-left-radius: 250px;
    overflow: hidden;
  }
}
</style>
