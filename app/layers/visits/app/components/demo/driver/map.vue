<script setup lang="ts">
import {useDemoDbStore} from "~/layers/visits/app/stores/demo/demoDbStore";

const demoDbStore = useDemoDbStore()

// размеры изображения карты в пикселях
const originalWidth = 1200
const originalHeight = 692

const placesPercent = computed(() =>
    demoDbStore.arrivalPlaces.map(p => ({
      ...p,
      xPercent: (p.map_x / originalWidth) * 100,
      yPercent: (p.map_y / originalHeight) * 100,
    }))
)
</script>

<template>
  <div class="map">
    <img
        src="../../../assets/img/map.png"
        alt="карта локаций"
        class="map__img"
    />

    <DemoDriverMapMarker
        v-for="place in placesPercent"
        :key="place.id"
        :id="place.id"
        :address="place.address"
        :name="place.name"
        :x="place.xPercent"
        :y="place.yPercent"
        :isPercent="true"
    />
  </div>
</template>

<style scoped lang="scss">
.map {
  position: relative;
  overflow: visible;
  @media (max-width: 892px) {
    margin-top: 1rem;
  }
  @media (max-width: 636px) {
    margin-top: 2rem;
  }

  &__img {
    border-radius: 5px;
    display: block;
    width: 100%;
  }
}
</style>
