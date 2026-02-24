<script setup lang="ts">
import type {
  consigneeAnalyticsTypes,
  consigneeQueueTypes
} from "~/layers/visits/app/features/demo/types/demoTablesTypes";
import {consigneeAnalyticsHeaders} from "~/layers/visits/app/features/demo/config/demoTablesHeaders";
import {useDemoDbStore} from "~/layers/visits/app/features/demo/stores/demoDbStore";
import {combineDateAndTime, dateTimeFormat, timeDifference} from "~/layers/visits/app/features/demo/utils/date&time";
import {sortByDateTime} from "~/layers/visits/app/features/demo/utils/sort";
import {computed} from "vue";

const demoDbStore = useDemoDbStore()

const acceptedRequests = computed(() => {
  return demoDbStore.requests.filter((request) => request.status === 'accepted')
})

const tableRows = computed<consigneeAnalyticsTypes[]>(() => {
  return sortByDateTime(
      acceptedRequests.value,
      "unload_date",
      "unload_start_time"
  ).map(req => ({
        request_id: req.id,
        transport_company_name: 'OOO "' + demoDbStore.getTransportCompanyNameById(demoDbStore.getCurrentDriverById(req.driver_id)?.company_id) + '"',
        full_name: demoDbStore.getCurrentDriverById(req.driver_id)?.full_name ?? '-',
        product_name: req.product_name,
        unload_datetime: dateTimeFormat(combineDateAndTime(req.unload_date, req.unload_start_time)),
        real_unload_datetime: dateTimeFormat(req.real_unload_datetime),
        plan_deviation: timeDifference(`${req.unload_date}T${req.unload_start_time}:00`, req.real_unload_datetime),
      }));
});
</script>

<template>
  <div class="drivers">
    <table class="drivers__table table">
      <thead class="table__head">
      <tr>
        <th class="table__cell" v-for="field in consigneeAnalyticsHeaders">
          <p class="table__text table__header">
            {{ field.title }}
          </p>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="table__row" v-for="row in tableRows" :key="row.request_id">
        <td class="table__cell" v-for="field in consigneeAnalyticsHeaders" :data-label="field.key">
          <p class="table__text">
            {{ row[field.key] }}
          </p>
        </td>
      </tr>
      </tbody>
    </table>

    <div class="drivers__mobile-table mobile-table">
      <div
          class="mobile-table__row"
          v-for="row in tableRows"
          :key="row.request_id"
      >
        <div
            class="mobile-table__cell"
            v-for="field in consigneeAnalyticsHeaders"
            :key="field.key"
        >
          <p class="mobile-table__header">
            {{ field.title + ':'}}
          </p>

          <p class="mobile-table__text">
            {{ row[field.key] }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.table__header, .table__text, .mobile-table__header, .mobile-table__text {
  white-space: pre-line;
}
.table__text--bold {
  font-weight: 700;
}
</style>