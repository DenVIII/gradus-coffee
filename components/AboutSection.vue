<template>
  <div class="container">
    <h2 class="header">Ваш кофе по погоде!</h2>
  </div>
  <section class="about">
    <div class="about__text-block">
      <p class="about__descr">
        Мы следим за температурой за окном, чтобы предложить вам идеальный
        напиток:
      </p>
      <ul class="about__conditions">
        <li class="about__condition">Жарко? Освежающий латте со льдом!</li>
        <li class="about__condition">Холодно? Ароматный ягодный чай!</li>
      </ul>
      <p class="about__descr">Ваш комфорт — наш главный прогноз ☕️🌤️</p>
    </div>
    <NuxtImg
      src="/products/iced-latte.jpg"
      alt="Ледяной латте"
      width="300"
      height="450"
      class="about__image"
    />
    <NuxtImg
      src="/products/fruit-tea.jpg"
      alt="Ягодный чай"
      width="300"
      height="450"
      class="about__image"
    />
  </section>
</template>

<style lang="scss">
.about {
  display: flex;
  margin: 50px auto;
  gap: 50px;
  &__text-block {
    flex: 2;
  }
  &__image {
    flex: 1;
    border-radius: 24px;
  }
  &__condition {
    list-style: inside;
    padding: 0.5rem 1rem;
  }
  &__descr {
    padding: 0.5rem 1rem;
  }
}

.container {
  position: relative;
  margin: 50px 0 100px auto;
  width: 80%;
  background-color: $secondary-color;
  padding: 5rem;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 120px;

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
.header {
  color: $background-color;
  font-size: $font-size-xl;
  text-align: start;
}
</style>
