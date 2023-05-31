import {Button, Form, Input} from "antd-mobile";
import { useForm } from "react-hook-form";


function PersonalInfo () {

  const { register } = useForm();

  return (
    <Form>
      <Form.Item name='howToEnter' label='출입방법' rules={[{ required: true }]}>
        <Input {...register('howToEnter')} placeholder='출입방법을 입력해주세요' />
      </Form.Item>
      <Form.Item name='requirementMemo' label='요청사항' rules={[{ required: true }]}>
        <Input placeholder='요청사항을 입력해주세요' />
      </Form.Item>
      <Form.Item name='memo' label='메모' rules={[{ required: true }]}>
        <Input placeholder='메모를 입력해주세요' />
      </Form.Item>
      <Button block color='primary' size='large' type="submit" onClick={() => console.log(register)}>
        가입하기
      </Button>
    </Form>
  )
}

export default PersonalInfo;
