<script setup lang="ts">
import { useDemoStore } from "~/layers/visits/app/features/demo/stores/demoStore";
import type { demoRoleType } from "~/layers/visits/app/features/demo/types/demoTypes";

type roleCard = {
  title: string;
  description: string;
  role: demoRoleType;
};

const demoStore = useDemoStore();

const roleCards: Record<demoRoleType, roleCard> = {
  driver: {
    title: "Водитель грузового ТС",
    description: "Бронирование слотов и въезд на территорию",
    role: "driver",
  },
  consignee: {
    title: "Грузополучатель",
    description: "Контроль очереди и операций",
    role: "consignee",
  },
  manager: {
    title: "Менеджер транспортной компании",
    description: "Планирование отгрузок и мониторинг",
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
      <span class="role-card__title">{{ card.title }}</span>
      <span class="role-card__description">{{ card.description }}</span>
      <svg class="role-card__arrow"
           :class="{ 'role-card__arrow--show': currentRole === card.role }"
           aria-hidden="true"
      >
        <use href="/sprite-visits.svg#arrow" />
      </svg>
    </label>
  </div>
</template>

<style scoped lang="scss">
.demo {
  &__roles-nav {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 680px) {
      grid-template-columns: 1fr;
    }
  }
}

.role-card {
  cursor: pointer;
  user-select: none;
  background-color: #F5F5FA;

  border-radius: 10px;
  min-height: 217px;
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  transition: box-shadow 200ms ease, border-color 200ms ease, transform 200ms ease, background-color 200ms ease;

  padding: 30px 40px;
  @media (max-width: 1024px) {
    padding: 20px 30px;
  }
  @media (max-width: 680px) {
    min-height: 150px;
  }
  @media (max-width: 576px) {
    padding: 15px 25px;
  }

  &:hover {
    border-color: var(--visits-border-color-hover);
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.10),
        0 2px 4px -2px rgba(0, 0, 0, 0.10);
  }

  &--active {
    color: white;
    background-color: var(--visits-bg-color-active);
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.10),
        0 2px 4px -2px rgba(0, 0, 0, 0.10);
    &:hover {
      border-color: var(--visits-border-color-active)
    }
    &:has(:focus-visible) {
      outline: 2px solid var(--visits-outline-color);
      outline-offset: 2px;
    }
  }

  &--active {
    background-color: #69C5E1;
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

  &__title {
    font-weight: 700;
    font-size: 1.563rem;
    @media (max-width: 1220px) {
      font-size: 1.25rem;
    }
    @media (max-width: 1024px) {
      font-size: 1.375rem;
    }
    @media (max-width: 576px) {
      font-size: 1.125rem;
    }
  }

  &__description {
    margin-top: 10px;
    font-size: 1.25rem;
    @media (max-width: 1100px) {
      font-size: 1rem;
    }
    @media (max-width: 680px) {
      font-size:  0.875rem;
    }
  }

  &__arrow {
    visibility: hidden;
    margin-top: auto;
    margin-left: auto;
    width: 24px;
    rotate: 90deg;
    height: 24px;
    color: white;
    transition: background-color 200ms ease;
    &--show {
      visibility: visible;
    }
  }
}
</style>
