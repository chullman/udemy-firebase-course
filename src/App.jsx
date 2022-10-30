import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Login from "./routes/Login";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
