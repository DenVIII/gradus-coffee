<script setup lang="ts">
const props = defineProps(["product"]);
</script>

<template>
  <section class="promo">
    <h2 class="promo__title">
      А мы подобрали для вас специальное предложение!
    </h2>
    <div class="promo__weather-offer">
      <p class="promo__weather-text">
        <slot></slot>
      </p>
      <product-card :product="product" />
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

@media (max-width: 480px) {
  .promo {
    flex-direction: column;
    padding: 20px 10px;
    &__title {
      max-width: 100%;
    }
    &__weather-offer {
      margin: 0 auto;
    }
  }
}
</style>
