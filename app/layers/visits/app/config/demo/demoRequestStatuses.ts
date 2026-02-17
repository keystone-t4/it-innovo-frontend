import type { RequestStatusType } from "../../types/demo/demoDbTypes";
export const requestStatuses: Record<RequestStatusType, string> = {
    active: 'План',
    accepted: 'Завершена',
    rejected: 'Отменена',
};
