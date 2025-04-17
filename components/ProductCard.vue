<script setup lang="ts">
import type { Product } from "~/types/product";
const props = defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="product-card">
    <NuxtImg
      :src="product.imageUrl"
      :alt="product.name"
      width="200"
      height="300"
      class="product-card__image"
    />
    <h3 class="product-card__name">{{ product.name }}</h3>
    <p
      v-if="product.discount"
      class="product-card__price"
    >
      <span class="product-card__old-price">{{ product.price }}₽</span>
      <span class="product-card__promo-price"
        >{{ product.price * (1 - product.discount) }}₽</span
      >
    </p>
    <p
      v-else
      class="product-card__price"
    >
      {{ product.price }}₽
    </p>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/helpers/variables.scss" as *;
.product-card {
  box-sizing: content-box;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  width: 200px;
  display: flex;
  flex-direction: column;
  &__image {
    border-radius: 8px 8px 0 0;
    width: 200px;
    height: 300px;
    object-fit: contain;
    object-position: center top;
    overflow: hidden;
  }

  &__name {
    padding: 0.5rem 1rem;
    font-size: $font-size-card-headers;
    color: $text-color;
  }

  &__price,
  &__promo-price {
    padding: 0 1rem 1rem;

    color: $text-color;
  }

  &__price {
    margin-top: auto;
  }

  &__promo-price {
    color: $accent-color;
  }
  &__old-price {
    font-size: $font-size-s;
    text-decoration: line-through;
  }
}

@media (max-width: 480px) {
  .product-card {
    width: 140px;
    &__image {
      width: 140px;
      height: 210px;
    }
    &__name {
      font-size: 1.5rem;
    }
  }
}

@media (min-width: 2000px) {
  .product-card {
    width: 300px;
    &__image {
      width: 300px;
      height: 450px;
    }
  }
}
</style>
