import React from "react";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};

export default App;
