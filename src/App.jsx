import "bootstrap/dist/css/bootstrap.min.css";
import FirebaseAuthState from "./components/FirebaseAuthState";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StateContext } from "./utils/StateContext";
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
      <FirebaseAuthState />
      <RouterProvider router={router} />
    </StateContext.Provider>
  );
}

export default App;
