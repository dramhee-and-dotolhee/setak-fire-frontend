import React, {useEffect} from "react";


declare global {
  interface Window {
    // window가 kakao의 타입을 모르기 때문에 any로 지정
    kakao: any;
  }
}


function MapView() {

  // MapView component에 들어오면 index.html에 script 추가
  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_JS_KEY}&autoload=false`
    document.head.appendChild(mapScript);

    const loadMap = () => {
      window.kakao.maps.load(() => {
          let container = document.getElementById('map');
          let options = {
            // 지도 생성에 필요한 기본 옵션
            center: new window.kakao.maps.LatLng(37.541, 126.986),
            level: 5
          }

          let map = new window.kakao.maps.Map(container, options)
        }
      )
    }

    mapScript.addEventListener('load', loadMap);

    return () => {
      document.head.removeChild(mapScript);
    };
  }, [])


  return (
    <div style={{ display: 'flex', height: '30vh' }}>
      <div id="map" style={{ flex: 1, margin: '2rem' }}/>
    </div>
  )
}

export default MapView;
