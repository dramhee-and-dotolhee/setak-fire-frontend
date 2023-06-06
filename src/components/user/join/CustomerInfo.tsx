import { Button, Form } from "antd-mobile";
import StyledInput from "../../common/Input.style";

function CustomerInfo () {
  return (
    <Form>

      <label htmlFor='name'>이름</label>
      <StyledInput
        type='text'
        id='name'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />

      <label htmlFor='phoneNumber'>휴대전화번호</label>
      <StyledInput
        type='text'
        id='phoneNumber'
        placeholder="아이디를 입력해주세요"
        borderWidth="1px solid black"
        width="100%"
      />

      <Button block color='primary' size='large'>
        다음
      </Button>

    </Form>
  )
}

export default CustomerInfo;
