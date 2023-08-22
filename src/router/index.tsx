import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import ProtectedRoute from "./ProtectedRoute";
import { Layout } from "../components";

const routes: RouteObject[] = [
  {
    path: "/home",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <AuthPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
