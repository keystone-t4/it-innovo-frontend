<script setup lang="ts">
import { useDemoStore } from "~/layers/visits/app/features/demo/stores/demoStore";
import { demoRouting } from "~/layers/visits/app/features/demo/config/demoRoutes";
import FallbackPage from "~/layers/visits/app/features/demo/components/fallbackPage.vue";
import { useDemoDbStore } from "~/layers/visits/app/features/demo/stores/demoDbStore";
import RolesNav from "~/layers/visits/app/features/demo/components/rolesNav.vue"
import RoutesNav from "~/layers/visits/app/features/demo/components/routesNav.vue"
import Loader from "~/layers/visits/app/features/demo/components/loader.vue"

const demoStore = useDemoStore();
const demoDbStore = useDemoDbStore();
// Включаем все компоненты demo через import.meta.glob
const modules = import.meta.glob<Component>(
    '/layers/visits/app/features/demo/components/**/*.vue'
);

// Выбираем динамический компонент для текущего роута demo
const viewComponent = computed(() => {
  const role = demoStore.currentRole;
  const view = demoStore.currentView;

  const isRouteAllowed = demoRouting[role]?.routes?.some(
      r => r.key === view
  );

  const safeView = isRouteAllowed
      ? view
      : demoRouting[role]?.routes?.[0]?.key;

  // Формируем путь относительно import.meta.glob
  const path = `/layers/visits/app/features/demo/components/${role}/${safeView}.vue`;

  const loader = modules[path];

  if (!loader) return FallbackPage;

  return defineAsyncComponent(loader);
});

// Ключ для обновления компонента при смене роли или view
const viewKey = computed(() => `${demoStore.currentRole}:${demoStore.currentView}`);

// Инициализация demoDbStore при монтировании
onMounted(async () => {
  await demoDbStore.initDb();
  await demoDbStore.loadAll();
});
</script>

<template>
  <div class="demo">
    <RolesNav/>
    <div class="demo__content">
      <RoutesNav/>
      <div class="demo__body">
        <ClientOnly>
          <Suspense>
            <component :is="viewComponent" :key="viewKey" />
            <template #fallback>
              <Loader />
            </template>
          </Suspense>
        </ClientOnly>
      </div>
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
    overflow-y: auto;
    background-color: var(--bg-color);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    @media (max-width: 1024px) {
      padding: var(--layout-indent);
    }
  }

  &__body {
    max-height: 765px;
    overflow-y: auto;
  }
}
</style>
