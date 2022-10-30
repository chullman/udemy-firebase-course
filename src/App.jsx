import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Login from "./routes/Login";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import StateContext from "./utils/StateContext";
import { useReducer } from "react";
import reducer from "./utils/StateReducer";

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
  const initialState = {
    user: null,
  };

  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <RouterProvider router={router} />
    </StateContext.Provider>
  );
}

export default App;
