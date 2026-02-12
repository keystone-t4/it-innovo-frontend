<script setup lang="ts">

import {useDemoStore} from "~/layers/visits/app/stores/demo/demoStore";

interface Props {
  id: string
  name: string
  x: number
  y: number
  isPercent?: boolean
}

const props = defineProps<Props>()
const store = useDemoStore()
function selectPlace() {
  store.selectedArrivalPlaceId = props.id
}
</script>

<template>
  <div
      class="marker"
      @click="selectPlace"
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

    <div class="marker__tooltip" role="status" aria-live="polite">{{ props.name }}</div>
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

  &__icon {
    width: 28px;
    height: 42px;
    display: inline-block;
    line-height: 0;
    transition: transform 0.15s ease, filter 0.15s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25));
  }

  svg { display: block; }

  .drop {
    fill: #e53935; // ярко-красный
    stroke: #b71c1c;
    stroke-width: 0;
  }

  .inner {
    fill: #fff;
    transition: transform 0.15s ease;
  }

  &:hover .marker__icon {
    transform: translateY(-4px) scale(1.06);
  }

  &:active .marker__icon {
    transform: translateY(-2px) scale(0.98);
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
  }

  &:hover &__tooltip {
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
