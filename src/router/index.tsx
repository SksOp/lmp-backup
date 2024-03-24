import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { paths } from "./paths";
import AuthGuard from "@/auth/guard/auth-guard";

const Home = React.lazy(() => import("@/pages/home"));
const Login = React.lazy(() => import("@/pages/auth/login"));
const Logout = React.lazy(() => import("@/pages/auth/logout"));
const ResetPassword = React.lazy(() => import("@/pages/auth/reset-password"));
const Profile = React.lazy(() => import("@/pages/profile/profile"));
const Lead = React.lazy(() => import("@/pages/lead"));
const Notifications = React.lazy(() => import("@/pages/notifications"));
const Welcome = React.lazy(() => import("@/pages/welcome"));
const Application = React.lazy(() => import("@/pages/application"));

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
    children: [
      {
        path: ":id",
        element: <Lead />,
      },
    ],
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
    path: paths.welcome,
    element: (
      <AuthGuard>
        <Welcome />
      </AuthGuard>
    ),
  },
  {
    path: paths.application,
    element: (
      <AuthGuard>
        <Application />
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
    path: paths.profile,
    element: (
      <AuthGuard>
        <Profile />
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
    element: <Notifications />,
  },
  { path: "*", element: <Navigate to="/404" replace /> },
];

export * from "./paths";
