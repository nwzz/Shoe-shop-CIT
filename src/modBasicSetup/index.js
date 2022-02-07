import { lazy } from "react";

const BuildingList = lazy(() => import("./building/BuildingList"));
const BuildingAdd = lazy(() => import("./building/BuildingAdd"));
const BuildingEdit = lazy(() => import("./building/BuildingEdit"));

export { BuildingList, BuildingAdd, BuildingEdit };
