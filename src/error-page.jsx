import { useRouteError } from "react-router-dom";
import Layout from "./pages/Layout";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Layout />
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
