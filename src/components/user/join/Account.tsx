import { Button } from "antd-mobile";
import StyledInput from "../../common/StyledInput";
import {useForm} from "react-hook-form";
import { useOutletContext } from "react-router-dom";


function Account () {

  const { register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = (data:any) => {
  //   console.log(data);
  //   console.log(location);
  //   navigate('../1')
  //   console.log(typeof outletOnSubmit)
  // }

  const outletOnSubmit:any = useOutletContext();

  return (
    <form onSubmit={handleSubmit((data) => outletOnSubmit(data))}>
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
