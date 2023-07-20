import StyledLabel from "../../common/StyledLabel";
import StyledInput from "../../common/StyledInput";
import { BlockButton } from "../../common/StyledButton";

function Login () {

  const handleSubmit =(e: any) => {
    e.preventDefault();
    console.log('로그인!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", }}
    >
      <StyledLabel htmlFor='username'>아이디</StyledLabel>
      <StyledInput
        type='text'
        id='username'
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
