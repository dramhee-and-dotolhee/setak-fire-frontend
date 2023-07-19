import StyledInput from "../../common/StyledInput";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import StyledLabel from "../../common/StyledLabel";
import { BlockButton } from "../../common/StyledButton";
import http from "../../../api/http";


function Account() {

  const {register, handleSubmit, formState: {errors}, watch} = useForm({
    defaultValues: {
      username: null,
      password: null,
      passwordConfirm: null,
      role: 'CUSTOMER',
    }, mode: "onChange"
  } );

  // const onSubmit = (data:any) => {
  //   console.log(data);
  //   console.log(location);
  //   navigate('../1')
  //   console.log(typeof outletOnSubmit)
  // }

  const outletOnSubmit: any = useOutletContext();



  // const registerAndNext = (data:any) => {
  //   http
  //     .post('/register', data)
  //     .then((res) => {
  //       console.log(res);
  //       return res;
  //     })
  //     .then(() => outletOnSubmit(data))
  // }


  return (
    <form
      onSubmit={handleSubmit((data) => outletOnSubmit({ userInfo: data }))}
      style={{
        display:'flex',
        flexDirection: 'column'
      }}
    >
      <StyledLabel htmlFor='username'>아이디</StyledLabel>
      <StyledInput
        {...register('username', {
          required: '필수 항목입니다.',
          pattern: {
            value: /^(?=.*[a-z])[a-z0-9]+$/,
            message: '아이디는 영문과 숫자만 입력 가능합니다.',
          },
        })}
        type='text'
        id='username'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      {errors.username && <span style={{color: "red", fontSize:"small"}}>{errors.username.message}</span>}

      <StyledLabel htmlFor='password'>비밀번호</StyledLabel>
      <StyledInput
        {...register('password', {
          required: '필수 항목입니다.',
          minLength: {
            value: 6,
            message: '6자리 이상 입력해주세요.',
          },
        })}
        type='password'
        id='password'
        placeholder="비밀번호를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      {errors.password && <span style={{color: "red", fontSize:"small"}}>{errors.password.message}</span>}

      <StyledLabel htmlFor='passwordConfirm'>비밀번호 확인</StyledLabel>
      <StyledInput
        {...register('passwordConfirm', {
          required: '필수 항목입니다.',
          validate: (value) =>
            value === watch('password') || '비밀번호가 일치하지 않습니다.',
        })}
        type='password'
        id='passwordConfirm'
        placeholder="비밀번호를 다시 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      {errors.passwordConfirm && <span style={{color: "red", fontSize:"small"}}>{errors.passwordConfirm.message}</span>}

      <BlockButton type="submit">
        다음
      </BlockButton>
    </form>
  )
}

export default Account;
