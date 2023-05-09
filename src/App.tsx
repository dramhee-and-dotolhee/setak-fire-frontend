import React from "react";
import { Row, Typography } from "antd";
import SkeletonAvatar from "antd/es/skeleton/Avatar";

interface Data {
  name: String,
  address: String,
  distance: Number,
}
function App() {
  const data: Data[] = [
    {
      name: "세탁소1",
      address: "서울시 성북구 돈암동 세탁소로1길",
      distance: 0.3,
    },
    {
      name: "세탁소1",
      address: "서울시 성북구 돈암동 세탁소로1길",
      distance: 0.3,
    },
    {
      name: "세탁소1",
      address: "서울시 성북구 돈암동 세탁소로1길",
      distance: 0.3,
    },
    {
      name: "세탁소1",
      address: "서울시 성북구 돈암동 세탁소로1길",
      distance: 0.345,
    },
  ]

  return (
    <>
      {
        data.map(item =>
          <Row>
            <SkeletonAvatar/>
            <Typography>{item.name}</Typography>
            <Typography>{item.address}</Typography>
          </Row>
        )
      }
    </>
  );
}

export default App;
