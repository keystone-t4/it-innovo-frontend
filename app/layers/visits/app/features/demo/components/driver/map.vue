<script setup lang="ts">
import {useDemoDbStore} from "~/layers/visits/app/features/demo/stores/demoDbStore";
import {useDemoStore} from "~/layers/visits/app/features/demo/stores/demoStore";
import DriverMapMarker from "~/layers/visits/app/features/demo/components/driver/map/marker.vue"

const demoDbStore = useDemoDbStore()
const demoStore = useDemoStore()

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

const currentMapRouteLink = computed(() => {
  const item = demoDbStore.arrivalPlaces.find(
      item => item.id === demoStore.currentArrivalPlaceId
  );

  return item?.link;
})


</script>
<!--  странное вынесение кнопки из блока map сделано из-за капризного chrome,-->
<!--  он начинал ломать позиционирование маркеров из за появления в их родителе -->
<!--  нового absolute элемента, несмотря на отличные z-index-->
<template>

  <div class="map-container">

    <div class="map">
      <img
          src="../../../../assets/img/map.png"
          alt="карта локаций"
          class="map__img"
      />

      <DriverMapMarker
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

    <div class="go-to-yndx-btn">
      <a class="go-to-yndx-btn__link" :href="currentMapRouteLink" target="_blank">
        Построить маршрут
        <svg class="go-to-yndx-btn__icon">
          <use href="/sprite.svg#map-marker"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.map-container {
  position: relative;
  width: 100%;
  height: 100%;
}

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

.go-to-yndx-btn {
  position: absolute;
  bottom: 25px;
  right: 25px;
  cursor: pointer;

  &__link {
    background-color: white;
    border-radius: 5px;
    padding: 0.5rem 0.75rem;;
    text-decoration: none;
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    gap: 0.3rem;
    @media (max-width: 892px) {
      padding: 0.25rem 0.5rem;
      font-size: 14px;
    }
    @media (max-width: 636px) {
      font-size: 12px;
    }
    &:hover {
      background-color: rgba(245,245,245,1);
    }
  }
  &__icon {
    width: 12px;
    height: 24px;
    color: var(--accent-color);
    @media (max-width: 636px) {
      width: 9px;
      height: 18px;
    }
  }

  @media (max-width: 892px) {
    bottom: 15px;
    right: 15px;
  }
  @media (max-width: 480px) {
    bottom: 5px;
    right: 5px;
  }
}
</style>
