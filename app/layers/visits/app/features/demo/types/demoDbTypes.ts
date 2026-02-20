export type RequestStatusType = "active" | "accepted" | "rejected";

export interface TransportCompanyType {
    id: string;
    name: string;
}

export interface DriverType {
    id: string;
    company_id: string;
    full_name: string;
    truck_number: string;
    trailer_number: string;
    phone: string;
}

export interface ArrivalPlaceType {
    id: string;
    name: string;
    address: string;
    map_x: number;
    map_y: number;
    link: string;
}

export interface RequestType {
    id: string;
    driver_id: string;
    arrival_place_id: string;

    created_at: string; // ISO datetime, e.g. "2026-02-08T13:30:00"
    ttn_number: string;
    unload_date: string; // "YYYY-MM-DD"
    unload_start_time: string; // "HH:mm"
    status: RequestStatusType;

    product_name: string;
    weight_ttn: number;

    driver_phone: string;
}

export interface DemoSeedTypes {
    transportCompanies: TransportCompanyType[];
    drivers: DriverType[];
    arrivalPlaces: ArrivalPlaceType[];
    requests: RequestType[];
}
