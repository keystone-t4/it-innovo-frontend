import type {consigneeViewRouteType, demoRole, driverViewRouteType, managerViewRouteType} from "~/layers/visits/app/types/demoTypes";

export const useDemoStore = defineStore('demoStore', () => {
    const currentRole = ref<demoRole>("driver");

    const driverViewRoute = ref<driverViewRouteType>("map");
    const consigneeViewRoute = ref<consigneeViewRouteType>("applications");
    const managerViewRoute = ref<managerViewRouteType>("applications");

    const currentDriverId = ref<string | null>('drv_tc001_01');
    const selectedArrivalPlaceId = ref<string | null>('pl_001');

    const currentView = computed<driverViewRouteType | consigneeViewRouteType | managerViewRouteType>(() => {
        if (currentRole.value === "driver") return driverViewRoute.value;
        if (currentRole.value === "consignee") return consigneeViewRoute.value;
        return managerViewRoute.value;
    });

    function setRole(role: demoRole) {
        currentRole.value = role;
    }

    function setDriverViewRoute(view: driverViewRouteType) {
        driverViewRoute.value = view;
    }
    function setConsigneeViewRoute(view: consigneeViewRouteType) {
        consigneeViewRoute.value = view;
    }
    function setManagerViewRoute(view: managerViewRouteType) {
        managerViewRoute.value = view;
    }

    return {
        currentRole,
        driverViewRoute,
        consigneeViewRoute,
        managerViewRoute,
        currentView,
        currentDriverId,
        selectedArrivalPlaceId,
        setRole,
        setDriverViewRoute,
        setConsigneeViewRoute,
        setManagerViewRoute,
    };
})