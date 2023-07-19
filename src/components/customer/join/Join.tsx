import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { customerState } from "../../../recoil/atoms";
import NewCustomer from "../../../global/interfaces/NewCustomer";
import { useCreateCustomer } from "../../../hooks/useCreateCustomer";
import http from "../../../api/http";


function Join() {

  // custom hooks 호출
  const createCustomer = useCreateCustomer();

  // 페이지 이동하기 위한 react-hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Recoil 값 가져오기 - form에 저장된 고객 정보
  const [customer, setCustomer] = useRecoilState<NewCustomer>(customerState);

  // 다음 버튼 클릭 시 행할 함수들
  // data는 form submit이 넘어오는 formData

  // outlet 4개 중첩된 form에 공통적으로 사용할 onSubmit을 하나로 정의해서 context로 공유
  const outletOnSubmit = (data: Partial<NewCustomer>) => {   

    // 확인용
    console.log(data);

    // formdata에 phoneNumber가 존재 할 때,
    if (data.phoneNumber) {
      // 핸드폰번호 - 빼고 string으로 변경
      data.phoneNumber = data.phoneNumber?.trim().replace(/-/g, '');
    }


    // @TODO formdata에 주소가 존재할 때, 좌표 변환
    if(data.address1) {
      http
        .get('https://dapi.kakao.com/v2/local/search/address.json', {
          params: {query: data.address1},
          headers: {...http.defaults.headers.common,
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_REST_KEY}`
          }
        })
        .then((res) => {
          console.log('확인---', res.data.documents[0].x, res.data.documents[0].y,typeof(res.data.documents[0].x))
          data.latitude = res.data.documents[0].x;
          data.longitude = res.data.documents[0].y;
          console.log('다음----',data)
          setCustomer(prevCustomer => ({
            ...prevCustomer,
            ...data,
          }));
          console.log('다음2----',customer)
        })
    }

    // formdata에 의해서 추가, 변경될 데이터 recoil(customerState)에 저장
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      ...data,
    }));
    console.log('마지막',customer)

    // 다음페이지 이동 위한 경로
    const nextDaram = parseInt(location.pathname.split('/')[2]) + 1;

    // 마지막일 때는 home으로 나머지는 다음 페이지로
    if (nextDaram > 3) {
      // data 전송
      createCustomer.mutate(customer);
      navigate('/home');
    } else {
      navigate(`/home/${nextDaram}`)
    }
  }

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: '1.5rem',
        padding: '1rem'
      }}>
        {/* outlet - outlet의 children에게 context로 내려줌 */}
        <Outlet context={outletOnSubmit}/>
      </div>
    </>
  )
}

export default Join;
