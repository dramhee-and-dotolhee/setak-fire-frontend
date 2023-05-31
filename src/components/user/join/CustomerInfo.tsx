import {Button, Form, Input} from "antd-mobile";

function CustomerInfo () {
  return (
    <Form>
      <Form.Item name='name' label='이름' rules={[{ required: true }]}>
        <Input placeholder='이름 입력해주세요' />
      </Form.Item>
      <Form.Item name='phoneNumber' label='휴대폰 번호' rules={[{ required: true }]}>
        <Input placeholder='휴대폰번호를 입력해주세요' />
      </Form.Item>
      <Button block color='primary' size='large'>
        다음
      </Button>
    </Form>
  )
}

export default CustomerInfo;
