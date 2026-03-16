<script setup lang="ts">

</script>

<template>
  <section class="contacts block">
    <div class="contacts__about grid-3fr">
      <div class="contacts__about-text">
        <h1 class="contacts__title">
          Узнайте, как наши решения
          <span class="accent-text"> могут помочь</span>
          вашему бизнесу
        </h1>
        <p class="contacts__description paragraph">
          Ответим на все вопросы, проведем демонстрацию или
          подготовим предварительный расчет.
        </p>
      </div>
      <div class="contacts__cta">
        <div class="contacts__cta-item">
          <svg class="contacts__cta-icon">
            <use href="/sprite.svg#phone"/>
          </svg>
          <a class="contacts__cta-link paragraph" href="tel:+78125095903">
            +7 (812) 509-59-03
          </a>
        </div>
        <div class="contacts__cta-item">
          <svg class="contacts__cta-icon">
            <use href="/sprite.svg#mail"/>
          </svg>
          <a class="contacts__cta-link paragraph" href="mailto:info@it-innovo.ru">
            info@it-innovo.ru
          </a>
        </div>
        <a class="contacts__telegram-bot-button button"
           href="https://t.me/innovo_visiting_bot"
           target="_blank"
           rel="noopener noreferrer"
        >
          Бот Telegram
        </a>
      </div>
    </div>
    <div class="contacts__team grid-3fr">
      <h2 class="contacts__team-title">
        Над вашим проектом будут работать
      </h2>
      <div class="contacts__team-member">
        <NuxtImg class="contacts__team-member-icon"
                 src="/img/Sasha-photo.png"
                 alt="фото Александра"
        />
        <div class="contacts__team-member-description">
          <p class="contacts__team-member-name paragraph">
            Александр Васильев
          </p>
          <p class="contacts__team-member-about">
            Выстраивает рабочие процессы и координирует работу команды
          </p>
        </div>
      </div>
      <div class="contacts__team-member">
        <NuxtImg class="contacts__team-member-icon"
                 src="/img/Sonya-photo.png"
                 alt="фото Софии"
        />
        <div class="contacts__team-member-description">
          <p class="contacts__team-member-name paragraph">
            София Хен
          </p>
          <p class="contacts__team-member-about">
            Развивает продукт и сопровождает клиентов на всех этапах работы
          </p>
        </div>
      </div>
      <div class="contacts__team-member">
        <NuxtImg class="contacts__team-member-icon"
                 src="/img/Radik-photo.png"
                 alt="фото Радика"
        />
        <div class="contacts__team-member-description">
          <p class="contacts__team-member-name paragraph">
            Радик Гайнутдинов
          </p>
          <p class="contacts__team-member-about">
            Развивает отношения с клиентами и отвечает за качество сервиса
          </p>
        </div>
      </div>
      <div class="contacts__team-member">
        <NuxtImg class="contacts__team-member-icon"
                 src="/img/David-photo.png"
        />
        <div class="contacts__team-member-description">
          <p class="contacts__team-member-name paragraph">
            Давыд Седеньо-Андреев
          </p>
          <p class="contacts__team-member-about">
            Отвечает за аналитику и техническую реализацию проектов
          </p>
        </div>
      </div>
      <div class="contacts__team-member">
        <NuxtImg class="contacts__team-member-icon"
                 src="/img/Masha-photo.png"
                 alt="фото Марии"
        />
        <div class="contacts__team-member-description">
          <p class="contacts__team-member-name paragraph">
            Мария Шаркова
          </p>
          <p class="contacts__team-member-about">
            Развивает новые направления и партнёрства компании
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contacts {
  &__about-text {
    grid-column-start: 1;
    grid-column-end: 3;
    max-width: 628px;
  }

  &__title &__team {
    margin-bottom: var(--layout-gap);
  }

  &__about {
    margin-bottom: 80px;
    @media (max-width: 1220px) {
      margin-bottom: 70px;
    }
    @media (max-width: 1024px) {
      margin-bottom: 50px;
    }
    @media (max-width: 576px) {
      margin-bottom: 25px;
    }
  }

  &__description {
    margin-top: 1.5rem;
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }

  &__team-member {
    display: flex;
    align-items: center;
    gap: var(--cards-gap);
  }

  &__team-member-icon {
    width: 97px;
    height: 97px;

    @media (max-width: 1220px) {
      width: 85px;
      height: 85px;
    }
    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
    }
  }

  &__team-title {
    max-width: 375px;
  }

  &__team-member-name {
    font-weight: 700;
  }

  &__team-member-about {
    font-size: var(--text-s);
    @media (max-width: 1024px) {
      font-size: var(--text-xs);
    }
    @media (max-width: 576px) {
      font-size: var(--text-xxs);
    }
  }

  &__cta {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: end;
  }

  &__cta-item {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 576px) {
      gap: 10px;
    }
  }

  &__cta-icon {
    color: var(--color-accent);
    width: 27px;
    height: 27px;
    @media (max-width: 1024px) {
      width: 22px;
      height: 22px;
    }
  }

  &__cta-link {
    text-decoration: none;
    color: var(--text-dark);
    &:hover {
      color: var(--color-dark-gray);
    }
  }

  &__telegram-bot-button {
    margin-top: 1.5rem;
    width: fit-content;
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
    @media (max-width: 480px) {
      margin-top: 0.625rem;
    }
  }
}
</style>