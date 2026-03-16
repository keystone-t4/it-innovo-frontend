<template>
  <footer class="footer">
    <div class="footer__main block">
      <div class="footer__about">
        <NuxtImg class="footer__logo" src="/img/white-logo.png" alt="logo"/>
        <p class="footer__about-description">
          Управляемая логистика вместо хаоса
        </p>
      </div>
      <ul class="footer__uri">
        <li class="footer__uri-item">
          ИНН 7810964768
        </li>
        <li class="footer__uri-item">
          КПП 781001001
        </li>
        <li class="footer__uri-item">
          ОГРН 1247800087930
        </li>
      </ul>
      <ul class="footer__contacts-list">
        <li class="footer__contacts-item">
          <a href="tel:+78125095903" class="footer__contacts-link">
            <svg class="footer__contacts-icon" aria-hidden="true">
              <use href="/sprite.svg#phone" />
            </svg>
            +7 (812) 509-59-03
          </a>
        </li>
        <li class="footer__contacts-item">
          <a href="mailto:+78125095903" class="footer__contacts-link">
            <svg class="footer__contacts-icon" aria-hidden="true">
              <use href="/sprite.svg#mail" />
            </svg>
            info@it-innovo.ru
          </a>
        </li>
        <li class="footer__contacts-item">
          <a class="footer__contacts-link"
             href="https://t.me/innovo_visiting_bot"
             target="_blank"
             rel="noopener noreferrer"
          >
            <svg class="footer__contacts-icon" aria-hidden="true">
              <use href="/sprite.svg#telegram" />
            </svg>
            Telegram
          </a>
        </li>
      </ul>
      <a href="https://yandex.ru/maps/2/saint-petersburg/house/predportovaya_ulitsa_2k3/Z0kYdA5hQEwGQFtjfXRyd3RnbA==/?ll=30.291991%2C59.836848&z=17.06"
         class="footer__contacts-address footer__contacts-link" target="_blank" rel="noopener noreferrer"
      >
        <svg class="footer__contacts-icon" aria-hidden="true">
          <use href="/sprite.svg#map" />
        </svg>
        г. Санкт-Петербург, ул. Предпортовая, д. 2 к. 3 литера А, офис 317
      </a>
    </div>
    <hr class="footer__line"/>
    <div class="footer__legal block">
      <div class="footer__policy-group">
        <p class="footer__copyright">© 2025 Инново. Все права защищены.</p>
        <nav class="footer__policy-links">
          <NuxtLink class="footer__policy-link"
                    to="/privacy-policy"
          >
            Политика конфиденциальности
          </NuxtLink>
          <NuxtLink class="footer__policy-link"
                    to="/personal-data-processing-policy"
          >
            Политика обработки персональных данных
          </NuxtLink>
        </nav>
      </div>

      <div class="footer__credentials-group">
        <div class="footer__okved">
          Коды деятельности организации по Общероссийскому классификатору видов
          экономической деятельности (ОКВЭД): 62.01 Разработка компьютерного
          программного обеспечения
        </div>
        <NuxtLink class="footer__registry-link"
                  to="/Extract_from_the_register_of_accredited_organizations.pdf"
                  external
                  target="_blank"
                  rel="noopener noreferrer"
        >
          Выписка из реестра аккредитованных ИТ-компаний
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  --underline-indent: 50px;

  background-color: var(--color-dark-gray);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px var(--layout-indent) var(--underline-indent) var(--layout-indent);
  @media (max-width: 1024px) {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
  }

  &__main {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: var(--layout-indent);
    padding: 0 var(--layout-indent) 0 var(--layout-indent);

    margin-bottom: 50px;
    @media (max-width: 1220px) {
      grid-template-columns: 1.5fr 3.2fr;
      gap: 2rem;
    }
    @media (max-width: 1024px) {
      gap: var(--layout-indent);
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      margin-bottom: 40px;
    }
  }

  &__about {
    display: flex;
    flex-direction: column;
  }

  &__logo {
    width: 198px;
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
  }

  &__about-description {
    font-family: 'Manrope', 'sans-serif';
    font-weight: 200;
    font-size: var(--text-s);
    color: var(--color-ligth-gray-accent);
    margin-left: 59px;
    max-width: 224px;
    margin-top: -5px;
    line-height: 23px;
    @media (max-width: 1490px) {
      margin-left: 0;
      margin-top: 5px;
    }
    @media (max-width: 1220px) {
      font-size: var(--text-xs);
    }
    @media (max-width: 576px) {
      font-size: var(--text-xxs);
    }
  }

  &__uri-item, &__contacts-link {
    font-family: 'Manrope', 'sans-serif';
    font-weight: 400;
    font-size: var(--text-s);
    color: var(--color-ligth-gray-accent);
    @media (max-width: 1220px) {
      font-size: var(--text-xs);
    }
    @media (max-width: 576px) {
      font-size: var(--text-xxs);
    }
  }
  &__contacts-link:hover , &__address:hover {
    cursor: pointer;
    color: var(--color-gray-hover);
  }

  &__contacts-link {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  &__contacts-icon {
    width: 12px;
    min-width: 12px;
    height: 16px;
    min-height: 16px;
  }

  &__contacts-address {
    display: flex;
    align-items: start;
    .footer__contacts-icon {
      margin-top: 8px;
    }
  }

  &__line {
    margin: 0;
    border: none;
    border-top: 1px solid white;
  }

  &__copyright {
    width: 100%;
    font-size: var(--text-s);
    color: #9A9A9A;
  }

  &__legal {
    padding: 0 var(--layout-indent) 0 var(--layout-indent);
    margin-top: var(--underline-indent);
    display: grid;
    grid-template-columns: 1.5fr 3.4fr;
    gap: var(--layout-indent);
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  &__okved, &__registry-link, &__policy-link, &__copyright {
    font-family: 'Manrope', 'sans-serif';
    font-weight: 400;
    font-size: var(--text-s);
    color: var(--text-muted-gray);
    text-decoration: none;

    @media (max-width: 1220px) {
      font-size: var(--text-xs);
    }
    @media (max-width: 576px) {
      font-size: var(--text-xxs);
    }
  }

  &__registry-link:hover, &__policy-link:hover {
    color: var(--color-gray-hover);
  }
}
</style>