import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "../styles/App.css";

const App = () => {
  return (
    <>
      <div className="appMainDiv">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
