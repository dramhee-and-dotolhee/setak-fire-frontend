import React from "react";
import { Outlet } from "react-router-dom";
import Bottom from "./components/home/Bottom";
import 'pretendard/dist/web/static/pretendard.css'

function App() {
  return (
    <div style={{paddingBottom: '3rem', backgroundColor: 'white', fontFamily: 'Pretendard'}}>
      <Outlet/>
      <Bottom/>
    </div>
  );
}

export default App;
