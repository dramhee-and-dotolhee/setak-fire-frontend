import http from "../../api/http";
import NewCustomer from "../../global/interfaces/NewCustomer";

const CustomerService = {

  /* 참고항목:
  * https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord
  * */

  create: (newCustomer: NewCustomer) => {
    return http
      .get('https://dapi.kakao.com/v2/local/search/address.json', {
        params: {query: newCustomer.address1},
        headers: {
          // 이렇게 하면 헤더 기존에  http 모듈에 세팅해놓은게 다 날라가서, 전개로 하는법 찾아야함.
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_KEY}`
        }
      })
      .then((res) => console.log('확인---',res.data))
      .then(() => {
        http
          .post('/customers', newCustomer)
      })
    }
}

export default CustomerService;
