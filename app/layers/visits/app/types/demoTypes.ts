export type demoRoleType = "driver" | "consignee" | "manager";

// demo routing
export type driverViewRouteType = "map" | "applications" | "submit";
export type consigneeViewRouteType = "applications" | "queue" | "analytics";
export type managerViewRouteType = "applications";

export type allRoutesType = driverViewRouteType | consigneeViewRouteType | managerViewRouteType