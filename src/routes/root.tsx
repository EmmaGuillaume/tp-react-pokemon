import { createBrowserRouter } from "react-router-dom";
import Article from "../pages/article";
import ErrorPage from "../pages/404";
import App from "../pages/App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/article",
    element: <Article />,
    errorElement: <ErrorPage />
  },
]);

export default router;
