import StyledLabel from "../../common/StyledLabel";
import StyledInput from "../../common/StyledInput";
import { BlockButton } from "../../common/StyledButton";
import { useForm } from "react-hook-form";
import http from "../../../api/http";

interface FormValue {
  id: string;
  password: string;
}

function Login () {

  const { register, handleSubmit, formState: {errors} } = useForm<FormValue>();

  const login =(body:FormValue) => {
    console.log('로그인!')

    // body에 입력값을 넣어주어야 한다


    http
      .post('/register', body)
      .then((res) => {
        console.log(res.data);
      })

  }

  return (
    <form
      onSubmit={handleSubmit(login)}
      style={{ display: "flex", flexDirection: "column", }}
    >
      <StyledLabel htmlFor='username'>아이디</StyledLabel>
      <StyledInput
        type='text'
        id='id'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      <StyledLabel htmlFor='password'>비밀번호</StyledLabel>
      <StyledInput
        type='password'
        id='password'
        placeholder="비밀번호를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      <BlockButton>로그인</BlockButton>
    </form>
  )
}

export default Login;
