import type {
    demoRoleType,
    driverViewRouteType,
    consigneeViewRouteType,
    managerViewRouteType,
} from "~/layers/visits/app/types/demoTypes";

export type DemoRouteMeta<T extends string> = {
    key: T;
    titleRu: string;
};

export type DemoRoleRouting = {
    titleRu: string;
    routes: DemoRouteMeta<driverViewRouteType | consigneeViewRouteType | managerViewRouteType>[];
};

export const demoRouting: Record<demoRoleType, DemoRoleRouting> = {
    driver: {
        titleRu: "Водитель",
        routes: [
            { key: "map", titleRu: "Карта" },
            { key: "applications", titleRu: "Заявки" },
            { key: "submit", titleRu: "Создать заявку" },
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
