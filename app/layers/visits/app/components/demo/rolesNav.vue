<script setup lang="ts">
import { useDemoStore } from "~/layers/visits/app/stores/demo/demoStore";
import type { demoRoleType } from "~/layers/visits/app/types/demo/demoTypes";

type roleCard = {
  title: string;
  description: string;
  iconPath: string;
  role: demoRoleType;
};

const demoStore = useDemoStore();

const roleCards: Record<demoRoleType, roleCard> = {
  driver: {
    title: "Водитель грузового ТС",
    description: "Бронирование слотов и въезд на территорию",
    iconPath: "/sprite.svg#driver",
    role: "driver",
  },
  consignee: {
    title: "Грузополучатель",
    description: "Контроль очереди и операций",
    iconPath: "/sprite.svg#consignee",
    role: "consignee",
  },
  manager: {
    title: "Менеджер транспортной компании",
    description: "Планирование отгрузок и мониторинг",
    iconPath: "/sprite.svg#manager",
    role: "manager",
  },
};

const currentRole = computed<demoRoleType>({
  get: () => demoStore.currentRole,
  set: (role) => demoStore.setRole(role),
});
</script>

<template>
  <div class="demo__roles-nav" role="radiogroup" aria-label="roles in demo">
    <label
        v-for="card in roleCards"
        :key="card.role"
        class="demo__role-card role-card"
        :class="{ 'role-card--active': currentRole === card.role }"
    >
      <input
          class="role-card__radio"
          type="radio"
          name="demo-role"
          :value="card.role"
          v-model="currentRole"
      />

      <svg class="role-card__icon" aria-hidden="true"><use :href="card.iconPath" /></svg>
      <span class="role-card__title">{{ card.title }}</span>
      <span class="role-card__description">{{ card.description }}</span>
      <svg class="role-card__chevron"
           :class="{ 'role-card__chevron--show': currentRole === card.role }"
           aria-hidden="true"
      >
        <use href="/sprite.svg#down-chevron" />
      </svg>
    </label>
  </div>
</template>

<style scoped lang="scss">
.demo {
  &__roles-nav {
    width: 100%;
    max-width: 1040px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
}

.role-card {
  cursor: pointer;
  user-select: none;

  border: 1px solid var(--border-color);
  border-radius: 10px;
  background-color: white;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transition: box-shadow 200ms ease, border-color 200ms ease, transform 200ms ease, background-color 200ms ease;

  &:hover {
    border-color: var(--border-color-hover);
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.10),
        0 2px 4px -2px rgba(0, 0, 0, 0.10);
  }

  &--active {
    border-color: var(--border-color-active);
    background-color: var(--bg-color-active);
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.10),
        0 2px 4px -2px rgba(0, 0, 0, 0.10);
    &:hover {
      border-color: var(--border-color-active)
    }
  }

  &--active .role-card__icon {
    background-color: var(--icon-bg-color-active);
  }

  &__radio {
    // screen readers
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
  }

  &__icon {
    width: 44px;
    height: 44px;
    color: var(--accent-color);
    background-color: var(--bg-color-light);
    padding: 10px;
    border-radius: 10px;
    transition: background-color 200ms ease;
  }

  &__title {
    font-weight: 700;
    margin-top: 0.5rem;
  }

  &__description {
    font-size: 0.875rem;
  }

  &__chevron {
    visibility: hidden;
    margin-top: auto;
    padding-left: 20px;
    width: 44px;
    rotate: 90deg;
    height: 24px;
    color: var(--accent-color);
    transition: background-color 200ms ease;
    &--show {
      visibility: visible;
    }
  }
  &__cevron symbol {
    rotate: 90deg;
  }
}
</style>
