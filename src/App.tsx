import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Bottom from "./components/home/Bottom";
import 'pretendard/dist/web/static/pretendard.css'
import Splash from "./components/common/Splash";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  }, [])

  return (
    <div style={{paddingBottom: '3rem', backgroundColor: 'white'}}>
      {loading ? <Splash/> : <Outlet/>}
      <Bottom/>
    </div>
  );
}

export default App;
