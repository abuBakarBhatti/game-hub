import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "../pages/Layout";
import GameDetailPage from "./GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);
export default router;