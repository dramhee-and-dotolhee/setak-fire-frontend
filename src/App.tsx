import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/home/NavBar";
function App() {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;
