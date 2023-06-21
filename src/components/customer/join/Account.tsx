import StyledInput from "../../common/StyledInput";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import StyledLabel from "../../common/StyledLabel";
import { BlockButton } from "../../common/StyledButton";


function Account() {

  const {register, handleSubmit, formState: {errors}} = useForm();

  // const onSubmit = (data:any) => {
  //   console.log(data);
  //   console.log(location);
  //   navigate('../1')
  //   console.log(typeof outletOnSubmit)
  // }

  const outletOnSubmit: any = useOutletContext();

  return (
    <form
      onSubmit={handleSubmit((data) => outletOnSubmit(data))}
      style={{
        display:'flex',
        flexDirection: 'column'
      }}
    >
      <StyledLabel htmlFor='userName'>아이디</StyledLabel>
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

      <StyledLabel htmlFor='password'>비밀번호</StyledLabel>
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

      <StyledLabel htmlFor='passwordConfirm'>비밀번호 확인</StyledLabel>
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
      <BlockButton type="submit">
        다음
      </BlockButton>
    </form>
  )
}

export default Account;
