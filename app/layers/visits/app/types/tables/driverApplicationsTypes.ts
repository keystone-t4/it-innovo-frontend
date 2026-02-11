
// DTO (view-model) для строки таблицы водителя.
// Значения берутся из разных сущностей \types\demoSeedTypes.ts (Driver + ArrivalPlace + Request)
// и/или являются переименованными/подготовленными для UI.
export type driverApplicationRowType = {
    full_name: string
    arrival_place_name: string
    created_at: string
    ttn_number: string
    unload_date: string
    unload_start_time: string
    status: string
}
