import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { paths } from "./paths";
import AuthGuard from "@/auth/guard/auth-guard";

// since we are having a PWAs, we can remove the lazy loading
import Lead from "@/pages/lead";
import Home from "@/pages/home";
import Login from "@/pages/auth/login";
import Logout from "@/pages/auth/logout";
import ResetPassword from "@/pages/auth/reset-password";
import Profile from "@/pages/profile/profile";
import Notifications from "@/pages/notifications";
import Welcome from "@/pages/welcome";
import Application from "@/pages/application";

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
  { path: "/404", element: <h1>404</h1> },
  { path: "*", element: <Navigate to="/404" replace /> },
];

export * from "./paths";
