<script setup lang="ts">
import { useDemoDbStore } from '~/layers/visits/app/stores/demo/demoDbStore';
import { useDemoStore } from '~/layers/visits/app/stores/demo/demoStore';
import {reactive} from "vue";
import {useRequestFormValidation} from "~/layers/visits/app/composables/demo/driver/useRequestFormValidation";
import type {RequestType} from "~/layers/visits/app/types/demo/demoDbTypes";
import {getCurrentTime, getToday} from "~/layers/visits/app/utils/demo/date";

const demoDbStore = useDemoDbStore();
const demoStore = useDemoStore();

const minTime = computed(() =>
    form.unload_date === getToday() ? getCurrentTime() : undefined
);

const form = reactive({
  ttn_number: '',
  unload_date: '',
  unload_start_time: '',
  product_name: '',
  weight_ttn: NaN,
  driver_phone: '',
} as Omit<RequestType, 'id' | 'status' | 'created_at' | 'driver_id' | 'arrival_place_id'>);

const { fieldErrors, validate, normalizeForm, resetForm } = useRequestFormValidation(form);

// UX state
const sending = ref(false);
const success = ref(false);
const formError = ref<string | null>(null);

const currentDriver = demoDbStore.getCurrentDriverById(demoStore.currentDriverId);
const currentPlaceName = demoDbStore.getArrivalPlaceNameById(demoStore.currentArrivalPlaceId);

const isCurrentDriverHaveActiveRequest = computed(() =>
    demoDbStore.isCurrentDriverHaveActiveRequestById(
        demoStore.currentDriverId
    )
);

async function onSubmit() {
  formError.value = null;
  success.value = false;

  if (!validate()) return;

  sending.value = true;
  try {
    await demoDbStore.sendRequest({
      driver_id: demoStore.currentDriverId,
      arrival_place_id: demoStore.currentArrivalPlaceId,
      ...normalizeForm(),
    });

    success.value = true;
    resetForm();
  } catch (e: any) {
    formError.value = e?.message ?? 'Не удалось отправить заявку';
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <form v-if="!isCurrentDriverHaveActiveRequest" class="request-form" @submit.prevent="onSubmit" novalidate>

    <div class="request-form__row">
      <label class="request-form__label">ФИО водителя</label>
      <input class="request-form__input" type="text" disabled
             :value="currentDriver?.full_name ?? ''"/>
    </div>

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
  </form>

  <p v-else-if="success" class="request-info">
    Заявка успешно создана.
  </p>

  <p v-else class="request-info">
    У вас есть активная заявка. Бронирование станет доступно после ее выполнения или отмены.
  </p>
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
    color: #d9534f;
    font-size: 0.85rem;
  }

  &__success {
    color: #28a745;
    font-size: 0.95rem;
  }
}

.request-info {
  background-color: var(--card-color);
  border: 1px solid var(--card-border-color);
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
  color: var(--text-dark-accent);
}
</style>
