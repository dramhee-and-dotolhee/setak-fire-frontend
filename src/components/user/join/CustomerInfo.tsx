import { Button } from "antd-mobile";
import StyledInput from "../../common/StyledInput";
import { useRecoilState } from "recoil";
import { customerState } from "../../../recoil/atoms";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";

function CustomerInfo () {

  // useNavigate
  const navigate = useNavigate();

  // Recoil 값 가져오기
  const [customer, setCustomer] = useRecoilState(customerState);


  // react - hook -form
  const {register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = (data: Partial<NewCustomer>) => {
  //
  //   // 휴대폰번호 공백 및 하이픈 제거
  //   data.phoneNumber = data.phoneNumber?.trim().replace(/-/g, '');
  //
  //   setCustomer(prevCustomer => ({
  //     ...prevCustomer,
  //     ...data,
  //   }));
  //
  //   console.log(data);
  //
  //   navigate('../2');
  // }

  const outletOnSubmit:any = useOutletContext();

  return (
    <>
    <form onSubmit={handleSubmit(outletOnSubmit)}>

      <label htmlFor='name'>이름</label>
      <StyledInput
        {...register('name', {
          required: '필수 항목입니다.',
          minLength: { value: 2, message: '이름은 최소 2자 이상이어야 합니다.' },
          maxLength: { value: 10, message: '이름은 최대 10자까지 허용됩니다.' },
        })}
        type='text'
        id='name'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      <span>{errors?.name?.message as string}</span>

      <label htmlFor='phoneNumber'>휴대전화번호</label>
      <StyledInput
        {...register('phoneNumber', {
          required: '필수 항목입니다.',
          pattern: {
            value: /^\d{3}-\d{3,4}-\d{4}$/,
            message: '올바른 휴대전화번호 형식을 입력해주세요. (XXX-XXXX-XXXX)',
          },
        })}
        type='text'
        id='phoneNumber'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      <span>{errors?.phoneNumber?.message as string}</span>

      <Button block color='primary' size='large' onClick={() => navigate('../0')}>
        이전
      </Button>
      <Button block color='primary' size='large' type="submit">
        다음
      </Button>


    </form>
      <button onClick={() => console.log(customer)}>확인용</button>
    </>
  )
}

export default CustomerInfo;
