import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { customerState } from "../../../recoil/atoms";
import NewCustomer from "../../../global/interfaces/NewCustomer";
import { useCreateCustomer } from "../../../hooks/useCreateCustomer";


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
  const outletOnSubmit = (data: Partial<NewCustomer>) => {

    // 확인용
    console.log(data);

    // formdata에 phoneNumber가 존재 할 때,
    if (data.phoneNumber) {
      // 핸드폰번호 - 빼고 string으로 변경
      data.phoneNumber = data.phoneNumber?.trim().replace(/-/g, '');
    }

    // formdata에 의해서 추가, 변경될 데이터 recoil(customerState)에 저장
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      ...data,
    }));

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
