import type {tableHeader, managerDriversTypes, driverApplicationRowType} from "~/layers/visits/app/features/demo/types/demoTables";

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

