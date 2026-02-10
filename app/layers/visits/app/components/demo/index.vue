<script setup lang="ts">
import { useDemoStore } from "~/layers/visits/app/stores/demoStore";

const demoStore = useDemoStore();

const roleComponent = computed(() => {
  switch (demoStore.currentRole) {
    case "driver":
      return resolveComponent("DemoDriver");
    case "consignee":
      return resolveComponent("DemoConsignee");
    case "manager":
      return resolveComponent("DemoManager");
  }
});
</script>

<template>
  <div class="demo">
    <DemoRolesNav />
    <div class="demo__content">
      <DemoRoutesNav/>
      <component :is="roleComponent" :key="demoStore.currentRole" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__content {
    width: 100%;
    min-height: 600px;
    background-color: var(--bg-color);
    border-radius: 5px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>