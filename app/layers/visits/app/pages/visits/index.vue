<script setup>
import DemoViewport from '~/layers/visits/app/features/demo/components/demoViewport.vue'

const heroTitle = 'Система «Визиты» — управляемая логистика вместо хаоса'
const heroDescription = 'Базовый модуль — Электронная очередь — даёт прозрачную картину загрузки на сутки вперёд и создаёт основу для эффективного планирования смен и ресурсов.'
</script>

<!--todo: конвертнуть видосы в webp-->

<template>
  <main class="main">
    <AppSectionHero :title="heroTitle" :description="heroDescription" src="/video/visits.mp4">
      <div class="hero__buttons">
        <button class="hero__button button">
          Рассчитать вашу экономическую выгоду
        </button>
        <a class="hero__button button button--transparent"
           href="https://t.me/innovo_visiting_bot"
           target="_blank"
           rel="noopener noreferrer"
        >
           Получить консультацию
        </a>
      </div>
    </AppSectionHero>

    <section class="main__demo grey-section">
      <div class="inner block">
        <DemoViewport/>
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
  &__demo {
    margin: 0 auto;
    padding-top: 4rem;
  }
}
</style>
