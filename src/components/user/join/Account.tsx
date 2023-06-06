import {Button, Form} from "antd-mobile";
import StyledInput from "../../common/Input.style";

function Account () {
  return (
    <Form>
      <label htmlFor='userName'>아이디</label>
      <StyledInput
        type='text'
        id='userName'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      <label htmlFor='password'>비밀번호</label>
      <StyledInput
        type='text'
        id='password'
        placeholder="비밀번호를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      <label htmlFor='passwordConfirm'>비밀번호 확인</label>
      <StyledInput
        type='text'
        id='passwordConfirm'
        placeholder="비밀번호를 다시 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />

      <Button block color='primary' size='large' type="submit">
        다음
      </Button>

    </Form>
  )
}

export default Account;
