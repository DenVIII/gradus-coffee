<template>
  <div class="container">
    <h2 class="header">Ваш кофе по погоде!</h2>
  </div>
  <section
    id="about"
    class="about"
  >
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
    <div class="about__image-wrapper">
      <NuxtImg
        src="/products/iced-latte.jpg"
        alt="Ледяной латте"
        width="300"
        height="450"
        sizes="200px sm:200px md:250px lg:300px"
        class="about__image"
      />
    </div>
    <div class="about__image-wrapper">
      <NuxtImg
        src="/products/fruit-tea.jpg"
        alt="Ягодный чай"
        width="300"
        height="450"
        sizes="200px sm:200px md:250px lg:300px"
        class="about__image"
      />
    </div>
    <div class="about__images-mobile">
      <div class="about__image-wrapper-tablet">
        <NuxtImg
          src="/products/iced-latte.jpg"
          alt="Ледяной латте"
          width="300"
          height="450"
          sizes="200px sm:200px md:250px lg:300px"
          class="about__image"
        />
      </div>
      <div class="about__image-wrapper-tablet">
        <NuxtImg
          src="/products/fruit-tea.jpg"
          alt="Ягодный чай"
          width="300"
          height="450"
          sizes="200px sm:200px md:250px lg:300px"
          class="about__image"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about {
  scroll-margin-top: 100px;
  display: flex;
  margin: 50px auto;
  gap: 50px;
  &__text-block {
    flex: 2;
  }
  &__image {
    flex: 1;
    border-radius: 24px;
    aspect-ratio: 2/3;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &__condition {
    list-style: inside;
    padding: 0.5rem 1rem;
  }
  &__descr {
    padding: 0.5rem 1rem;
  }
  &__images-mobile {
    display: none;
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

@media (max-width: 1024px) {
  .about {
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .about {
    flex-direction: column;
    &__image-wrapper {
      display: none;
    }
    &__images-mobile {
      display: flex;
      gap: 30px;
    }
    &__image {
      width: 200px;
    }
  }
}

@media (max-width: 480px) {
  .about {
    margin-top: 20px;
    &__images-mobile {
      margin: 0 auto;
      gap: 20px;
    }
    &__image {
      width: 140px;
      border-radius: 12px;
    }
  }

  .container {
    margin: 20px 0;
    width: 100%;
    border-bottom-left-radius: 40px;
    padding: 2rem;
    .header {
      font-size: 2rem;
    }
    &::after {
      width: 24px;
      height: 24px;
      right: 1rem;
      bottom: 1rem;
    }
  }
}
</style>
