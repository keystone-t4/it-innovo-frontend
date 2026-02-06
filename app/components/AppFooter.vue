<template>
  <footer class="footer">
    <div class="footer__inner block">
      <hr class="footer__line line"/>
      <p class="footer__copyright">
        © 2025 Инново. Все права защищены.
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 2rem 0;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>