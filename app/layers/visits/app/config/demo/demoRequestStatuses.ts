import type { RequestStatus } from "../../types/demo/demoDbTypes";
export const requestStatuses: Record<RequestStatus, string> = {
    active: 'План',
    accepted: 'Завершена',
    rejected: 'Отмена',
};
