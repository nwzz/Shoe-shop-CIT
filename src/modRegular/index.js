import { lazy } from "react";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const TenantList = lazy(() => import("./tenant/TenantList"));
const TenantAdd = lazy(() => import("./tenant/TenantAdd"));
const TenantEdit = lazy(() => import("./tenant/TenantEdit"));
const TenantOldList = lazy(() => import("./tenant/TenantOldList"));
const TenantLedger = lazy(() => import("./tenant/TenantLedger"));

export {
  Dashboard,
  TenantList,
  TenantAdd,
  TenantEdit,
  TenantOldList,
  TenantLedger,
};
