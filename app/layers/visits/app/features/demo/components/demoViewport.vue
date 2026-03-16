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
    <p class="demo__comment">
      *Это демонстрационная версия системы с ограниченным функционалом
      и примерными данными. Полноценная конфигурация «Визитов»
      настраивается под конкретные процессы предприятия и может
      включать дополнительные модули и интеграции.
    </p>
    <a class="demo__button"
       href="https://t.me/innovo_visiting_bot"
       target="_blank"
       rel="noopener noreferrer"
    >
      Узнать больше
    </a>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  background-color: white;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  @media (max-width: 576px) {
    padding: 1.5rem 1rem;
    gap: 1rem;
  }

  &__content {
    width: 100%;
    min-height: var(--visits-demo-layout-height);
    overflow-y: auto;
    background-color: var(--visits-bg-color);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    @media (max-width: 1024px) {
      padding: var(--layout-indent, 1.5rem);;
    }
  }

  &__body {
    height: var(--visits-demo-layout-body-height);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }




  &__button {
    min-width: fit-content;
    text-decoration: none;
    border-radius: 0.625rem;
    border: none;
    color: var(--text-light);
    background-color: var(--color-accent);
    padding: 0.625rem 2rem;
    font-weight: 600;
    font-size: var(--text-md);
    @media (max-width: 1024px) {
      width: 160px;
      font-size: var(--text-s);
      padding: 0.5rem 1.7rem;
    }
    @media (max-width: 768px) {
      font-size: var(--text-xs);
    }
    @media (max-width: 576px) {
      font-size: var(--text-xxs);
    }
    @media (max-width: 480px) {
      font-size: var(--text-3xs);
      padding: 0.5rem 1rem
    }
    &:hover {
      background-color: var(--color-accent-hover);
    }

    &--transparent {
      background-color: var(--color-gray);
      color: var(--color-dark-gray);
      &:hover {
        background-color: var(--color-gray-hover);
      }
    }
  }
}
</style>
