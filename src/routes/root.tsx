import { createBrowserRouter } from "react-router-dom";
import Pokemon from "../pages/DetailsPokemon";
import ErrorPage from "../pages/404";
import Home from "../pages/Home";
import App from "../App";
import Terms from "../pages/terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pokemon/:id",
        element: <Pokemon />,
      },
      {
        path: "/terms",
        element: <Terms />,
      }
    ],
  },
]);

export default router;
