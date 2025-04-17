<template>
  <section
    id="contacts"
    class="contacts"
  >
    <div class="contacts__image-wrapper">
      <NuxtImg
        src="/coffee-cup-red-bg.jpg"
        width="300"
        height="450"
        class="contacts__image"
        sizes="250px sm:250px md:250px lg:300px"
      />
    </div>
    <div class="contacts__content-block">
      <h2 class="contacts__header">Наши контакты:</h2>
      <p>
        Звоните:
        <a
          class="contacts__phone"
          href="tel: +79091238099"
          >+7(909)123-80-99</a
        >
      </p>
      <div class="contacts__media">
        <p>Пишите:</p>
        <div class="contacts__media-icons">
          <a
            href="#"
            class="contacts__media-link"
            ><img
              src="/icons/Telegram_square_black.svg"
              alt="Иконка Telegram"
              class="contacts__media-icon"
          /></a>
          <a
            href="#"
            class="contacts__media-link"
            ><img
              src="/icons/VK Logo Black & White_rounded_square.svg"
              alt="Иконка ВКонтакте"
              class="contacts__media-icon"
          /></a>
          <a
            href="#"
            class="contacts__media-link"
            ><img
              src="/icons/WhatsApp_square_black.svg"
              alt="Иконка WhatsApp"
              class="contacts__media-icon"
          /></a>
        </div>
      </div>
      <p class="contacts__address">
        Заходите: Москва, улица Профессора Рандомовского, дом 17
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.contacts {
  scroll-margin-top: 100px;
  margin-top: 6rem;
  display: flex;
  gap: 50px;
  &__header {
    margin-bottom: 2rem;
  }
  &__image-wrapper {
    display: flex;
    align-items: end;
  }
  &__image {
    border-radius: 12px 12px 0 0;
    aspect-ratio: 2/3;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &__phone {
    font-weight: bold;
  }
  &__phone:hover {
    color: $primary-color;
  }
  &__media {
    margin-top: 1rem;
  }
  &__media-link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    border-radius: 8px;
  }
  &__media-link:hover {
    background-color: $primary-color;
  }
  &__media-icon {
    width: 48px;
    height: 48px;
  }
  &__media-icons {
    margin-top: 1rem;
    display: flex;
    gap: 16px;
  }
  &__address {
    margin-top: 1rem;
  }
}

@media (max-width: 768px) {
  .contacts {
    margin-top: 4rem;
    gap: 30px;
    &__image-wrapper {
      width: 200px;
    }
    &__content-block {
      max-width: 60%;
    }
  }
}

@media (max-width: 480px) {
  .contacts {
    margin-top: 2rem;
    &__image-wrapper {
      display: none;
    }
    &__content-block {
      max-width: 100%;
      padding: 20px 0;
    }
    &__media-icon {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
