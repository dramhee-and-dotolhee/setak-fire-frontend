import { Card, Swiper } from "antd-mobile";

interface Data {
  id: number,
  name: string,
  imageUrls: string[],
  partnerId: number,
  isAvailableDelivery: boolean,
  categoryTypes: string[],
  minimumCharge: number,
  minimumUnit: number,
  deliveryCharge: number,
  address: string,
  createdAt: string,
  updateAt: string,
  x: number,
  y: number
}

function Shop() {
  const data: Data[] = [
    {
      "id": 1,
      "name": "불세탁람쥐",
      "imageUrls": [
        "https://cdn-icons-png.flaticon.com/256/3322/3322056.png",
        "https://cdn-icons-png.flaticon.com/256/7029/7029382.png"
      ],
      "partnerId": 1,
      "isAvailableDelivery": true,
      "categoryTypes": [
        "CLEANING"
      ],
      "minimumCharge": 5000,
      "minimumUnit": 1,
      "deliveryCharge": 1000,
      "address": "서울시 성북구 아리랑로 75",
      "createdAt": "2023-05-12T00:01:37.402+09:00",
      "updateAt": "2023-05-12T00:01:37.402+09:00",
      "x": 100.0,
      "y": 1000.0
    },
    {
      "id": 2,
      "name": "세탁왕이정준",
      "imageUrls": [
        "https://cdn-icons-png.flaticon.com/256/3322/3322056.png",
        "https://cdn-icons-png.flaticon.com/256/7029/7029382.png"
      ],
      "partnerId": 2,
      "isAvailableDelivery": true,
      "categoryTypes": [
        "CLEANING"
      ],
      "minimumCharge": 5000,
      "minimumUnit": 1,
      "deliveryCharge": 1000,
      "address": "서울시 헌릉로 8길 45",
      "createdAt": "2023-05-12T00:16:02.168+09:00",
      "updateAt": "2023-05-12T00:16:02.168+09:00",
      "x": 100.0,
      "y": 1000.0
    },
    {
      "id": 3,
      "name": "찐세탁람쥐",
      "imageUrls": [
        "https://cdn-icons-png.flaticon.com/256/3322/3322056.png",
        "https://cdn-icons-png.flaticon.com/256/7029/7029382.png"
      ],
      "partnerId": 3,
      "isAvailableDelivery": true,
      "categoryTypes": [
        "CLEANING"
      ],
      "minimumCharge": 5000,
      "minimumUnit": 1,
      "deliveryCharge": 1000,
      "address": "서울시 성북구 아리랑로 75",
      "createdAt": "2023-05-12T00:16:02.168+09:00",
      "updateAt": "2023-05-12T00:16:02.168+09:00",
      "x": 100.0,
      "y": 1000.0
    },
    {
      "id": 4,
      "name": "쫄세탁람쥐",
      "imageUrls": [
        "https://cdn-icons-png.flaticon.com/256/3322/3322056.png",
        "https://cdn-icons-png.flaticon.com/256/7029/7029382.png"
      ],
      "partnerId": 4,
      "isAvailableDelivery": true,
      "categoryTypes": [
        "CLEANING"
      ],
      "minimumCharge": 5000,
      "minimumUnit": 15,
      "deliveryCharge": 1000,
      "address": "서울시 쫄다람쥐로 60",
      "createdAt": "2023-05-12T00:16:02.168+09:00",
      "updateAt": "2023-05-12T00:16:02.168+09:00",
      "x": 100.0,
      "y": 1000.0
    }
  ]

  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>현 위치</h1>
      {
        data.map(item =>
          <Card
            bodyStyle={{ padding: '10px', margin: '10px', display: 'flex', flexDirection: 'row' }}
          >
            <div style = {{ width:'50%' }}>
              <Swiper
                stuckAtBoundary={false}
                slideSize={100}
                defaultIndex={0}
                autoplay
                autoplayInterval={1500}
                loop
              >
                {item.imageUrls.map(imageUrl =>
                <Swiper.Item>
                  {<img src={imageUrl} alt = "laundryImage" style={{ width: '80%' }}/>}
                </Swiper.Item>
                )}
              </Swiper>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
              <p>거리 : {item.deliveryCharge}</p>
              <p>수거비용 : {item.deliveryCharge}</p>
              <p>항목 : {item.categoryTypes}</p>
              <p>최소비용 : {item.minimumCharge}</p>
              <p>수거비용 : {item.deliveryCharge}</p>
            </div>
          </Card>
        )
      }
    </div>
  );
}

export default Shop;
