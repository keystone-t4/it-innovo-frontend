export type demoRoleType = "driver" | "consignee" | "manager";
// demo routing
export type driverViewRouteType = "map" | "applications" | "submit";
export type consigneeViewRouteType = "queue" | "analytics";
export type managerViewRouteType = "drivers" | "submit";

export type allRoutesType = driverViewRouteType | consigneeViewRouteType | managerViewRouteType