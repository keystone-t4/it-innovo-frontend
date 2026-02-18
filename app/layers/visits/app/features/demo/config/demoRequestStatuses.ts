import type { RequestStatusType } from "../types/demoDbTypes";
export const requestStatuses: Record<RequestStatusType, string> = {
    active: 'План',
    accepted: 'Завершена',
    rejected: 'Отменена',
};
