import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";

const routes: RouteObject[] = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <AuthPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
