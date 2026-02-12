<script setup lang="ts">
import { useDemoStore } from "~/layers/visits/app/stores/demo/demoStore";
import {demoRouting} from "~/layers/visits/app/config/demo/demoRoutes";

const demoStore = useDemoStore()

const switchPath = computed({
  get: () => demoStore.currentView,
  set: (newRoute) => demoStore.setCurrentRoute(newRoute),
});
</script>

<template>
  <div class="demo__tabs tabs" role="radiogroup" aria-label="routes in demo">
    <label
        v-for="route in demoRouting[demoStore.currentRole].routes"
        :key="route.key"
        class="tabs__item"
    >
      <input
          class="tabs__radio"
          type="radio"
          name="demo-route"
          :value="route.key"
          v-model="switchPath"
      />
      <span class="tabs__label"
            :class="{ 'tabs__label--active': route.key === demoStore.currentView }"
      >
        {{ route.titleRu }}
      </span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  width: 100%;
  display: flex;

  &__radio {
    // screen readers
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
  }

  &__label {
    padding: 0.5rem;
    font-size: 0.875rem;
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
