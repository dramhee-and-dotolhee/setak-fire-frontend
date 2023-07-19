import Join from "../customer/join/Join";
import { Button } from "antd-mobile";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to='/home/0'>회원가입</Link>
      <Join/>
    </>
  )
}

export default Home;
