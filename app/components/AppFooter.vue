<script setup lang="ts">
</script>
<template>
  <footer class="footer">
    <div class="footer__inner block">
      <div class="footer__about">

      </div>
      <div class="footer__cta">
        <div class="footer__cta-navigation">
          <h5 class="footer__cta-title">
          Инново
          </h5>
          <nav class="footer__cta-navigations-links">
            <NuxtLink class="footer__cta-navigations-link"
                      to="/">
              Главная
            </NuxtLink>
            <NuxtLink class="footer__cta-navigations-link"
                      to="/visits">
              «Визиты»
            </NuxtLink>
          </nav>
        </div>
        <div class="footer__cta-contacts">
          <h5 class="footer__cta-title">
            Контакты
          </h5>
          <ul class="footer__cta-contacts-list">
            <li class="footer__cta-contacts-item">
              <svg class="footer__cta-contacts-icon" aria-hidden="true">
                <use href="/sprite.svg#phone" />
              </svg>
              <a href="tel:+78125095903" class="footer__cta-contacts-link">
                +7 (812) 509-59-03
              </a>
            </li>
            <li class="footer__cta-contacts-item">
              <svg class="footer__cta-contacts-icon" aria-hidden="true">
                <use href="/sprite.svg#mail" />
              </svg>
              <a href="mailto:+78125095903" class="footer__cta-contacts-link">
                info@it-innovo.ru
              </a>
            </li>
            <li class="footer__cta-contacts-item">
              <svg class="footer__cta-contacts-icon" aria-hidden="true">
                <use href="/sprite.svg#telegram" />
              </svg>
              <a class="footer__cta-contacts-link"
                 href="https://t.me/innovo_visiting_bot"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                Telegram
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <hr class="footer__line"/>
    <p class="footer__copyright block">
      © 2025 Инново. Все права защищены.
    </p>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  --underline-indent: 50px;

  background-color: var(--dark-gray);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: var(--underline-indent);
  @media (max-width: 1220px) {
    padding-top: 70px;
  }
  @media (max-width: 1024px) {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    padding-top: 50px;
  }
  @media (max-width: 576px) {
    padding-top: 25px;
  }

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--layout-indent);
  }

  .footer__line {
    margin: 0;
    border: none;
    border-top: 1px solid white;
  }

  &__copyright {
    margin-top: var(--underline-indent);
    width: 100%;
    font-size: var(--text-s);
    color: #9A9A9A;
  }
}
</style>