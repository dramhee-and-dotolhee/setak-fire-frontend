import {Card, Image, Swiper} from "antd-mobile";
import ShopData from "../../global/interfaces/ShopData";
import ShopInfoBox from "./ShopInfoBox";
import MapView from "../map/MapView";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { shopState } from "../../recoil/atoms";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import http from "../../api/http";
import ShopService from "./index";


function Shop() {


  // shop list 상태 관리
  const [shopList, setShopList] = useRecoilState<ShopData[]>(shopState);

  // api 주소
  const apiHost: string | undefined = process.env.REACT_APP_API_HOST_URL;

  // const getShopList = () => {
  //   return http
  //     .get('/shops')
  //     .then((res) => {
  //       console.log(res.data)
  //       setShopList(res.data)
  //     })
  // }

  const { isLoading, error, data } = useQuery(
    ['shopList'],
    async () => {
      const res = await ShopService.list();
      setShopList(res);
    }
);

  return (
    <div style={{backgroundColor: 'blue'}}>
      <MapView />

      {isLoading ? <p>loading...</p> : null }
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1 style={{flex: 1, margin: '2rem'}}>현 위치</h1>
        {
          shopList.length && shopList.map(shop =>
            <Card
              key={shop.id}
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
                  {shop.imageUrls.map((imageUrl, i) =>
                    <Swiper.Item key={i}>
                      {<Image src={imageUrl} width={90} style={{margin: '0 auto'}}/>}
                    </Swiper.Item>
                  )}
                </Swiper>
              </div>
              <ShopInfoBox shop={shop} />
            </Card>
          )
        }
      </div>
    </div>
  )
}

export default Shop;
