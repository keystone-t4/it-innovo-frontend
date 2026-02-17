import type {
    demoRoleType,
    driverViewRouteType,
    consigneeViewRouteType,
    managerViewRouteType,
} from "~/layers/visits/app/types/demo/demoTypes";

export type DemoRouteMeta<T extends string> = {
    key: T;
    titleRu: string;
};

export type DemoRoleRouting = {
    titleRu: string;
    routes: DemoRouteMeta<driverViewRouteType | consigneeViewRouteType | managerViewRouteType>[];
};

// При добавлении нового маршрута необходимо создать соответствующий ему файл
// в visits/app/components/demo/ИМЯ_РОЛИ/НОВЫЙ_МАРШРУТ.vue
// При добавлении новой роли нужно создать соответствующую папку (с минимум
// одним маршрутом) и обновить переменные, методы и условия в demoStore.ts
export const demoRouting: Record<demoRoleType, DemoRoleRouting> = {
    driver: {
        titleRu: "Водитель",
        routes: [
            { key: "map", titleRu: "Карта" },
            { key: "applications", titleRu: "Заявки" },
            { key: "submit", titleRu: "Оставить заявку" },
        ],
    },
    consignee: {
        titleRu: "Грузополучатель",
        routes: [
            { key: "applications", titleRu: "Заявки" },
            { key: "queue", titleRu: "Очередь" },
            { key: "analytics", titleRu: "Аналитика" },
        ],
    },
    manager: {
        titleRu: "Менеджер ТК",
        routes: [{ key: "applications", titleRu: "Заявки"}],
    },
};
