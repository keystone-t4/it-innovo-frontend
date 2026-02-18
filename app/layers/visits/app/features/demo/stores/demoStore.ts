import type {
    allRoutesType,
    consigneeViewRouteType,
    demoRoleType,
    driverViewRouteType,
    managerViewRouteType
} from "~/layers/visits/app/features/demo/types/demoTypes";
import {demoRouting} from "~/layers/visits/app/features/demo/config/demoRoutes";

// Выбор роли, роутинг демки для каждой роли и данные пользователя демки (предопределены)
export const useDemoStore = defineStore('demoStore', () => {
    const currentRole = ref<demoRoleType>("driver");

    const driverViewRoute = ref<driverViewRouteType>("map");
    const consigneeViewRoute = ref<consigneeViewRouteType>("applications");
    const managerViewRoute = ref<managerViewRouteType>("applications");

    const currentDriverId = ref<string>('drv_tc001_01');
    const currentArrivalPlaceId = ref<string>('pl_001');

    const currentView = computed<allRoutesType>(() => {
        if (currentRole.value === "driver") return driverViewRoute.value;
        if (currentRole.value === "consignee") return consigneeViewRoute.value;
        return managerViewRoute.value;
    });

    const getCurrentRouteTitle = computed(() => {
        const routes = demoRouting[currentRole.value].routes;
        const found = routes.find(route => route.key === currentView.value);
        return found?.titleRu ?? '';
    });

    function setCurrentRoute(newRoute: allRoutesType) {
        if (currentRole.value === "driver") {
            driverViewRoute.value = newRoute as driverViewRouteType;
            return;
        }
        if (currentRole.value === "consignee") {
            consigneeViewRoute.value = newRoute as consigneeViewRouteType;
            return;
        }
        managerViewRoute.value = newRoute as managerViewRouteType;
    }

    function setRole(role: demoRoleType) {
        currentRole.value = role;
    }

    return {
        currentRole,
        driverViewRoute,
        consigneeViewRoute,
        managerViewRoute,
        currentView,
        currentDriverId,
        currentArrivalPlaceId,

        getCurrentRouteTitle,

        setRole,
        setCurrentRoute
    };
})