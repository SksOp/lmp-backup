import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { paths } from "./paths";
import AuthGuard from "@/auth/guard/auth-guard";

const Home = React.lazy(() => import("@/pages/home"));
const Login = React.lazy(() => import("@/pages/auth/login"));
const Logout = React.lazy(() => import("@/pages/auth/logout"));
const ResetPassword = React.lazy(() => import("@/pages/auth/reset-password"));
const Lead = React.lazy(() => import("@/pages/lead"));
const Notifications = React.lazy(() => import("@/pages/notifications"));
export default function Router() {
  return useRoutes([...root]);
}

const root = [
  {
    path: paths.home,
    element: (
      <AuthGuard>
        <Home />
      </AuthGuard>
    ),
  },
  {
    path: paths.notifications,
    element: (
      <AuthGuard>
        <Notifications />
      </AuthGuard>
    ),
  },
  {
    path: paths.login,
    element: <Login />,
  },
  {
    path: paths.logout,
    element: (
      <AuthGuard>
        <Logout />
      </AuthGuard>
    ),
  },
  {
    path: paths.resetPassword,
    element: (
      <AuthGuard>
        <ResetPassword />
      </AuthGuard>
    ),
  },
  {
    path: paths.lead,
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
    ),
    children: [
      {
        path: ":id",
        element: <Lead />,
      },
      {
        path: "",
        element: <Navigate to={paths.home} replace />,
      },
    ],
  },
  {
    path: paths.notifications,
    element: (
      <Notifications />
    ),
  },
  { path: "*", element: <Navigate to="/404" replace /> },
];

export * from "./paths";
