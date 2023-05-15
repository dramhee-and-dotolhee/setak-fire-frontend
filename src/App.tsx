import React from "react";
import { Outlet } from "react-router-dom";
import Bottom from "./components/home/Bottom";


function App() {
  return (
    <>
      <Outlet />
      <Bottom />
    </>
  );
}

export default App;
