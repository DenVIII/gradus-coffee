<script setup lang="ts">
const isNavbarVisible = ref(false);
const isMenuOpen = ref(false);

const checkScroll = () => {
  isNavbarVisible.value = window.pageYOffset > 200;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <transition name="navbar">
    <nav
      class="navbar"
      v-if="isNavbarVisible || isMenuOpen"
    >
      <div class="navbar__container">
        <a
          href="#home"
          class="navbar__logo"
          >Градус°</a
        >

        <button
          class="navbar__burger"
          :class="{ 'navbar__burger--active': isMenuOpen }"
          @click="toggleMenu"
          aria-label="Меню"
        >
          <span class="navbar__burger-line"></span>
          <span class="navbar__burger-line"></span>
          <span class="navbar__burger-line"></span>
        </button>

        <div class="navbar__desktop-menu">
          <a
            href="#sale"
            class="navbar__link"
            >Акции</a
          >
          <a
            href="#menu"
            class="navbar__link"
            >Меню</a
          >
          <a
            href="#contacts"
            class="navbar__link"
            >Контакты</a
          >
          <a
            href="#adress"
            class="navbar__link"
            >Адрес</a
          >
        </div>

        <transition name="slide">
          <div
            class="navbar__mobile-menu"
            v-if="isMenuOpen"
            v-click-outside="() => (isMenuOpen = false)"
          >
            <a
              href="#sale"
              class="navbar__mobile-link"
              @click="isMenuOpen = false"
              >Акции</a
            >
            <a
              href="#menu"
              class="navbar__mobile-link"
              @click="isMenuOpen = false"
              >Меню</a
            >
            <a
              href="#contacts"
              class="navbar__mobile-link"
              @click="isMenuOpen = false"
              >Контакты</a
            >
            <a
              href="#adress"
              class="navbar__mobile-link"
              @click="isMenuOpen = false"
              >Адрес</a
            >
          </div>
        </transition>
      </div>
    </nav>
  </transition>
</template>

<style lang="scss">
@use "@/assets/scss/helpers/variables.scss" as *;

.navbar-enter-active,
.navbar-leave-active {
  transition: all 0.3s ease;
}

.navbar-enter-from,
.navbar-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.navbar-enter-to,
.navbar-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.navbar {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  padding: 20px 0;
  background-color: $background-color;
  height: 100px;

  &__container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 1200px;
    position: relative;
  }

  &__logo {
    margin-right: auto;
    font-family: $font-family-header;
    font-size: $font-size-l;
    padding: 0 20px;
    cursor: pointer;
  }

  &__burger {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 100;

    &-line {
      display: block;
      width: 25px;
      height: 3px;
      background: $text-color;
      margin: 5px 0;
      transition: all 0.3s ease;
    }

    &--active .navbar__burger-line:nth-child(1) {
      transform: rotate(45deg) translate(5px, 6px);
    }
    &--active .navbar__burger-line:nth-child(2) {
      opacity: 0;
    }
    &--active .navbar__burger-line:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -6px);
    }
  }

  &__desktop-menu {
    display: flex;
  }

  &__link {
    padding: 0 20px;
    cursor: pointer;
  }

  &__mobile-menu {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    background: $background-color;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  &__mobile-link {
    padding: 10px 20px;
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .navbar__container {
    width: 100%;
    padding: 0 20px;
  }

  .navbar__desktop-menu {
    display: none;
  }

  .navbar__burger {
    display: block;
  }
}
</style>
