import {Card, Image, Swiper} from "antd-mobile";
import ShopData from "../../interfaces/ShopData";
import ShopInfoBox from "./ShopInfoBox";
import MapView from "../map/MapView";


function Shop() {

  // API 호출 (임시 데이터)
  const data: ShopData[] = [
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
      "isAvailableDelivery": false,
      "categoryTypes": [
        "CLEANING", "REFORM", "MENDING"
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
        "CLEANING", "PREMIUM"
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
        "CLEANING", "MENDING",
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
    <div style={{backgroundColor: 'blue'}}>
      <MapView/>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1 style={{flex: 1, margin: '2rem'}}>현 위치</h1>
        {
          data.map(shop =>
            <Card
              title={shop.name}
              style={{flex: 1, margin: '2rem'}}
              bodyStyle={{padding: '2rem', display: 'flex', flexDirection: 'row'}}
            >
              <div style={{width: '30%', alignSelf: 'center'}}>
                <Swiper
                  stuckAtBoundary={false}
                  slideSize={100}
                  defaultIndex={0}
                  autoplay
                  autoplayInterval={1500}
                  indicator={() => null}
                  loop
                >
                  {shop.imageUrls.map(imageUrl =>
                    <Swiper.Item>
                      {<Image src={imageUrl} width={90} style={{margin: '0 auto'}}/>}
                    </Swiper.Item>
                  )}
                </Swiper>
              </div>
              <ShopInfoBox shop={shop}/>
            </Card>
          )
        }
      </div>
    </div>
  )
}

export default Shop;
