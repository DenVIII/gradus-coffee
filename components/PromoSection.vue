<script setup lang="ts">
import type { Product } from "./ProductCard.vue";

const promoProduct: Product = {
  imageUrl: "/products/latte.jpg",
  name: "Латте",
  price: 200,
  discount: 0.2,
};
</script>

<template>
  <section class="promo">
    <h2 class="promo__title">
      А мы подобрали для вас специальное предложение!
    </h2>
    <div class="promo__weather-offer">
      <p class="promo__weather-text">
        На улице холодно!<br />
        Заходите согреться и попробовать:
      </p>
      <product-card :product="promoProduct" />
    </div>
  </section>
</template>
<style lang="scss">
@use "@/assets/scss/helpers/variables.scss" as *;

.promo {
  scroll-margin-top: 120px;
  padding: 2rem 0;
  display: flex;
  gap: 2rem;

  &__title {
    max-width: 50%;
    align-self: center;
  }

  &__weather-offer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    padding: 1.5rem 3rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &__weather-text {
    margin-bottom: 1.5rem;
    text-align: center;
  }
}
</style>
