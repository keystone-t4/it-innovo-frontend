<script setup lang="ts">
import {useUiStore} from "~/stores/AppUiStore";

const uiStore = useUiStore()
const isMenuOpen = ref(false)
const headerRef = ref<HTMLElement | null>(null)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => { isMenuOpen.value = false; };

useClickOutside(headerRef, closeMenu);
useEscapeKey(closeMenu);
</script>

<template>
  <header class="header" :class="{ 'header--open': isMenuOpen }" ref="headerRef">
    <div class="header__inner block">
      <NuxtLink class="header__logo" to="/" aria-label="To home">
        <NuxtImg
            src="/img/logo.webp"
            alt="logo"
            format="webp"
            fallback="/img/logo.png"
        />
      </NuxtLink>

      <div class="header__controls">
        <!-- Desktop Menu -->
        <nav class="header__menu header__menu--desktop">
          <ul class="header__menu-list">
            <li class="header__menu-item">
              <NuxtLink to="/" class="header__menu-link" active-class="header__menu-link--active">
                Главная
              </NuxtLink>
            </li>
            <li class="header__menu-item">
              <NuxtLink to="/visits" class="header__menu-link" active-class="header__menu-link--active">
                «Визиты»
              </NuxtLink>
            </li>
          </ul>
        </nav>

          <button class="header__menu-dialog-button button" @click="uiStore.openDialog()">
            Обсудить проект
          </button>

        <!-- Burger -->
        <div class="header__burger-wrapper"
             :class="{ 'header__burger-wrapper--open': isMenuOpen }"
             @click="toggleMenu"
             :aria-expanded="isMenuOpen"
             aria-label="Toggle menu"
        >
          <button class="header__burger" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <nav class="header__menu header__menu--mobile"
         :class="{ 'header__menu--open': isMenuOpen }"
         :inert="!isMenuOpen"
    >
      <ul class="header__menu-list">
        <li class="header__menu-item">
          <NuxtLink to="/" class="header__menu-link" active-class="header__menu-link--active" @click="isMenuOpen = false">
            Главная
          </NuxtLink>
        </li>
        <li class="header__menu-item">
          <NuxtLink to="/visits" class="header__menu-link" active-class="header__menu-link--active" @click="isMenuOpen = false">
            «Визиты»
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 0 var(--layout-indent);

  &__inner {
    position: relative;
    width: 100%;
    display: flex;
    gap: 80px;
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
      gap: 40px;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
    @media (max-width: 576px) {
      gap: 20px;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }

  &__logo {
    width: 220px;
    min-width: 220px;

    height: fit-content;

    @media (max-width: 1024px) {
      width: 160px;
      min-width: 160px;

    }
    @media (max-width: 768px) {
      width: 140px;
      min-width: 140px;

    }
    @media (max-width: 576px) {
      width: 120px;
      min-width: 120px;

    }
    @media (max-width: 480px) {
      width: 90px;
      min-width: 90px;

    }
  }

  &__controls {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 80px;
    z-index: 1050;

    @media (max-width: 1024px) {
      gap: 20px;
    }
    @media (max-width: 576px) {
      gap: 10px;
    }
    @media (max-width: 480px) {
      width: fit-content;
      justify-content: end;
    }
  }

  // --- MENU COMMON ---
  &__menu {
    display: flex;
    align-items: center;

    // --- DESKTOP MENU ---
    &--desktop {
      @media (max-width: 1024px) {
        display: none;
      }
    }

    &--mobile {
      display: none;

      @media (max-width: 1024px) {
        display: block;
        position: relative;
        width: 100%;
        z-index: 1000;

        max-height: 0;
        overflow: hidden;
        opacity: 0;
        pointer-events: none;
        transition: max-height 0.32s cubic-bezier(.22,.9,.35,1), opacity 0.22s ease;

        background: transparent;
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        box-shadow: none;
        border: none;

        .header__menu-list {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: var(--cards-gap);
          padding: 0 var(--layout-indent) 1.5rem var(--layout-indent);
          position: relative;
          z-index: 2;
          margin: 0;
        }

        &.header__menu--open {
          max-height: 60vh;
          opacity: 1;
          pointer-events: auto;
        }
      }

      @media (min-width: 1025px) {
        display: none !important;
      }
    }
  }


  &__menu-list {
    display: flex;
    gap: 80px;
    align-items: center;

    @media (max-width: 1024px) {
      gap: 40px;
    }
    @media (max-width: 768px) {
      gap: 20px;
    }
  }

  &__menu-link {
    color: var(--text-dark);
    text-decoration: none;
    font-size: var(--text-md);

    @media (max-width: 1024px) {
      font-size: var(--text-s);
    }
    @media (max-width: 576px) {
      font-size: var(--text-xs);
    }

    &:hover {
      color: var(--text-dark-hover);
    }

    &--active {
      font-weight: 700;
    }
  }

  // --- BURGER ---
  &__burger-wrapper {
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray);
    padding: 14px 12px;
    border-radius: 10px;

    flex-shrink: 0;

    @media (max-width: 680px) {
      padding: 12.5px 11px;
    }
    @media (max-width: 576px) {
      padding: 11px 9px;
    }

    @media (max-width: 1024px) {
      display: flex;
    }

    &--open span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
      @media (max-width: 680px) {
        transform: translateY(7px) rotate(45deg);
      }
      @media (max-width: 480px) {
        transform: translateY(6px) rotate(45deg);
      }
    }

    &--open span:nth-child(2) {
      opacity: 0;
    }

    &--open span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
      @media (max-width: 680px) {
        transform: translateY(-7px) rotate(-45deg);
      }
      @media (max-width: 480px) {
        transform: translateY(-6px) rotate(-45deg);
      }
    }
  }

  &__burger {
    -webkit-appearance: none;
    appearance: none;

    width: 26px;
    height: 18px;

    flex-shrink: 0;
    flex-grow: 0;

    border: none;
    background: none;
    position: relative;
    padding: 0;
    margin: 0;
    @media (max-width: 680px) {
      width: 20px;
      height: 16px;
    }
    @media (max-width: 480px) {
      width: 18px;
      height: 14px;
    }

    span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--text-dark);
      transition: transform 0.3s ease, opacity 0.3s ease;
      flex-shrink: 0;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
      }

      &:nth-child(3) {
        bottom: 0;
      }
    }
  }



  &__menu-dialog-button {
    @media (max-width: 1024px) {
      font-size: 15.5px;
    }
    @media (max-width: 480px) {
      font-size: 10px;
      width: fit-content;
    }
  }


}
</style>