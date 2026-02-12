<script setup lang="ts">
import { useDemoStore } from "~/layers/visits/app/stores/demo/demoStore";
import { demoRouting } from "~/layers/visits/app/config/demo/demoRoutes";

const demoStore = useDemoStore();

const FallbackComponent = { template: `<div>Страница не найдена</div>`};
const modules = import.meta.glob<Component>('~/layers/visits/app/components/demo/**/*.vue');

// функция отвечающая за отрисовку в демке маршрутов для ролей
const viewComponent = computed(() => {
  const role = demoStore.currentRole;
  const view = demoStore.currentView;

  const isRouteAllowed = demoRouting[role].routes.some(r => r.key === view);
  const safeView = isRouteAllowed ? view : demoRouting[role].routes[0]?.key;

  const path = `/layers/visits/app/components/demo/${role}/${safeView}.vue`;

  const loader = modules[path];

  if (!loader) {
    return FallbackComponent;
  }

  return defineAsyncComponent(loader);
});

const viewKey = computed(
    () => `${demoStore.currentRole}:${demoStore.currentView}`
);
</script>

<template>
  <div class="demo">
    <DemoRolesNav />
    <div class="demo__content">
      <DemoRoutesNav />
      <component :is="viewComponent" :key="viewKey" />
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