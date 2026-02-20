import { defineStore } from "pinia";
import { demoSeed} from "~/layers/visits/app/features/demo/data/demoSeed";
import type {
    ArrivalPlaceType,
    DriverType,
    TransportCompanyType,
    RequestType
} from "~/layers/visits/app/features/demo/types/demoDbTypes";

// Подними DB_VERSION когда хочешь полностью пересоздать демо-БД у всех пользователей
const DB_NAME = "visits_demo_db";
const DB_VERSION = 1;
const STORES = {
    companies: "transport_companies",
    drivers: "drivers",
    places: "arrival_places",
    requests: "requests",
} as const;

function isClient() {
    return typeof window !== "undefined" && typeof indexedDB !== "undefined";
}

// переходник из ivent-API inexedeDB к нормальному async await
function reqToPromise<T>(req: IDBRequest<T>) {
    return new Promise<T>((resolve, reject) => {
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

export const useDemoDbStore = defineStore("demoDbStore", () => {
    const initialized = ref(false);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const db = ref<IDBDatabase | null>(null);

    // кеш ui таблиц для
    const companies = ref<TransportCompanyType[]>([]);
    const drivers = ref<DriverType[]>([]);
    const arrivalPlaces = ref<ArrivalPlaceType[]>([]);
    const requests = ref<RequestType[]>([]);

    async function initDb() {
        if (!isClient()) return;
        if (initialized.value) return;

        loading.value = true;
        error.value = null;

        try {
            const dbInstance = await new Promise<IDBDatabase>((resolve, reject) => {
                const openRequest = indexedDB.open(DB_NAME, DB_VERSION);

                openRequest.onupgradeneeded = () => {
                    const upgradeDb = openRequest.result;
                    const tx = openRequest.transaction; // upgrade транзакция

                    if (!tx) {
                        throw new Error("Upgrade transaction is not available");
                    }

                    // 1) Удаление всех старых данных у пользователя при обновлении БД
                    for (const name of Array.from(upgradeDb.objectStoreNames)) {
                        upgradeDb.deleteObjectStore(name);
                    }

                    // 2) Создание схемы indexedDB
                        // TRANSPORT_COMPANY
                    const companies = upgradeDb.createObjectStore(STORES.companies, { keyPath: "id" });
                    companies.createIndex("name", "name", { unique: true });

                        // DRIVER
                    const drivers = upgradeDb.createObjectStore(STORES.drivers, { keyPath: "id" });
                    drivers.createIndex("company_id", "company_id", { unique: false });
                    drivers.createIndex("truck_number", "truck_number", { unique: true });
                    drivers.createIndex("trailer_number", "trailer_number", { unique: true });

                        // ARRIVAL_PLACE
                    const places = upgradeDb.createObjectStore(STORES.places, { keyPath: "id" });
                    places.createIndex("name", "name", { unique: true });
                    places.createIndex("address", "address", { unique: true });

                        // REQUEST
                    const requests = upgradeDb.createObjectStore(STORES.requests, { keyPath: "id" });
                    requests.createIndex("driver_id", "driver_id", { unique: false });
                    requests.createIndex("arrival_place_id", "arrival_place_id", { unique: false });
                    requests.createIndex("ttn_number", "ttn_number", { unique: false });
                    requests.createIndex("status", "status", { unique: false });

                    // 3) Запись seed данных
                    const companiesStore = tx.objectStore(STORES.companies);
                    const driversStore = tx.objectStore(STORES.drivers);
                    const placesStore = tx.objectStore(STORES.places);
                    const requestsStore = tx.objectStore(STORES.requests);

                    for (const c of demoSeed.transportCompanies) companiesStore.put(c);
                    for (const d of demoSeed.drivers) driversStore.put(d);
                    for (const p of demoSeed.arrivalPlaces) placesStore.put(p);
                    for (const r of demoSeed.requests) requestsStore.put(r);
                };

                openRequest.onsuccess = () => {
                    const openedDb = openRequest.result;

                    // Если другая вкладка обновит версию — эту закрываем
                    openedDb.onversionchange = () => {
                        openedDb.close();
                        alert("База данных обновилась. Перезагрузи страницу!");
                    };

                    resolve(openedDb);
                };

                openRequest.onerror = () => reject(openRequest.error);

                // Новая версия не может примениться, пока где-то открыт старый db
                // не должно срабатывать так как onversionchange работает корректно
                openRequest.onblocked = () => {
                    alert("Закрой другие вкладки с демо и перезагрузи страницу.");
                };
            });

            db.value = dbInstance;
            initialized.value = true;
        } catch (e: any) {
            error.value = e?.message ?? "Failed to init IndexedDB";
            throw e;
        } finally {
            loading.value = false;
        }
    }

    async function loadAll() {
        if (!db.value) throw new Error("DB not initialized");

        const tx = db.value.transaction(
            [STORES.companies, STORES.drivers, STORES.places, STORES.requests],
            "readonly"
        );

        const cReq = tx.objectStore(STORES.companies).getAll();
        const dReq = tx.objectStore(STORES.drivers).getAll();
        const pReq = tx.objectStore(STORES.places).getAll();
        const rReq = tx.objectStore(STORES.requests).getAll();

        const [c, d, p, r] = await Promise.all([
            reqToPromise<any[]>(cReq),
            reqToPromise<any[]>(dReq),
            reqToPromise<any[]>(pReq),
            reqToPromise<any[]>(rReq),
        ]);

        companies.value = c;
        drivers.value = d;
        arrivalPlaces.value = p;
        requests.value = r;
    }

    async function cancelRequest(requestId: string): Promise<RequestType | null> {
        if (!db.value) throw new Error("DB not initialized");

        if (!confirm("Вы действительно хотите отменить заявку?")) {
            return null;
        }

        const tx = db.value.transaction([STORES.requests], "readwrite");
        const store = tx.objectStore(STORES.requests);

        const request = await reqToPromise<RequestType | undefined>(store.get(requestId));
        if (!request) throw new Error(`Request ${requestId} not found`);
        if (request.status !== "active") throw new Error(`Cannot cancel request with status ${request.status}`);

        const updated: RequestType = { ...request, status: "rejected" };
        await reqToPromise(store.put(updated));

        const index = requests.value.findIndex(r  => r.id === requestId);
        if (index !== -1) requests.value[index] = updated;
        else requests.value.push(updated);

        return updated;
    }

    async function sendRequest(payload: Omit<RequestType, 'id' | 'status' | 'created_at'>) {
        if (!db.value) throw new Error("DB not initialized");

        // Сгенерировать id — используем crypto.randomUUID() если доступен, иначе fallback
        const newId = (isClient() && typeof (window as any).crypto?.randomUUID === "function")
            ? (window as any).crypto.randomUUID()
            : `req_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;

        const created_at = new Date().toISOString();
        const status: RequestType['status'] = "active";

        const request: RequestType = {
            ...payload,
            id: newId,
            created_at,
            status,
        };

        const tx = db.value.transaction([STORES.requests], "readwrite");
        const storeReq = tx.objectStore(STORES.requests);

        await reqToPromise(storeReq.add(request));

        // Пуш в локальный кеш
        requests.value.push(request);

        return request;
    }

    function getAllTransportCompanyDriversById(id?: string | null): DriverType[] {
        if (!id) return [];
        return drivers.value.filter(d => d.company_id === id)
    }

    function getTransportCompanyNameById(id?: string | null): string | null {
        if (!id) return null;
        return companies.value.find(c => c.id === id)?.name ?? null;
    }

    function getArrivalPlaceNameById(id?: string | null): string | null {
        if (!id) return null;
        return arrivalPlaces.value.find(p => p.id === id)?.name ?? null;
    }

    function getCurrentDriverById(id?: string | null): DriverType | null {
        if (!id) return null;
        return drivers.value.find(d => d.id === id) ?? null;
    }

    function getCurrentDriverRequestsById(driverId?: string | null): RequestType[] {
        if (!driverId) return [];
        return requests.value.filter(r => r.driver_id === driverId);
    }

    function isCurrentDriverHaveActiveRequestById(id?: string | null): boolean {
        if (!id) return false;

        return requests.value.some(
            r => r.driver_id === id && r.status === "active"
        );
    }

    return {
        initialized,
        loading,
        error,

        db,

        companies,
        drivers,
        arrivalPlaces,
        requests,

        initDb,
        loadAll,
        cancelRequest,
        sendRequest,

        getAllTransportCompanyDriversById,
        getTransportCompanyNameById,
        getArrivalPlaceNameById,
        getCurrentDriverById,
        getCurrentDriverRequestsById,
        isCurrentDriverHaveActiveRequestById,
    };
});
