<script setup lang="ts">
import {driverApplicationsHeaders} from "~/layers/visits/app/config/tables/driverApplicationsHeaders";
import {useDemoDbStore} from "~/layers/visits/app/stores/demoDbStore";
const demoDbStore = useDemoDbStore()



watch(
    () => demoDbStore.drivers,
    (v) => console.log("drivers loaded:", v),
    { deep: true }
);
</script>

<template>
  <div class="driver">
    <table class="driver__table">
      ЗАЯВКИ
    </table>
  </div>
</template>
