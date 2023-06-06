import { Button } from "antd-mobile";
import { useForm } from "react-hook-form";
import StyledInput from "../../common/Input.style";


function PersonalInfo () {

  // input common 컴포넌트로 만들기

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit ={handleSubmit(onSubmit)}>

        <label htmlFor="howToEnter">출입방법</label>
        <StyledInput
          {...register('howToEnter', {
            required: '필수 항목입니다',
            validate: {}
          })}
          type="text"
          id="howToEnter"
          placeholder="출입방법을 입력해주세요"
          borderWidth="1px solid black"
          width="100%"
          required={true}
        />
      <span>{errors?.howToEnter?.message as string}</span>

        <label htmlFor="howToEnter">요청사항</label>
        <StyledInput
          {...register('requirementMemo')}
          type="text"
          id="requirementMemo"
          placeholder="요청사항을 입력해주세요"
          borderWidth="1px solid black"
          width="100%"
          required={true}
        />

        <label htmlFor="howToEnter">메모</label>
        <StyledInput
          {...register('memo')}
          type="text"
          id="memo"
          placeholder="메모를 입력해주세요"
          borderWidth="1px solid black"
          width="100%"
          required={true}
        />

      <Button block color='primary' size='large' type="submit">
        가입하기
      </Button>

    </form>
  )
}

export default PersonalInfo;
