<script setup lang="ts">
import { useDemoStore } from "~/layers/visits/app/features/demo/stores/demoStore";
import { demoRouting } from "~/layers/visits/app/features/demo/config/demoRoutes";

const demoStore = useDemoStore();

const switchPath = computed({
  get: () => demoStore.currentView,
  set: (newRoute) => demoStore.setCurrentRoute(newRoute),
});
</script>

<template>
  <div class="demo__tabs">

    <div class="tabs" role="radiogroup" aria-label="routes in demo">
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
        <span
            class="tabs__label"
            :class="{ 'tabs__label--active': route.key === demoStore.currentView }"
        >
          {{ route.titleRu }}
        </span>
      </label>
    </div>


    <div class="tabs-mobile">
      <HeadlessListbox v-model="switchPath" v-slot="{ open }">
        <div class="tabs-mobile__wrapper">
          <HeadlessListboxButton class="tabs-mobile__trigger">
            <span class="tabs-mobile__trigger-text">{{ demoStore.getCurrentRouteTitle }}</span>
            <svg class="tabs-mobile__icon"
                 :class="{ 'tabs-mobile__icon--open': open }"
                 aria-hidden="true"
            >
              <use href="/sprite.svg#down-chevron" />
            </svg>
          </HeadlessListboxButton>

          <transition
              leave-active-class="tabs-mobile__transition-leave-active"
              leave-from-class="tabs-mobile__transition-leave-from"
              leave-to-class="tabs-mobile__transition-leave-to"
          >
            <HeadlessListboxOptions class="tabs-mobile__dropdown">
              <HeadlessListboxOption
                  v-slot="{ active, selected }"
                  v-for="route in demoRouting[demoStore.currentRole].routes"
                  :key="route.key"
                  :value="route.key"
                  as="template"
              >
                <li
                    class="tabs-mobile__option"
                    :class="{
                    'tabs-mobile__option--active': active,
                    'tabs-mobile__option--selected': selected,
                  }"
                >
                  <span
                      class="tabs-mobile__option-text"
                      :class="{ 'tabs-mobile__option-text--selected': selected }"
                  >
                    {{ route.titleRu }}
                  </span>
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>
    </div>

  </div>
</template>

<style scoped lang="scss">
.tabs {
  width: 100%;
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }

  &__item {
    position: relative;
    &:has(:focus-visible) {
      outline: 2px solid var(--outline-color);
      outline-offset: 2px;
    }
  }

  // screen readers
  &__radio {
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


.tabs-mobile {
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
  }

  &__wrapper {
    position: relative;
    margin-top: 0.25rem;
  }

  .tabs-mobile__icon {
    width: 24px;
    height: 24px;
    rotate: -90deg;
    transition: transform 0.2s;
  }
  .tabs-mobile__icon--open {
    transform: rotate(180deg);
  }

  &__trigger {
    position: relative;
    width: 100%;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: #cfc9c942;
    padding: 0.5rem 0.75rem;
    text-align: left;
    outline: none;
    color: var(--accent-color);
    line-height: 1.25rem;
    border: 1px solid var(--accent-color);
    display: flex;
    justify-content: space-between;
    &:hover {
      background-color: white;
    }
    &:focus-visible {
      border-color: var(--outline-color);
      box-shadow: 0 0 0 2px var(--outline-shadow);
    }
  }

  &__trigger-text {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__dropdown {
    position: absolute;
    margin-top: -0.05rem;
    max-height: 15rem;
    width: 100%;
    overflow: auto;
    border-radius: 0 0 0.375rem 0.375rem;
    background-color: #fff;
    padding: 0.25rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--accent-color);
    z-index: 10;
  }

  &__option {
    position: relative;
    cursor: default;
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    color: #111827;
    transition: background-color 0.1s ease;

      &--active {
        background-color: var(--bg-color-active);
        color: var(--accent-color);
        cursor: pointer;
      }
  }

  &__option-text {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &--selected {
      font-weight: 500;
    }
  }

  &__transition-leave-active {
    transition: opacity 0.1s ease-in;
  }

  &__transition-leave-from {
    opacity: 1;
  }

  &__transition-leave-to {
    opacity: 0;
  }
}
</style>