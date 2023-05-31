import {Button, Form, Input} from "antd-mobile";

function Account () {
  return (
    <Form>
      <Form.Item name='userName' label='아이디' rules={[{ required: true }]}>
        <Input placeholder='사용하실 아이디를 입력해주세요' />
      </Form.Item>
      <Form.Item name='password' label='비밀번호' rules={[{ required: true }]}>
        <Input placeholder='비밀번호를 입력해주세요' />
      </Form.Item>
      <Form.Item name='passwordConfirm' label='비밀번호 확인' rules={[{ required: true }]}>
        <Input placeholder='비밀번호를 다시 입력해주세요' />
      </Form.Item>
      <Button block color='primary' size='large'>
        다음
      </Button>
    </Form>
  )
}

export default Account;
