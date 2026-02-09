import type {consigneeView, demoRole, driverView, managerView} from "~/layers/visits/app/types/demoTypes";

// todo: пересмотреть
export const useDemoStore = defineStore('demoStore', () => {
    const currentRole = ref<demoRole>("driver");

    const driverView = ref<driverView>("map");
    const consigneeView = ref<consigneeView>("applications");
    const managerView = ref<managerView>("applications");

    const currentDriverId = ref<string | null>('drv_tc001_01');
    const selectedArrivalPlaceId = ref<string | null>('pl_001');

    const currentView = computed<driverView | consigneeView | managerView>(() => {
        if (currentRole.value === "driver") return driverView.value;
        if (currentRole.value === "consignee") return consigneeView.value;
        return managerView.value;
    });

    function setRole(role: demoRole) {
        currentRole.value = role;
    }

    function setDriverView(view: driverView) {
        driverView.value = view;
    }
    function setConsigneeView(view: consigneeView) {
        consigneeView.value = view;
    }
    function setManagerView(view: managerView) {
        managerView.value = view;
    }

    return {
        currentRole,
        driverView,
        consigneeView,
        managerView,
        currentView,
        currentDriverId,
        selectedArrivalPlaceId,
        setRole,
        setDriverView,
        setConsigneeView,
        setManagerView,
    };
})