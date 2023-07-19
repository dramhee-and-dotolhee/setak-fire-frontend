import http from "../../api/http";
import NewCustomer from "../../global/interfaces/NewCustomer";
import { useRecoilState } from "recoil";
import { customerState } from "../../recoil/atoms";

const CustomerService = {

  /* 참고항목:
  * https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord
  * */

  create: (newCustomer: NewCustomer) => {
    return http
      .post('/customers', newCustomer)
  }
}

export default CustomerService;
