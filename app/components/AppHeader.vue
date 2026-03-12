<script setup lang="ts">
</script>
<template>
  <header class="header">
    <div class="header__inner block">
      <NuxtLink class="header__logo" to="/" aria-label="To home">
        <NuxtImg
            src="/img/logo.webp"
            alt="logo"
            format="webp"
            fallback="/img/logo.png"
        />
      </NuxtLink>
      <nav class="header__menu">
        <ul class="header__menu-list">
          <li class="header__menu-item">
            <NuxtLink to="/" class="header__menu-link "
                      active-class="header__menu-link--active"
            >
              Главная
            </NuxtLink>
          </li>
          <li class="header__menu-item">
            <NuxtLink to="/visits" class="header__menu-link"
                      active-class="header__menu-link--active"
            >
              «Визиты»
            </NuxtLink>
          </li>
          <li class="header__menu-item">
            <button class="header__menu-dialog-button button">
              Обсудить&nbspпроект
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.65);
  /* blur стекла */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); // для Safari

  /* опционально — лёгкая граница как у glass UI */
  border-bottom: 1px solid rgba(255,255,255,0.3);

  &__inner {
    width: 100%;
    display: flex;
    gap: 80px;
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1024px) {
      gap: 40px;
    }
    @media (max-width: 576px) {
      gap: 20px;
    }
  }

  &__logo {
    width: 220px;
    height: fit-content;
    @media (max-width: 1024px) {
      width: 160px;
    }
    @media (max-width: 768px) {
      width: 140px;
    }
    @media (max-width: 576px) {
      width: 120px;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
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
}
</style>
