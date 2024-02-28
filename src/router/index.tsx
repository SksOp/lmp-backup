import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { paths } from "./paths";
import AuthGuard from "@/auth/guard/auth-guard";

const Home = React.lazy(() => import("@/pages/home"));
const Login = React.lazy(() => import("@/pages/auth/login"));
const Application = React.lazy(() => import("@/pages/application"));
const Logout = React.lazy(() => import("@/pages/auth/logout"));

export default function Router() {
  return useRoutes([...root]);
}

const root = [
  {
    path: paths.root,
    element: (
      <AuthGuard>
        <Home />
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
    path: paths.application,
    element: <Application />,
  },
  { path: "*", element: <Navigate to="/404" replace /> },
];

export * from "./paths";
