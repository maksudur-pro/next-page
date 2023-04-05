import React from "react";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
