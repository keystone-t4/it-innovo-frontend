import { isValidPhone, normalizePhone } from '~/layers/visits/app/features/demo/utils/phone';
import {isPastDate, isPastDateTime} from '~/layers/visits/app/features/demo/utils/currentDate';
import {useDemoDbStore} from "~/layers/visits/app/features/demo/stores/demoDbStore";
import {useDemoStore} from "~/layers/visits/app/features/demo/stores/demoStore";
import type {requestTableRowType, validRequestFormType} from "~/layers/visits/app/features/demo/types/demoDbTypes";

const demoDbStore = useDemoDbStore()
const demoStore = useDemoStore()

export function useRequestFormValidation(form: requestTableRowType) {
    const fieldErrors = reactive<Record<string, string>>({});

    const validate = (f: requestTableRowType = form): f is validRequestFormType => {
        Object.keys(fieldErrors).forEach(k => delete fieldErrors[k]);

        if (!f.ttn_number?.trim()) fieldErrors.ttn_number = 'Введите номер ТТН';
        if (!f.unload_date) fieldErrors.unload_date = 'Выберите дату разгрузки';
        if (f.unload_date && isPastDate(f.unload_date)) {
            fieldErrors.unload_date = 'Дата разгрузки не может быть в прошлом';
        }
        if (!f.unload_start_time) fieldErrors.unload_start_time = 'Укажите время начала';
        if (
            f.unload_date &&
            f.unload_start_time &&
            !fieldErrors.unload_date &&
            isPastDateTime(f.unload_date, f.unload_start_time)
        ) {
            fieldErrors.unload_start_time = 'Время разгрузки не может быть в прошлом';
        }
        if (!f.product_name?.trim()) fieldErrors.product_name = 'Укажите наименование продукта';
        if (!f.weight_ttn || Number.isNaN(f.weight_ttn) || f.weight_ttn <= 0) {
            fieldErrors.weight_ttn = 'Укажите корректный вес';
        }
        if (f.driver_phone?.trim() && !isValidPhone(f.driver_phone)) {
            fieldErrors.driver_phone = 'Некорректный номер телефона — допустимо 10–15 цифр';
        }

        if (f.ttn_number && demoDbStore.requests.some(r => r.ttn_number === f.ttn_number && r.status !== 'rejected')) {
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
        form.weight_ttn = null;
        form.driver_phone = null;
    };

    return { fieldErrors, validate, normalizeForm, resetForm };
}
