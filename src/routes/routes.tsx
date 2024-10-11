import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import UserDetail from "../pages/user-detail";
import ErrorPage from "../pages/error-page";
import GameDetail from "../pages/game-detail";
import Layout from "../layouts/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/users/:id",
        element: <UserDetail />,
      },
      {
        path: "/games/:slug",
        element: <GameDetail />,
      },
    ],
  },
]);

export default router;
