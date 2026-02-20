<script setup lang="ts">
import { useDemoDbStore } from '~/layers/visits/app/features/demo/stores/demoDbStore';
import { useDemoStore } from '~/layers/visits/app/features/demo/stores/demoStore';
import {useRequestFormValidation} from "~/layers/visits/app/features/demo/composables/driver/useRequestFormValidation";
import type {RequestType} from "~/layers/visits/app/features/demo/types/demoDbTypes";
import {getCurrentTime, getToday} from "~/layers/visits/app/features/demo/utils/date";

const demoDbStore = useDemoDbStore();
const demoStore = useDemoStore();

const form = reactive({
  ttn_number: '',
  unload_date: '',
  unload_start_time: '',
  product_name: '',
  weight_ttn: NaN,
  driver_phone: '',
} as Omit<RequestType, 'id' | 'status' | 'created_at' | 'driver_id' | 'arrival_place_id'>);

const minTime = computed(() =>
    form.unload_date === getToday() ? getCurrentTime() : undefined
);

const { fieldErrors, validate, normalizeForm, resetForm } = useRequestFormValidation(form);

// UX state
const sending = ref(false);
const formError = ref<string | null>(null);

const currentRole = computed(() => demoStore.currentRole)
const currentDriver = computed(() => {
  if (currentRole.value === 'manager') {
    return demoDbStore.getCurrentDriverById(demoStore.currentDriverOfTransportCompanyId)
  } else {
    return demoDbStore.getCurrentDriverById(demoStore.currentDriverId)
  }
})

const switchCurrentDriver = computed({
  get: () => currentDriver.value?.id ?? '-',
  set: (newDriverId) => {
    demoStore.formSubmitSuccess = false;
    demoStore.currentDriverOfTransportCompanyId = newDriverId
  }
});

const allTransportCompanyDrivers = computed(() =>
    demoDbStore.getAllTransportCompanyDriversById(demoStore.currentTransportCompanyId)
)

const currentPlaceName = demoDbStore.getArrivalPlaceNameById(demoStore.currentArrivalPlaceId);

async function onSubmit() {
  formError.value = null;

  if (!validate()) return;

  sending.value = true;
  try {
    await demoDbStore.sendRequest({
      driver_id: currentDriver.value?.id ?? '-',
      arrival_place_id: demoStore.currentArrivalPlaceId,
      ...normalizeForm(),
    });

    demoStore.formSubmitSuccess = true
    resetForm();
  } catch (e: any) {
    formError.value = e?.message ?? 'Не удалось отправить заявку';
  } finally {
    sending.value = false;
  }
}

const isCurrentDriverOfTransportCompanyHaveActiveRequest = computed(() =>
    demoDbStore.isCurrentDriverHaveActiveRequestById(
        demoStore.currentDriverOfTransportCompanyId
    )
);

onMounted(() => {
  demoStore.formSubmitSuccess = false;
})
</script>

<template>
  <form class="request-form" @submit.prevent="onSubmit" novalidate>

    <div class="request-form__row">
      <label class="request-form__label">ФИО водителя</label>

      <input v-if="currentRole === 'driver'" class="request-form__input" type="text" disabled
             :value="currentDriver?.full_name ?? ''"/>

      <HeadlessListbox v-else v-model="switchCurrentDriver" v-slot="{ open }">
        <div class="request-form__list-box list-box">
          <HeadlessListboxButton class="list-box__trigger">
            <span class="list-box__trigger-text">{{ currentDriver?.full_name }}</span>
            <svg class="list-box__icon"
                 :class="{ 'list-box__icon--open': open }"
                 aria-hidden="true"
            >
              <use href="/sprite.svg#down-chevron" />
            </svg>
          </HeadlessListboxButton>

          <transition
              leave-active-class="list-box__transition-leave-active"
              leave-from-class="list-box__transition-leave-from"
              leave-to-class="list-box__transition-leave-to"
          >
            <HeadlessListboxOptions class="list-box__dropdown">
              <HeadlessListboxOption
                  v-slot="{ active, selected }"
                  v-for="driver in allTransportCompanyDrivers"
                  :key="driver.id"
                  :value="driver.id"
                  as="template"
              >
                <li
                    class="list-box__option"
                    :class="{
                    'list-box__option--active': active,
                    'list-box__option--selected': selected,
                  }"
                >
                  <span
                      class="list-box__option-text"
                      :class="{ 'list-box__option-text--selected': selected }"
                  >
                    {{ driver.full_name }}
                  </span>
                </li>
              </HeadlessListboxOption>
            </HeadlessListboxOptions>
          </transition>
        </div>
      </HeadlessListbox>
    </div>

    <template v-if="(!isCurrentDriverOfTransportCompanyHaveActiveRequest && currentRole === 'manager') || currentRole === 'driver'">
      <div class="request-form__row">
        <label class="request-form__label">Место прибытия</label>
        <input class="request-form__input" type="text" disabled
               :value="currentPlaceName ?? ''"/>
      </div>

      <div class="request-form__row">
        <label class="request-form__label">Номер ТТН</label>
        <input class="request-form__input"
               v-model="form.ttn_number"
               type="text"
               :disabled="sending" />
        <div class="request-form__error" v-if="fieldErrors.ttn_number">
          {{ fieldErrors.ttn_number }}
        </div>
      </div>

      <div class="request-form__row">
        <label class="request-form__label">Номер машины</label>
        <input class="request-form__input" type="text" disabled
               :value="currentDriver?.truck_number ?? ''"/>
      </div>

      <div class="request-form__row">
        <label class="request-form__label">Номер прицепа</label>
        <input class="request-form__input" type="text" disabled
               :value="currentDriver?.trailer_number ?? ''"/>
      </div>

      <div class="request-form__row">
        <label class="request-form__label">Дата разгрузки</label>
        <input
            class="request-form__input"
            v-model="form.unload_date"
            type="date"
            :min="getToday()"
            :disabled="sending"
        />
        <div class="request-form__error" v-if="fieldErrors.unload_date">
          {{ fieldErrors.unload_date }}
        </div>
      </div>

      <div class="request-form__row">
        <label class="request-form__label">Время начала разгрузки</label>
        <input
            class="request-form__input"
            v-model="form.unload_start_time"
            type="time"
            :min="minTime"
            :disabled="sending"
        />
        <div class="request-form__error" v-if="fieldErrors.unload_start_time">
          {{ fieldErrors.unload_start_time }}
        </div>
      </div>

      <div class="request-form__row">
        <label class="request-form__label">Наименование продукта</label>
        <input class="request-form__input"
               v-model="form.product_name"
               type="text"
               :disabled="sending"
               placeholder="Битум"
        />
        <div class="request-form__error" v-if="fieldErrors.product_name">
          {{ fieldErrors.product_name }}
        </div>
      </div>

      <div class="request-form__row">
        <label class="request-form__label">Вес по ТТН (kg)</label>
        <input class="request-form__input"
               v-model.number="form.weight_ttn"
               type="number"
               min="0"
               step="1"
               :disabled="sending"
        />
        <div class="request-form__error" v-if="fieldErrors.weight_ttn">
          {{ fieldErrors.weight_ttn }}
        </div>
      </div>

      <div class="request-form__row">
        <label class="request-form__label">Телефон водителя</label>
        <input
            class="request-form__input"
            v-model="form.driver_phone"
            type="tel"
            inputmode="numeric"
            :disabled="sending"
            placeholder="89312345678"
        />
        <div class="request-form__error" v-if="fieldErrors.driver_phone">
          {{ fieldErrors.driver_phone }}
        </div>
      </div>

      <div class="request-form__actions">
        <button class="request-form__button"
                type="submit"
                :disabled="sending">
          <span v-if="sending">Отправка...</span>
          <span v-else>Отправить заявку</span>
        </button>
      </div>

      <p class="request-form__error" v-if="formError">
        {{ formError }}
      </p>
    </template>
    <p v-else-if="demoStore.formSubmitSuccess" class="info-card">
      Заявка успешно создана.
    </p>

    <p v-else class="info-card">
      У выбранного водителя уже есть активная заявка. Бронирование станет доступно после ее выполнения или отмены.
    </p>

  </form>

</template>

<style scoped lang="scss">
.request-form {
  max-width: 560px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &__title {
    margin-bottom: 0.25rem;
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    position: relative;
  }

  &__label {
    font-weight: 600;
    font-size: 0.95rem;
  }

  &__input {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    font-size: 1rem;

    &:disabled {
      cursor: not-allowed;
    }
  }

  &__actions {
    margin-top: 0.5rem;
  }

  &__button {
    padding: 0.6rem 1rem;
    border-radius: 5px;
    background: var(--accent-color);
    color: white;
    border: none;
    cursor: pointer;
  }

  &__error {
    color: var(--reject-color);
    font-size: 0.85rem;
  }

  &__success {
    color: var(--accept-color);
    font-size: 0.95rem;
  }
}

.list-box {
  display: block;
  width: 100%;

  &__wrapper {
    position: relative;
    margin-top: 0.25rem;
  }

  &__icon {
    width: 24px;
    height: 24px;
    rotate: -90deg;
    transition: transform 0.2s;
  }
  &__icon--open {
    transform: rotate(180deg);
  }

  &__trigger {
    position: relative;
    width: 100%;
    cursor: pointer;
    border-radius: 0.25rem;
    background-color: #cfc9c942;
    padding: 0.5rem 0.75rem;
    text-align: left;
    outline: none;
    color: var(--accent-color);
    line-height: 1.25rem;
    border: 1px solid var(--accent-color);
    display: flex;
    justify-content: space-between;
    &:hover {
      background-color: white;
    }
    &:focus-visible {
      border-color: var(--outline-color);
      box-shadow: 0 0 0 2px var(--outline-shadow);
    }
  }

  &__trigger-text {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__dropdown {
    position: absolute;
    margin-top: -0.05rem;
    max-height: 15rem;
    width: 100%;
    overflow: auto;
    border-radius: 0 0 0.375rem 0.375rem;
    background-color: #fff;
    padding: 0.25rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid var(--accent-color);
    z-index: 10;
  }

  &__option {
    position: relative;
    cursor: default;
    padding: 0.5rem 2.5rem 0.5rem 1rem;
    color: #111827;
    transition: background-color 0.1s ease;

    &--active {
      background-color: var(--bg-color-active);
      color: var(--accent-color);
      cursor: pointer;
    }
  }

  &__option-text {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &--selected {
      font-weight: 500;
    }
  }

  &__transition-leave-active {
    transition: opacity 0.1s ease-in;
  }

  &__transition-leave-from {
    opacity: 1;
  }

  &__transition-leave-to {
    opacity: 0;
  }
}
</style>
