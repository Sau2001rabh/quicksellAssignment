import { useEffect } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Nav from "./Components/Nav";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-js-loader";
import { fetchData } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);
  // const tickets = "";
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log(tickets);
  return (
    <>
      {!tickets ? (
        <div className="app-item">
          <Loader
            type="bubble-spin"
            bgColor={"#25D366"}
            color={"#25D366"}
            size={100}
          />
        </div>
      ) : (
        <div>
          <Nav />
          <Dashboard />
        </div>
      )}
    </>
  );
}

export default App;
