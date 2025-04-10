<script setup lang="ts">
import type { Product } from "./ProductCard.vue";

const hotDrinks = ref<Product[]>([]);
const coldDrinks = ref<Product[]>([]);

const fetchMenu = async () => {
  try {
    const response = await fetch("/data/menu.json");
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    coldDrinks.value = [...data.offers.cold];
    hotDrinks.value = [...data.offers.hot];
  } catch (error) {
    console.error("Error loading menu:", error);
    hotDrinks.value = []; // Фолбэк на пустой массив
    coldDrinks.value = [];
  }
};

onMounted(fetchMenu);
</script>

<template>
  <section
    id="menu"
    class="menu"
  >
    <h2 class="menu__header">Наши напитки:</h2>
    <div class="menu__content-block">
      <p class="menu__subtitle">Согреться:</p>
      <div class="menu__products hot-drinks">
        <product-card
          v-for="(drink, index) in hotDrinks"
          :key="index"
          :product="drink"
        />
      </div>
    </div>
    <div class="menu__content-block">
      <p class="menu__subtitle">Охладиться:</p>
      <div class="menu__products hot-drinks">
        <product-card
          v-for="(drink, index) in coldDrinks"
          :key="index"
          :product="drink"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.menu {
  scroll-margin-top: 100px;
  &__header {
    text-align: center;
  }

  &__subtitle {
    font-weight: bold;
    padding: 2rem 0;
  }
  &__products {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 40px;
  }
}
</style>
