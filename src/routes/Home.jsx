import { useGlobalState } from "../utils/StateContext";

const Home = () => {
  const { store, dispatch } = useGlobalState();

  return (
    <>
      <h1>Home page</h1>
      {JSON.stringify(store)}
    </>
  );
};

export default Home;
