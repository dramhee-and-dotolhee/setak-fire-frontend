import { Button } from "antd-mobile";
import StyledInput from "../../common/Input.style";
import {useForm} from "react-hook-form";
import {useRecoilState} from "recoil";
import {customerState} from "../../../recoil/atoms";

function Account () {

  const [customer, setCustomer] = useRecoilState(customerState);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='userName'>아이디</label>
      <StyledInput
        {...register('userName', {
          required: '필수 항목입니다.',
          validate: {}
        })}
        type='text'
        id='userName'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />

      <label htmlFor='password'>비밀번호</label>
      <StyledInput
        {...register('password', {
          required: '필수 항목입니다.',
          validate: {}
        })}
        type='password'
        id='password'
        placeholder="비밀번호를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />

      <label htmlFor='passwordConfirm'>비밀번호 확인</label>
      <StyledInput
        {...register('passwordConfirm', {
          required: '필수 항목입니다.',
          validate: {}
        })}
        type='password'
        id='passwordConfirm'
        placeholder="비밀번호를 다시 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />

      <Button block color='primary' size='large' type="submit">
        다음
      </Button>

    </form>
  )
}

export default Account;
