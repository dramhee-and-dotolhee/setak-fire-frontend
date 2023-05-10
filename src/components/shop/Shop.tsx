import { Card } from "antd";
import Meta from "antd/es/card/Meta";

interface Data {
  name: String,
  address: String,
  distance: Number,
}
function Shop() {
  const data: Data[] = [
    {
      name: "세탁소1",
      address: "서울시 성북구 돈암동 세탁소로1길",
      distance: 0.3,
    },
    {
      name: "세탁소2",
      address: "서울시 성북구 돈암동 세탁소로1길",
      distance: 0.3,
    },
    {
      name: "세탁소3",
      address: "서울시 성북구 돈암동 세탁소로1길",
      distance: 0.3,
    },
    {
      name: "세탁소4",
      address: "서울시 성북구 돈암동 세탁소로1길",
      distance: 0.345,
    },
  ]

  return (
    <>
      {
        data.map(item =>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        )
      }
    </>
  );
}

export default Shop;
