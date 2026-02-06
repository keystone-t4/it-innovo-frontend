<template>
  <header class="header">
    <div class="header__inner block">
      <NuxtLink class="header__logo" to="/visits" aria-label="To home">
        <NuxtImg
            src="/img/logo.webp"
            alt="logo"
            format="webp"
            fallback="/img/logo.png"
        />
      </NuxtLink>
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
  background: white;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
}
.header__inner {
  width: 100%;
  display: grid;
  padding: 1rem var(--layout-indent);
  grid-template-columns: 1fr;
  align-items: end;
}
.header__logo {
  width: 140px;
  @media (max-width: 636px) {
    width: 100px;
  }
}
</style>
