export type tableHeader<T> = {
    title: string;
    key: keyof T;
};

// DTO (view-model) для строки таблицы водителя.
// Значения берутся из разных сущностей \types\demoDbTypes.ts (Driver + ArrivalPlace + Request)
// и/или являются переименованными/подготовленными для UI.
export type driverApplicationRowType = {
    req_id: string

    full_name: string
    arrival_place_name: string

    created_at: string
    ttn_number: string
    unload_date: string
    unload_start_time: string
    status: string

    interact: string
}

export type managerDriversTypes = {
    driver_id: string
    full_name: string
    car_number: string
    phone: string
    interact: string
}

export type consigneeQueueTypes = {
    request_id: string
    unload_date: string
    transports_number: string
    transport_company_name: string
    status: string
}