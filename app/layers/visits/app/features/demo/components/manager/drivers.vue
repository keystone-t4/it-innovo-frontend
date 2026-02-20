<script setup lang="ts">
import type {managerDriversTypes} from "~/layers/visits/app/features/demo/types/demoTablesTypes";
import {managerDriversHeaders} from "~/layers/visits/app/features/demo/config/demoTablesHeaders";
import {useDemoDbStore} from "~/layers/visits/app/features/demo/stores/demoDbStore";
import {useDemoStore} from "~/layers/visits/app/features/demo/stores/demoStore";
import DriverApplications from "~/layers/visits/app/features/demo/components/driver/applications.vue";
import {formatPhoneForUI} from "~/layers/visits/app/features/demo/utils/phone";

const demoDbStore = useDemoDbStore()
const demoStore = useDemoStore()

const currentTransportCompanyDrivers = computed(() =>
    demoDbStore.getAllTransportCompanyDriversById(demoStore.currentTransportCompanyId)
);

const tableRows = computed<managerDriversTypes[]>(() => {
  return [...currentTransportCompanyDrivers.value]
      .map(req => ({
        driver_id: req.id,
        full_name: req.full_name,
        car_number: demoDbStore.getArrivalPlaceNameById(demoStore.currentArrivalPlaceId) ?? '-',
        phone: formatPhoneForUI(req.phone),
        interact: ""
      }));
});

const isDriverSubpage = ref(false)
const selectedDriverId = ref('drv_tc001_01')

const goBackToDriversTable = () => {
  isDriverSubpage.value = false
}

const goToDriverApplications = (driver_id: string) => {
  selectedDriverId.value = driver_id
  isDriverSubpage.value = true
}
</script>

<template>
  <button
      v-if="isDriverSubpage"
      class="nav-button button"
      @click="goBackToDriversTable"
  >
    <span>Вернуться к списку водителей</span>
  </button>

  <div v-if="!isDriverSubpage" class="drivers">
    <table class="drivers__table table">
      <thead class="table__head">
      <tr>
        <th class="table__cell" v-for="field in managerDriversHeaders">
          <p class="table__text table__header">
            {{ field.title }}
          </p>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="table__row" v-for="row in tableRows" :key="row.driver_id">
        <td class="table__cell" v-for="field in managerDriversHeaders" :data-label="field.title">

          <button
              v-if="field.key === 'interact'"
              class="table__button button"
              @click="goToDriverApplications(row.driver_id)"
          >
            <span>Заявки</span>
          </button>
          <p v-else class="table__text">{{ row[field.key] }}</p>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="drivers__mobile-table mobile-table">
      <div
          class="mobile-table__row"
          v-for="row in tableRows"
          :key="row.driver_id"
      >
        <div
            class="mobile-table__cell"
            v-for="field in managerDriversHeaders"
            :key="field.key"
        >
          <template v-if="field.key === 'interact'">
            <button
                v-if="field.key === 'interact'"
                class="table__button button"
                @click="goToDriverApplications(row.driver_id)"
            >
              <span>Заявки</span>
            </button>
          </template>
          <template v-else>
            <p class="mobile-table__header">
              {{ field.title + ':'}}
            </p>

            <p class="mobile-table__text">
              {{ row[field.key] }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>

  <DriverApplications v-else :driver_id="selectedDriverId"/>
</template>

<style scoped lang="scss">
.nav-button {
  width: fit-content;
}
</style>