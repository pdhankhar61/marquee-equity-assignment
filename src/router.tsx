import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AuthGuard from "./guards/AuthGuard";
import { ReactElement } from "react";

const routes = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <AuthGuard>
          <DashboardPage />
        </AuthGuard>
      </>
    ),
  },
];

export const router = createBrowserRouter(routes);
