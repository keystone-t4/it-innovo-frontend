<script setup lang="ts">
import type {consigneeQueueTypes} from "~/layers/visits/app/features/demo/types/demoTablesTypes";
import {consigneeHeaders} from "~/layers/visits/app/features/demo/config/demoTablesHeaders";
import {useDemoDbStore} from "~/layers/visits/app/features/demo/stores/demoDbStore";
import {formatDate} from "~/layers/visits/app/features/demo/utils/formatDate";
import {requestStatuses} from "~/layers/visits/app/features/demo/config/demoRequestStatuses";

const demoDbStore = useDemoDbStore()

const tableRows = computed<consigneeQueueTypes[]>(() => {
  return [...demoDbStore.requests]
      .sort((a, b) => {
        const dateA = new Date(`${a.unload_date}T${a.unload_start_time}`).getTime()
        const dateB = new Date(`${b.unload_date}T${b.unload_start_time}`).getTime()
        return dateA - dateB
      })
      .map(req => ({
        request_id: req.id,
        unload_date: formatDate(req.unload_date, false) + ' ' +  req.unload_start_time,
        transports_number: demoDbStore.getCurrentDriverById(req.driver_id)?.truck_number + '\n' + demoDbStore.getCurrentDriverById(req.driver_id)?.trailer_number,
        transport_company_name: 'OOO "' + demoDbStore.getTransportCompanyNameById(demoDbStore.getCurrentDriverById(req.driver_id)?.company_id) + '"',
        status: requestStatuses[req.status],
      }));
});
</script>

<template>
  <div class="drivers">
    <table class="drivers__table table">
      <thead class="table__head">
      <tr>
        <th class="table__cell" v-for="field in consigneeHeaders">
          <p class="table__text table__header">
            {{ field.title }}
          </p>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="table__row" v-for="row in tableRows" :key="row.request_id">
        <td class="table__cell" v-for="field in consigneeHeaders" :data-label="field.key">
          <p class="table__text"
             :class="field.key === 'unload_date' ? 'table__text--bold' : ''"
          >
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
            v-for="field in consigneeHeaders"
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