import {useDemoDbStore} from "~/layers/visits/app/stores/demo/demoDbStore";
import {useDemoStore} from "~/layers/visits/app/stores/demo/demoStore";

const demoDbStore = useDemoDbStore()
const demoStore = useDemoStore()

export const getCurrentDriverRequests = computed(() => {
    return demoDbStore.requests.filter(
        request => request.driver_id === demoStore.currentDriverId
    );
});

export const getDriverFullName = computed(() => {
    const driver = demoDbStore.drivers.find(
        d => d.id === demoStore.currentDriverId
    );

    return driver?.full_name ?? '-';
})

export function getArrivalPlaceName(placeId: string) {
    const place = demoDbStore.arrivalPlaces.find(
        p => p.id === placeId
    );

    return place?.name ?? '-';
}