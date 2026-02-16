<script setup lang="ts">
import { computed } from "vue";
import { useDemoStore } from "~/layers/visits/app/stores/demo/demoStore";

interface Props {
  id: string;
  name: string;
  address: string;
  x: number;
  y: number;
  isPercent?: boolean;
}

const props = defineProps<Props>();
const store = useDemoStore();

const isSelected = computed(() => store.selectedArrivalPlaceId === props.id);

function selectPlace() {
  store.selectedArrivalPlaceId = props.id;
}

const tooltipBottom = computed(() => {
  if (props.isPercent) {
    return props.y < 30;
  }

  // fallback для px — не трогаем
  return false;
});
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

    <div class="marker__tooltip" role="status" aria-live="polite">
      {{ props.name}}<br>
      {{ props.address }}
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
    @media (max-width: 892px) {
      top: 3px;
    }
    @media (max-width: 636px) {
      top: 6px;
    }
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
    z-index: 5; // выделенный маркер выше остальных

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
      /* тонкое кольцо вокруг центра (через stroke на круге) */
      fill: #fff;
      stroke: rgba(255, 179, 0, 0.95);
      stroke-width: 1.6px;
      transform: scale(1.15);
    }

    /* мягкое свечение/ореол вокруг маркера */
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

  /* фокус клавиатурный */
  &:focus {
    outline: none;
  }
  &:focus-visible {
    box-shadow: 0 0 0 4px var(--outline-color);
    border-radius: 8px;
  }

  &__tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(34, 34, 34, 0.95);
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.12s ease, transform 0.12s ease;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);
    @media (max-width: 636px) {
      bottom: calc(100% + 5px);
    }
    @media (max-width: 636px) {
      bottom: calc(100% + 3px);
    }
  }

  &.tooltip-bottom &__tooltip {
    bottom: auto;
    top: calc(100% - 10px);
  }

  &.tooltip-bottom &__tooltip::after {
    top: auto;
    bottom: 100%;
    border-color: transparent transparent rgba(34, 34, 34, 0.95) transparent;
  }

  &:hover &__tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(-4px);
  }

  &.is-selected &__tooltip {
    opacity: 1;
    transform: translateX(-50%) translateY(-4px);
  }

  &__tooltip::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: rgba(34, 34, 34, 0.95) transparent transparent transparent;
  }
}
</style>
