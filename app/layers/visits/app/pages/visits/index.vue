<script setup>
import DemoViewport from '~/layers/visits/app/features/demo/components/demoViewport.vue'
import SectionBaseModule from "~/layers/visits/app/components/main/SectionBaseModule.vue";
import SectionEvolution from "~/layers/visits/app/components/main/SectionEvolution.vue";
import SectionCases from "~/layers/visits/app/components/main/SectionCases.vue";
import SectionQuestions from "~/layers/visits/app/components/main/SectionQuestions.vue";
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

    <SectionBaseModule/>

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
        <h1 class="main__demo-title">
          Интерфейс системы «Визиты»
        </h1>
        <p class="main__demo-description paragraph">
          Выберите тип пользователя, чтобы увидеть интерфейс системы
        </p>
        <DemoViewport/>
      </div>
    </section>

    <SectionEvolution/>

    <SectionCases/>

    <SectionQuestions/>

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
  &__base, &__work, &__demo, &__evolution {
    display: flex;
    flex-direction: column;
    gap: var(--layout-gap);
  }

  &__demo-title, &__demo-description {
    max-width: 543px;
  }
}
</style>
