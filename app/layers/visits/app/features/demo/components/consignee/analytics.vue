<script setup lang="ts">
import AnalyticsChart from "~/layers/visits/app/features/demo/components/consignee/analytics/chart.vue";
import AnalyticsTable from "~/layers/visits/app/features/demo/components/consignee/analytics/table.vue";

const currentAnalytics = ref('chart')
</script>

<template>
  <div class="analytics">
    <h3 class="analytics__title">Сбор статистических данных и показателей</h3>
    <nav class="analytics__nav nav">
      <button class="nav__button button"
              :class="currentAnalytics === 'chart' ? 'nav__button--active' : ''"
              @click="currentAnalytics = 'chart'"
      >
        Количество принятых машин
      </button>
      <button class="nav__button button"
              :class="currentAnalytics === 'table' ? 'nav__button--active' : ''"
              @click="currentAnalytics = 'table'"
      >
        Отклонение от графика приёма ТС
      </button>
    </nav>
  </div>
  <hr class="analytics__line line"/>

  <div class="analytics__body">
    <AnalyticsChart v-if="currentAnalytics === 'chart'"/>
    <AnalyticsTable v-else/>

  </div>
</template>

<style scoped lang="scss">
.analytics {

  &__line {
    margin-bottom: 1rem;
  }
}

.nav {
  margin: 1rem 0;

  &__button {
    text-transform: none;
    background-color: rgba(0,0,0,0);
    padding: 0.5rem;
    color: var(--link-color);
    transition: color 200ms ease, transform 200ms ease, background-color 200ms ease;
    &:hover {
      color: var(--link-color-hover);
    }

    &--active {
      background-color: white;
      border-radius: 3px;
    }
  }
}


</style>