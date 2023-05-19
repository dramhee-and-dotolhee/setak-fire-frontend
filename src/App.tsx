import React from "react";
import { Outlet } from "react-router-dom";
import Bottom from "./components/home/Bottom";
import Shop from "./components/shop/Shop";


function App() {
  return (
    <>
      <Shop />
      <Outlet />
      <Bottom />
    </>
  );
}

export default App;
