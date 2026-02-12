<script setup lang="ts">
import {driverApplicationsHeaders} from "~/layers/visits/app/config/demo/tables/driverApplicationsHeaders";
import type {driverApplicationRowType} from "~/layers/visits/app/types/demo/tables/driverApplicationsTypes";
import {
  getArrivalPlaceName,
  getCurrentDriverRequests,
  getDriverFullName
} from "~/layers/visits/app/composables/demo/driver/applicationsActions";
import {formatDate} from "~/layers/visits/app/utils/demo/formatDate";

const tableRows = computed<driverApplicationRowType[]>(() => {
  return [...getCurrentDriverRequests.value] // клонируем, чтобы не мутировать оригинал
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .map(req => ({
        full_name: getDriverFullName.value,
        arrival_place_name: getArrivalPlaceName(req.arrival_place_id),
        created_at: formatDate(req.created_at, true),
        ttn_number: req.ttn_number,
        unload_date: formatDate(req.unload_date, false),
        unload_start_time: req.unload_start_time,
        status: req.status,
      }));
});
</script>

<template>
  <div class="driver">
    <table class="driver__table">
      <thead>
        <tr>
          <th v-for="field in driverApplicationsHeaders">
            {{ field.title }}
          </th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="row in tableRows" :key="row.ttn_number">
        <td v-for="field in driverApplicationsHeaders">
          {{ row[field.key] }}
        </td>
      </tr>

      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">

</style>