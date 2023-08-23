import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import { HomePage, AuthPage, PostPage } from "../pages";
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
      {
        path: "/home/post/:id",
        element: (
          <ProtectedRoute>
            <PostPage />
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
