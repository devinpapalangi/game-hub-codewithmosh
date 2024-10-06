import { createBrowserRouter } from "react-router-dom";
import NavSideLayout from "../layouts/nav-side-layout";
import HomePage from "../pages/home";
import { NavOnlyLayout } from "../layouts/nav-only-layout";
import UserDetail from "../pages/user-detail";
import ErrorPage from "../pages/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavSideLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/users",
    element: <NavOnlyLayout />,
    children: [
      {
        path: ":id",
        element: <UserDetail />,
      },
    ],
  },
]);

export default router;
