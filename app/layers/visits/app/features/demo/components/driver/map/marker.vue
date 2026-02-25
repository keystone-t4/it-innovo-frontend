<script setup lang="ts">
import { useDemoStore } from "~/layers/visits/app/features/demo/stores/demoStore";

const props = defineProps<{
  id: string;
  name: string;
  address: string;
  x: number;
  y: number;
  isPercent?: boolean;
}>();
const demoStore = useDemoStore();

const isSelected = computed(() => demoStore.currentArrivalPlaceId === props.id);

function selectPlace() {
  demoStore.currentArrivalPlaceId = props.id;
}

const tooltipBottom = computed(() => {
  if (props.isPercent) {
    return props.y < 50;
  }
  return false;
});

function goToSubmitForm() {
  demoStore.driverViewRoute = 'submit'
}
</script>

<template>
  <div
      class="marker"
      :class="{
      'is-selected': isSelected,
      'tooltip-bottom': tooltipBottom
    }"
      @click="selectPlace"
      @keydown.enter.prevent="selectPlace"
      role="button"
      :aria-pressed="isSelected"
      tabindex="0"
      :style="props.isPercent
      ? { left: props.x + '%', top: props.y + '%' }
      : { left: props.x + 'px', top: props.y + 'px' }"
  >
  <div class="marker__icon" aria-hidden="true">
    <svg viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg" width="28" height="42" role="img">
      <path class="drop" d="M12 2C7 2 3 6 3 11c0 6.08 9 19 9 19s9-12.92 9-19c0-5-4-9-9-9z" />
      <circle class="inner" cx="12" cy="11" r="4" />
    </svg>
  </div>

  <div
      class="marker__tooltip"
      role="status"
      aria-live="polite"
  >
    <div class="marker__tooltip-inner">
      <div class="marker__title">{{ props.name }}</div>
      <div class="marker__address">{{ props.address }}</div>

      <div class="marker__actions">
        <button
            class="marker__button button"
            @click.stop="goToSubmitForm"
            @keydown.stop.enter.prevent="goToSubmitForm"
            type="button"
        >
          Перейти к форме
        </button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped lang="scss">
.marker {
  position: absolute;
  transform: translate(-50%, -100%);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;

  &__icon {
    width: 28px;
    height: 42px;
    display: inline-block;
    line-height: 0;
    transition: transform 0.18s cubic-bezier(.2,.9,.2,1), filter 0.18s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25));
    position: relative;
  }

  svg { display: block; }

  .drop {
    fill: #e53935;
    stroke: #b71c1c;
    stroke-width: 0;
    transition: fill 0.18s ease, stroke 0.18s ease, filter 0.18s ease;
  }

  .inner {
    fill: #fff;
    transition: transform 0.18s ease, stroke-width 0.18s ease;
    transform-origin: center;
  }

  &:hover .marker__icon {
    transform: translateY(-4px) scale(1.06);
  }

  &:active .marker__icon {
    transform: translateY(-2px) scale(0.98);
  }

  &.is-selected {
    z-index: 5;

    .marker__icon {
      transform: translateY(-6px) scale(1.12);
      filter: drop-shadow(0 10px 20px rgba(255, 179, 0, 0.28));
    }

    .drop {
      fill: #ffb300;
      stroke: #BF9430;
      stroke-width: 0;
    }

    .inner {
      fill: #fff;
      stroke: rgba(255, 179, 0, 0.95);
      stroke-width: 1.6px;
      transform: scale(1.15);
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 50%;
      top: 65%;
      transform: translate(-50%, -40%);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      pointer-events: none;
      box-shadow: 0 0 22px 6px rgba(30, 136, 229, 0.12), 0 6px 18px rgba(255, 179, 0, 0.08);
      transition: opacity 0.18s ease;
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    box-shadow: 0 0 0 4px var(--outline-color);
    border-radius: 8px;
  }

  &__tooltip {
    position: absolute;
    width: 200px;
    max-height: 150px;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    background: white;
    color: var(--text-dark);
    padding: 0.5rem;
    border-radius: 6px;
    font-size: 12px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.12s ease, transform 0.12s ease;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
    z-index: 4;

    .marker__tooltip-inner {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  &.tooltip-bottom &__tooltip {
    bottom: auto;
    top: calc(100% - 10px);
  }

  &.tooltip-bottom &__tooltip::after {
    top: auto;
    bottom: 100%;
    border-color: transparent transparent white transparent;
  }

  &__tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }

  &:hover .marker__tooltip,
  &.is-selected .marker__tooltip {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(-4px);
  }

  .marker__title,
  .marker__address {
    color: var(--text-dark);
    font-size: 13px;
    line-height: 1.2;
  }

  .singleline {
    white-space: normal;
    overflow-wrap: break-word;
    overflow: visible;
  }

  .clamp-2,
  .clamp-3,
  .clamp-4 {
    display: block;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
    overflow: visible;
    white-space: normal;
    overflow-wrap: break-word;
  }

  .marker__actions {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: flex-start;
  }

  .marker__button {
    text-transform: none;
    margin-left: auto;
  }
}

@media (max-width: 636px) {
  .marker {
    &__tooltip {
      font-size: 11px;
      bottom: calc(100% + 6px);
      padding: calc(0.5rem / 1.2);
    }
  }
}
</style>