<script setup lang="ts">
import {driverApplicationsHeaders} from "~/layers/visits/app/config/demo/tables/driverApplicationsHeaders";
import type {driverApplicationRowType} from "~/layers/visits/app/types/demo/tables/driverApplicationsTypes";
import {
  getArrivalPlaceName,
  getCurrentDriverRequests,
  getDriverFullName
} from "~/layers/visits/app/composables/demo/driver/applicationsActions";
import {formatDate} from "~/layers/visits/app/utils/demo/formatDate";
import {requestStatuses} from "~/layers/visits/app/config/demo/demoRequestStatuses";
import {useDemoDbStore} from "~/layers/visits/app/stores/demo/demoDbStore";

const demoDbStore = useDemoDbStore()

const tableRows = computed<driverApplicationRowType[]>(() => {
  return [...getCurrentDriverRequests.value]
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .map(req => ({
        req_id: req.id,
        full_name: getDriverFullName.value,
        arrival_place_name: getArrivalPlaceName(req.arrival_place_id),
        created_at: formatDate(req.created_at, true),
        ttn_number: req.ttn_number,
        unload_date: formatDate(req.unload_date, false),
        unload_start_time: req.unload_start_time,
        status: requestStatuses[req.status],
        interact: ""
      }));
});
</script>

<template>
  <div class="driver">
    <table class="driver__table table">
      <thead class="table__head">
        <tr>
          <th class="table__cell" v-for="field in driverApplicationsHeaders">
            <p class="table__text table__header">
              {{ field.title }}
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
      <tr class="table__row" v-for="row in tableRows" :key="row.ttn_number">
        <td class="table__cell" v-for="field in driverApplicationsHeaders" :data-label="field.title">

          <button v-if="field.key === 'interact' && row.status === 'План'"
                  class="table__button button"
                  @click="demoDbStore.cancelRequest(row.req_id)"
          >
            Отменить
          </button>
          <p v-else class="table__text">{{ row[field.key] }}</p>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="driver__mobile-table mobile-table">
      <div
          class="mobile-table__row"
          v-for="row in tableRows"
          :key="row.ttn_number"
      >
        <div
            class="mobile-table__cell"
            v-for="field in driverApplicationsHeaders"
            :key="field.key"
        >
          <template v-if="field.key === 'interact'">
            <button v-if="field.key === 'interact' && row.status === 'План'"
                    class="table__button button"
                    @click="demoDbStore.cancelRequest(row.req_id)"
            >
              Отменить
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
</template>
