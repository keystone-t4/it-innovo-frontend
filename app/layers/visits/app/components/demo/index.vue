<script setup lang="ts">
import { useDemoStore } from "~/layers/visits/app/stores/demo/demoStore";
import { demoRouting } from "~/layers/visits/app/config/demo/demoRoutes";
import FallbackPage from "~/layers/visits/app/components/demo/fallbackPage.vue";
import { useDemoDbStore } from "~/layers/visits/app/stores/demo/demoDbStore";

const demoStore = useDemoStore();
const demoDbStore = useDemoDbStore();

const modules = import.meta.glob<Component>(
    "~/layers/visits/app/components/demo/**/*.vue"
);

const viewComponent = computed(() => {
  const role = demoStore.currentRole;
  const view = demoStore.currentView;

  const isRouteAllowed = demoRouting[role].routes.some(
      r => r.key === view
  );

  const safeView = isRouteAllowed
      ? view
      : demoRouting[role].routes[0]?.key;

  const path =
      `/layers/visits/app/components/demo/${role}/${safeView}.vue`;

  const loader = modules[path];

  if (!loader) return FallbackPage;

  return defineAsyncComponent(loader);
});

const viewKey = computed(
    () => `${demoStore.currentRole}:${demoStore.currentView}`
);

onMounted(async () => {
    await demoDbStore.initDb();
    await demoDbStore.loadAll();
})
</script>

<template>
  <div class="demo">
    <DemoRolesNav />
    <div class="demo__content">
      <DemoRoutesNav />
      <ClientOnly>
        <Suspense>
          <component :is="viewComponent" :key="viewKey" />
          <template #fallback>
            <DemoLoader />
          </template>
        </Suspense>
      </ClientOnly>
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
