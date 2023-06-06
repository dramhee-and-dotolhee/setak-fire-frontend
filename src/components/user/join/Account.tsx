import { Form } from "antd-mobile";
import SFFInput from "../../common/Input";

function Account () {
  return (
    <Form>
      <label htmlFor='userName'>아이디</label>
      <SFFInput
        type='text'
        id='userName'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      <label htmlFor='password'>비밀번호</label>
      <SFFInput
        type='text'
        id='password'
        placeholder="비밀번호를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
      <label htmlFor='passwordConfirm'>비밀번호 확인</label>
      <SFFInput
        type='text'
        id='passwordConfirm'
        placeholder="비밀번호를 다시 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />
    </Form>
  )
}

export default Account;
