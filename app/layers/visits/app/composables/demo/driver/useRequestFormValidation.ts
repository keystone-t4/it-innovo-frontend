import { isValidPhone, normalizePhone } from '~/layers/visits/app/utils/demo/phone';
import {getToday, isPastDate, isPastDateTime} from '~/layers/visits/app/utils/demo/date';
import {useDemoDbStore} from "~/layers/visits/app/stores/demo/demoDbStore";
import {useDemoStore} from "~/layers/visits/app/stores/demo/demoStore";
import type {RequestType} from "~/layers/visits/app/types/demo/demoDbTypes";

const demoDbStore = useDemoDbStore()
const demoStore = useDemoStore()

export function useRequestFormValidation(form: Omit<RequestType, 'id' | 'status' | 'created_at'| 'driver_id' | 'arrival_place_id'>) {
    const fieldErrors = reactive<Record<string, string>>({});

    const validate = () => {
        Object.keys(fieldErrors).forEach(k => delete fieldErrors[k]);

        if (!form.ttn_number?.trim()) fieldErrors.ttn_number = 'Введите номер ТТН';
        if (!form.unload_date) fieldErrors.unload_date = 'Выберите дату разгрузки';
        if (form.unload_date && isPastDate(form.unload_date)) {
            fieldErrors.unload_date = 'Дата разгрузки не может быть в прошлом';
        }
        if (!form.unload_start_time) fieldErrors.unload_start_time = 'Укажите время начала';
        if (
            form.unload_date &&
            form.unload_start_time &&
            !fieldErrors.unload_date &&
            isPastDateTime(form.unload_date, form.unload_start_time)
        ) {
            fieldErrors.unload_start_time = 'Время разгрузки не может быть в прошлом';
        }
        if (!form.product_name?.trim()) fieldErrors.product_name = 'Укажите наименование продукта';
        if (form.weight_ttn === null || Number.isNaN(form.weight_ttn) || form.weight_ttn <= 0) {
            fieldErrors.weight_ttn = 'Укажите корректный вес';
        }
        if (!form.driver_phone?.trim()) {
            fieldErrors.driver_phone = 'Укажите телефон водителя';
        } else if (!isValidPhone(form.driver_phone)) {
            fieldErrors.driver_phone = 'Некорректный номер телефона — допустимо 10–15 цифр';
        }

        if (form.ttn_number && demoDbStore.requests.some(r => r.ttn_number === form.ttn_number)) {
            fieldErrors.ttn_number = 'Заявка с таким ТТН уже существует';
        }

        if (!demoStore.currentDriverId) fieldErrors.driver = 'Не выбран водитель';
        if (!demoStore.currentArrivalPlaceId) fieldErrors.arrival_place = 'Не выбрано место прибытия';

        return Object.keys(fieldErrors).length === 0;
    };

    const normalizeForm = () => ({
        ...form,
        driver_phone: normalizePhone(form.driver_phone),
        weight_ttn: form.weight_ttn ? Number(form.weight_ttn) : NaN,
    });

    const resetForm = () => {
        form.ttn_number = '';
        form.unload_date = '';
        form.unload_start_time = '';
        form.product_name = '';
        form.weight_ttn = NaN;
        form.driver_phone = '';
    };

    return { fieldErrors, validate, normalizeForm, resetForm };
}
