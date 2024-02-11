import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";
import GameDetailPage from "../pages/GameDetailPage";
import ErrorMessagePage from "../pages/ErrorMessagePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorMessagePage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);
export default router;
