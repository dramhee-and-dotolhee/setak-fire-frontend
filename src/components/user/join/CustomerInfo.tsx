import { Button } from "antd-mobile";
import StyledInput from "../../common/StyledInput";
import { useRecoilState } from "recoil";
import { customerState } from "../../../recoil/atoms";
import { useForm } from "react-hook-form";
import NewCustomer from "../../../global/interfaces/NewCustomer";

function CustomerInfo () {

  // Recoil 값 가져오기
  const [customer, setCustomer] = useRecoilState(customerState);


  // react - hook -form
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: Partial<NewCustomer>) => {
    setCustomer(prevCustomer => ({
      ...prevCustomer,
      ...data
    }));
    console.log(data);
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor='name'>이름</label>
      <StyledInput
        {...register('name', {
          required: '필수 항목입니다.',
          validate: {}
        })}
        type='text'
        id='name'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      <span>{errors?.howToEnter?.message as string}</span>

      <label htmlFor='phoneNumber'>휴대전화번호</label>
      <StyledInput
        {...register('phoneNumber', {
          required: '필수 항목입니다.',
          validate: {}
        })}
        type='text'
        id='phoneNumber'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />

      <Button block color='primary' size='large' type="submit">
        다음
      </Button>

    </form>
      <button onClick={() => console.log(customer)}>확인용</button>
    </>
  )
}

export default CustomerInfo;
