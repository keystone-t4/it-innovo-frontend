import type {
    tableHeader,
    managerDriversTypes,
    driverApplicationRowType,
    consigneeQueueTypes
} from "~/layers/visits/app/features/demo/types/demoTablesTypes";

export const driverApplicationsHeaders: tableHeader<driverApplicationRowType>[] = [
    { title: "ФИО", key: "full_name" },
    { title: "Место прибытия", key: "arrival_place_name" },
    { title: "Дата создания заявки", key: "created_at" },
    { title: "Номер ТТН", key: "ttn_number" },
    { title: "Дата разгрузки", key: "unload_date" },
    { title: "Время начала разгрузки", key: "unload_start_time" },
    { title: "Статус", key: "status" },
    { title: "Действие", key: "interact"},
];

export const managerDriversHeaders: tableHeader<managerDriversTypes>[] = [
    { title: "ФИО", key: "full_name" },
    { title: "Номер машины", key: "car_number" },
    { title: "Номер телефона", key: "phone" },
    { title: "Действие", key: "interact"},
];

export const consigneeHeaders: tableHeader<consigneeQueueTypes>[] = [
    { title: "Плановая дата и время выгрузки ТС", key: "unload_date" },
    { title: "Гос номер ТС \n Номер прицепа", key: "transports_number" },
    { title: "Перевозчик", key: "transport_company_name" },
    { title: "Статус", key: "status"},
];
