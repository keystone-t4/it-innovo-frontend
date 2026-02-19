<script setup lang="ts">
import SubmitForm from "~/layers/visits/app/features/demo/components/submitForm.vue";
import {useDemoDbStore} from "~/layers/visits/app/features/demo/stores/demoDbStore.js";
import {useDemoStore} from "~/layers/visits/app/features/demo/stores/demoStore.js";

const demoDbStore = useDemoDbStore();
const demoStore = useDemoStore();

const isCurrentDriverHaveActiveRequest = computed(() =>
    demoDbStore.isCurrentDriverHaveActiveRequestById(
        demoStore.currentDriverId
    )
);

const success = computed(() => demoStore.formSubmitSuccess)

onMounted(() => {
  demoStore.formSubmitSuccess = false;
})
</script>

<template>
  <SubmitForm v-if="!isCurrentDriverHaveActiveRequest"/>

  <p v-else-if="success" class="info-card">
    Заявка успешно создана.
  </p>

  <p v-else class="info-card">
    У вас есть активная заявка. Бронирование станет доступно после ее выполнения или отмены.
  </p>
</template>