import React from "react";
import { Outlet } from "react-router-dom";
import Bottom from "./components/home/Bottom";
import * as styles from "./style/layout.css";


function App() {
  return (
    <div style={styles.app}>
      <Outlet />
      <Bottom />
    </div>
  );
}

export default App;
