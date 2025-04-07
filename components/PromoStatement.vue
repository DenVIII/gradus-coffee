<template>
  <div class="promo-statement">
    <h2 class="promo-statement__header">
      Мы всегда предложим подходящий напиток!
    </h2>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/helpers/variables.scss" as *;

.promo-statement {
  position: relative;
  margin: 50px 0;
  width: 80%;
  background-color: $accent-color;
  padding: 5rem;
  border-top-right-radius: 120px;
  border-bottom-right-radius: 12px;

  &__header {
    color: $background-color;
    font-size: $font-size-xl;
  }

  &::after {
    content: "";
    position: absolute;
    right: 5rem;
    bottom: 2rem;
    display: block;
    margin-left: auto;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    background-color: $background-color;
  }
}
</style>
