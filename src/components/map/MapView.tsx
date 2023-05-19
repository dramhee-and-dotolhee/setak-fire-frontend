import React, {useEffect} from 'react';

declare global {
  interface Window {
    // window가 kakao의 타입을 모르기 때문에 any로 지정
    kakao: any;
  }
}

const MapView = () => {
  useEffect(() => {
    /** 진입시, head 태그안에 아래 스크립트 태그 append
     이렇게 안하고, index.html <head>안에 직접 추가 가능
     <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=%REACT_APP_KAKAO_API_JS_KEY%"/>
     추가해도 됨
     **/
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_JS_KEY}&autoload=false`;
    document.head.appendChild(mapScript);

    // 중심 세팅해서 카카오맵을 화면에 로드하는 함수
    const loadKakaoMap = () => {
      window.kakao.maps.load(() => {
        let container = document.getElementById("map")
        let options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        };
        // container안에 해당 options로 맵 객체 생성
        let map = new window.kakao.maps.Map(container, options);
      })
    }

    // mapScript가 로드될때, 카카오맵을 로드하는 함수 실행
    mapScript.addEventListener("load", loadKakaoMap);
  }, []);
  return (
    <div style={{ display: 'flex', height: '30vh' }}>
      <div id="map" style={{ flex: 1, margin: '2rem' }}/>
    </div>
  );
}

export default MapView