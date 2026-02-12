import type { driverApplicationRowType } from "~/layers/visits/app/types/demo/tables/driverApplicationsTypes";

export type TableHeader<T> = {
    title: string;
    key: keyof T;
};

export const driverApplicationsHeaders: TableHeader<driverApplicationRowType>[] = [
    { title: "ФИО", key: "full_name" },
    { title: "Место прибытия", key: "arrival_place_name" },
    { title: "Дата создания заявки", key: "created_at" },
    { title: "Номер ТТН", key: "ttn_number" },
    { title: "Дата разгрузки", key: "unload_date" },
    { title: "Время начала разгрузки", key: "unload_start_time" },
    { title: "Статус", key: "status" },
];
