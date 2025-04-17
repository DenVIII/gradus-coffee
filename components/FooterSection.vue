<template>
  <footer class="footer">
    <div class="footer__content-block">
      <h4 class="footer__logo">Градус°</h4>
      <div class="footer__about">
        <h4 class="footer_subtitle">Контакты:</h4>
        <p>Москва, улица Профессора Рандомовского, дом 17</p>
        <p>
          Телефон:
          <a
            class="footer__phone"
            href="tel: +79091238099"
            >+7(909)123-80-99</a
          >
        </p>

        <p>ПН - ВСК: <span class="footer__hours">08:00 - 20:00</span></p>
      </div>
      <ul class="footer__menu">
        <li class="footer__menu-item"><a href="#">Главная</a></li>
        <li class="footer__menu-item"><a href="#">Акции</a></li>
        <li class="footer__menu-item"><a href="#">Меню</a></li>
        <li class="footer__menu-item"><a href="#">О нас</a></li>
        <li class="footer__menu-item"><a href="#">Контакты</a></li>
      </ul>
      <div class="footer__media">
        <h3 class="footer__logo">Наши соцсети:</h3>
        <div class="footer__media-links">
          <a
            href="#"
            class="footer__media-link"
            ><img
              src="/icons/Telegram_square_black.svg"
              alt="Иконка Telegram"
              class="footer__media-icon"
          /></a>
          <a
            href="#"
            class="footer__media-link"
            ><img
              src="/icons/VK Logo Black & White_rounded_square.svg"
              alt="Иконка ВКонтакте"
              class="footer__media-icon"
          /></a>
          <a
            href="#"
            class="footer__media-link"
            ><img
              src="/icons/WhatsApp_square_black.svg"
              alt="Иконка WhatsApp"
              class="footer__media-icon"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background-color: $text-color;
  padding: 2rem 0;
  &__about {
    p {
      padding: 5px 0;
    }
  }
  &__content-block {
    width: var(--content-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 1rem;
  }
  &__logo {
    grid-area: 1 / 1 / 2 / 4;
    font-size: 2rem;
  }

  &__media-icon {
    width: 48px;
    height: 48px;
  }
  &__media-links {
    display: flex;
    gap: 1rem;
  }
  &__menu-item {
    padding: 0.25rem 0;
    width: 70%;
    margin: 0 auto;
  }
  & * {
    color: $background-color;
  }
}

@media (max-width: 768px) {
  .footer {
    &__phone,
    &__hours {
      display: inline-block;
    }
    &__menu-item {
      width: 50%;
    }
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 20px 10px;
    &__content-block {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(3, auto);
    }
    &__logo {
      font-size: 1.5rem;
      grid-area: 1 / 1 / 2 / 3;
    }
    &__about {
      grid-area: 2 / 1 / 3 / 2;
    }
    &__menu {
      grid-area: 2 / 2 / 3 / 3;
    }
    &__media {
      grid-area: 3 / 1 / 4 / 3;
    }
    &__media-icon {
      margin-top: 20px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>
