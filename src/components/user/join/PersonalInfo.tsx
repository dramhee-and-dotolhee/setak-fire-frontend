import {Button, Form, Input} from "antd-mobile";
import { useForm } from "react-hook-form";
import StyledInput from "../../common/StyledInput";


function PersonalInfo () {

  // input common 컴포넌트로 만들기

  const { register } = useForm();

  return (
    <Form>
      <Form.Item name='howToEnter' label='출입방법' rules={[{ required: true }]}>
        <StyledInput
          {...register('howToEnter')}
          type="text"
          id="howToEnter"
          placeholder="출입방법을 입력해주세요"
          value=""
          width="100%"
          borderWidth="1px"
          required={true}
        />
      </Form.Item>
      <Form.Item name='requirementMemo' label='요청사항' rules={[{ required: true }]}>
        <StyledInput
          {...register('requirementMemo')}
          type="text"
          id="requirementMemo"
          placeholder="요청사항을 입력해주세요"
          value=""
          width="100%"
          borderWidth="0.1px"
          required={true}
        />
      </Form.Item>
      <Form.Item name='memo' label='메모' rules={[{ required: true }]}>
        <StyledInput
          {...register('memo')}
          type="text"
          id="memo"
          placeholder="메모를 입력해주세요"
          value=""
          width="100%"
          borderWidth= "0"
          required={true}
        />
      </Form.Item>
      <Button block color='primary' size='large' type="submit" onClick={() => console.log(register)}>
        가입하기
      </Button>
    </Form>
  )
}

export default PersonalInfo;
