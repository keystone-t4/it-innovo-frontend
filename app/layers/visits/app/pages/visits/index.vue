<script setup lang="ts">
import Demo from '~/layers/visits/app/components/demo/index.vue'
import {useDemoDbStore} from "~/layers/visits/app/stores/demo/demoDbStore";

const demoDbStore = useDemoDbStore()

onMounted(async () => {
  await demoDbStore.initDb()
  await demoDbStore.loadAll()
})
</script>

<template>
  <main class="home">
    <div class="home__hero block">
        <div class="home__hero-text">
          <h1 class="home__hero-title">
            Система «Визиты»
          </h1>
          <h3 class="home__hero-subtitle">
            Полный контроль логистики на вашей территории
          </h3>
          <p class="home__hero-description">
            Ликвидируйте простои транспорта, автоматизируйте въезд и учет грузов. Получите управляемый
            и предсказуемый грузопоток от въезда на территорию до формирования акта.
          </p>
        </div>
    </div>

    <div class="home__demo block">
      <Demo/>
    </div>
  </main>
</template>

<style scoped lang="scss">
.home {
  padding: 2rem 0;
  width: 100%;
  background-color: white;
  flex: 1 0 auto;
  &__hero {
    margin: 0 auto;
    display: flex;
    align-items: start;
    justify-content: start;
  }
  &__hero-text {
    max-width: 1024px;
    padding-left: 30px;
    border-left: 1.5px solid var(--text-dark);
    @media (max-width: 480px) {
      padding-left: 18px;
    }
  }

  &__demo {
    margin: 0 auto;
    padding-top: 4rem;
  }
}
</style>
