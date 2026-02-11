import { defineStore } from "pinia";
import { demoSeed} from "~/layers/visits/app/data/demoSeed";

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

export const useDemoDbStore = defineStore("demoDbStore", () => {
    const initialized = ref(false);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const db = ref<IDBDatabase | null>(null);

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
                    requests.createIndex("ttn_number", "ttn_number", { unique: true });
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

    return {
        initialized,
        loading,
        error,

        db,

        initDb,
    };
});
