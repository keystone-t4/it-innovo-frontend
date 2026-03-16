<script setup>
import DemoViewport from '~/layers/visits/app/features/demo/components/demoViewport.vue'

const heroTitle = 'Система «Визиты» — управляемая логистика вместо хаоса'
const heroDescription = 'Базовый модуль — Электронная очередь — даёт прозрачную картину загрузки на сутки вперёд и создаёт основу для эффективного планирования смен и ресурсов.'

const workSteps = [
  {
    firstStrongText: '',
    text: 'Водители и перевозчики записываются в тайм-слоты через личный кабинет или сайт.'
  },
  {
    firstStrongText: '',
    text: 'Предприятие видит полную картину загрузки в реальном времени.'
  },
  {
    firstStrongText: '',
    text: 'Руководство планирует смены на основе фактических данных.'
  },
  {
    firstStrongText: '',
    text: 'Исключаются «живые» очереди и конфликтные ситуации.'
  }
]
</script>

<!--todo: конвертнуть видосы в webp-->

<template>
  <main class="main">
    <AppSectionHero :title="heroTitle" :description="heroDescription" src="/video/visits.mp4">
      <div class="hero__buttons">
        <a class="hero__button button"
                href="https://t.me/innovo_visiting_bot"
                target="_blank"
                rel="noopener noreferrer"
        >
          Рассчитать вашу экономическую выгоду
        </a>
  <!--        <a class="hero__button button button&#45;&#45;transparent"-->
  <!--           -->
  <!--        >-->
  <!--           Получить консультацию-->
  <!--        </a>-->
      </div>
    </AppSectionHero>

    <section class="main__base base block">
      <h1 class="base__title">
        Базовый модуль —<br>
        <span class="accent-text">Электронная очередь</span>
      </h1>
      <p class="base__description paragraph">
        Прозрачная загрузка. Управляемые смены. Контролируемый ФОТ.
      </p>
      <div class="base__banner">
        <p class="base__banner-text paragraph">
          Электронная очередь формирует понятный график въезда и обслуживания транспорта.
        </p>
      </div>
      <div class="base__grid">
        <div class="base__grid-column">
          <p class="base__grid-item">
            Предприятие заранее видит:
          </p>
          <p class="base__grid-item base__grid-item--card">
            количество машин на каждый временной слот
          </p>
          <p class="base__grid-item base__grid-item--card">
            периоды пиковой нагрузки
          </p>
          <p class="base__grid-item base__grid-item--card">
            периоды низкой загрузки
          </p>
          <p class="base__grid-item base__grid-item--card">
            фактическое время въезда и выезда
          </p>
        </div>

        <div class="base__grid-column">
          <p class="base__grid-item">
            Это создаёт основу для:
          </p>
          <p class="base__grid-item base__grid-item--card">
            гибкого планирования смен
          </p>
          <p class="base__grid-item base__grid-item--card">
            отмены или переноса избыточных смен
          </p>
          <p class="base__grid-item base__grid-item--card">
            перераспределения персонала
          </p>
          <p class="base__grid-item base__grid-item--card">
            фактическое время въезда и выезда
          </p>
        </div>
      </div>
    </section>

    <section class="main__work block">
      <h1 class="main__work-title">
        Как работает<br>
        <span class="accent-text">Электронная очередь</span>
      </h1>
      <AppOrderedCardList :items="workSteps"/>
      <p class="main__work-description paragraph">
        Все участники процесса работают с единой системой данных.
      </p>
    </section>

    <section class="main__demo grey-section">
      <div class="inner block">
        <DemoViewport/>
      </div>
    </section>

    <section class="main__evolution evolution block">
      <h1 class="evolution__title">
        Развитие системы «Визиты»
      </h1>
      <p class="evolution__description paragraph">
        Электронная очередь — базовый модуль системы.
        При&nbsp;необходимости система расширяется.
      </p>
      <div class="evolution__cards">
        <div class="evolution__card card grid-2fr">
          <h1 class="evolution__accent-title">
            Интеграция с весовым комплексом
          </h1>
          <ul class="evolution__list">
            <li class="evolution__item paragraph">
              автоматическая фиксация брутто/нетто
            </li>
            <li class="evolution__item paragraph">
              привязка веса к конкретному визиту
            </li>
            <li class="evolution__item paragraph">
              исключение ручного ввода
            </li>
            <li class="evolution__item paragraph">
              снижение спорных ситуаций с перевозчиками
            </li>
          </ul>
        </div>
        <div class="evolution__card card grid-2fr">
          <h1 class="evolution__accent-title">
            Модуль документооборота
          </h1>
          <ul class="evolution__list">
            <li class="evolution__item paragraph">
              автоматическое формирование актов
            </li>
            <li class="evolution__item paragraph">
              генерация товарных накладных
            </li>
            <li class="evolution__item paragraph">
              фиксация времени обслуживания
            </li>
            <li class="evolution__item paragraph">
              сокращение бумажной работы
            </li>
          </ul>
        </div>
        <div class="evolution__card card grid-2fr">
          <h1 class="evolution__accent-title">
            RFID-учёт движения груза
          </h1>
          <ul class="evolution__list">
            <li class="evolution__item paragraph">
              автоматическая фиксация перемещения паллет
            </li>
            <li class="evolution__item paragraph">
              контроль сырья и готовой продукции
            </li>
            <li class="evolution__item paragraph">
              прозрачность складских операций
            </li>
            <li class="evolution__item paragraph">
              снижение потерь и ошибок инвентаризации
            </li>
          </ul>
        </div>
        <div class="evolution__card card grid-2fr">
          <h1 class="evolution__accent-title">
            «Лаборатория»
          </h1>
          <ul class="evolution__list">
            <li class="evolution__item paragraph">
              цифровая фиксация результатов анализов
            </li>
            <li class="evolution__item paragraph">
              привязка лабораторных данных к конкретному визиту
            </li>
            <li class="evolution__item paragraph">
              автоматическая отчётность
            </li>
            <li class="evolution__item paragraph">
              исключение ручных протоколов
            </li>
            <li class="evolution__item paragraph">
              снижение спорных ситуаций по качеству
            </li>
          </ul>
        </div>
        <div class="evolution__card card grid-2fr">
          <h1 class="evolution__accent-title">
            Интеграция с&nbsp;1С&nbsp;и&nbsp;ERP
          </h1>
          <ul class="evolution__list">
            <li class="evolution__item paragraph">
              синхронизация данных
            </li>
            <li class="evolution__item paragraph">
              исключение двойного ввода
            </li>
            <li class="evolution__item paragraph">
              сквозной учёт визитов, веса, качества и документов
            </li>
            <li class="evolution__item paragraph">
              формирование управленческой отчётности
            </li>
          </ul>
        </div>
      </div>
    </section>

    <AppSectionContacts/>
  </main>
</template>

<style scoped lang="scss">
.hero {
  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    @media (max-width: 768px) {
      align-items: center;
    }
  }

  &__button {
    width: fit-content;
  }
}

.main {
  &__base, &__work, &__evolution {
    display: flex;
    flex-direction: column;
    gap: var(--layout-gap);
  }
}

.base {
  &__description {
    max-width: 543px;
  }

  &__banner {
    position: relative;
    width: 100%;
    height: 487px;
    border-radius: 10px;
    background-image: url("/img/background.png");
    background-position: right bottom;
    background-blend-mode: normal;
    background-repeat: no-repeat;
    background-size: cover;
    &:before {
      border-radius: 10px;
      content: '';
      position: absolute;
      background: linear-gradient(
              90deg,
              rgba(61, 61, 59, 1) 0%,
              rgba(61, 61, 59, 0) 86%,
      );
      width: 100%;
      height: 100%;
      @media (max-width: 768px) {
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }

  &__banner-text {
    position: absolute;
    bottom: 30px;
    left: 40px;
    max-width: 629px;
    color: white;
    @media (max-width: 1024px) {
      bottom: 20px;
      left: 30px;
    }
    @media (max-width: 576px) {
      bottom: 15px;
      left: 25px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--cards-gap);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__grid-column {
    display: flex;
    flex-direction: column;
    gap: var(--cards-gap);
  }
  &__grid-item {
    font-family: 'Manrope', 'sans-serif';
    font-weight: 700;
    font-size: 1.563rem;
    @media (max-width: 1024px) {
      font-size: 1.375rem;
    }
    @media (max-width: 576px) {
      font-size: 1.25rem;
    }
    @media (max-width: 360px) {
      word-break: break-word;
    }

    &--card {
      font-weight: 400;
      background-color: #F5F5FA;
      border-radius: 10px;
      flex: 1;
      display: flex;
      align-items: flex-start;
      padding: 30px 40px;

      @media (max-width: 1024px) {
        padding: 20px 30px;
      }
      @media (max-width: 576px) {
        padding: 15px 25px;
      }

      &::before {
        color: #69C7E1;
        font-size: 0.875rem;
        content: "◆";
        margin-right: 15px;
        flex-shrink: 0;
        margin-top: 10px;
      }
    }
  }
}

.evolution {
  &__description {
    max-width: 671px;
  }

  &__cards {
    display: flex;
    flex-direction: column;
    gap: var(--cards-gap);
  }

  &__card {
    background-color: var(--color-light-blue);
  }

  &__accent-title {
    max-width: 570px;
  }

  &__item {
    display: flex;
    align-items: flex-start;
    &::before {
      color: #69C7E1;
      font-size: 0.875rem;
      content: "◆";
      margin-right: 15px;
      flex-shrink: 0;
      margin-top: 11px;
    }
  }
}
</style>
