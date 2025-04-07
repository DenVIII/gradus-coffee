<script setup lang="ts">
const img = useImage();

export interface Product {
  imageUrl: string;
  name: string;
  price: number;
  discount?: number;
}
const props = defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="product-card">
    <NuxtImg
      :src="product.imageUrl"
      :alt="product.name"
      width="250"
      height="250"
      class="product-card__image"
    />
    <h3 class="product-card__name">{{ product.name }}</h3>
    <p class="product-card__price">{{ product.price }} ₽</p>
    <p
      class="product-card__promo-price"
      v-if="product.discount"
    >
      {{ product.price * (1 - product.discount) }} ₽
    </p>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/helpers/variables.scss" as *;
.product-card {
  box-sizing: content-box;
  margin: 0 auto;
  border: 2px solid $text-color;
  border-radius: 12px;
  width: 200px;

  &__image {
    border-radius: 8px 8px 0 0;
    width: 200px;
    height: 300px;
    object-fit: cover;
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
    font-weight: bold;
    color: $text-color;
  }

  &__price {
    font-size: $font-size-s;
    text-decoration: line-through;
  }

  &__promo-price {
    color: $accent-color;
  }
}
</style>
