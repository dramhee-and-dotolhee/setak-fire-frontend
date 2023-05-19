import React from "react";
import { Outlet } from "react-router-dom";
import Bottom from "./components/home/Bottom";

function App() {
  return (
    <div style={{ paddingBottom: '3rem', backgroundColor: 'lightblue'}}>
      <Outlet />
      <Bottom />
    </div>
  );
}

export default App;
