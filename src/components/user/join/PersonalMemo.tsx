import { Button } from "antd-mobile";
import { useForm } from "react-hook-form";
import StyledInput from "../../common/StyledInput";
import { useRecoilState } from "recoil";
import { customerState } from "../../../recoil/atoms";
import { useNavigate, useOutletContext } from "react-router-dom";


function PersonalMemo () {

  // useNavigate
  const navigate = useNavigate();

  // Recoil 값 가져오기
  const [customer, setCustomer] = useRecoilState(customerState);

  // react - hook -form
  const {register, handleSubmit, formState: { errors } } = useForm();

  // const onSubmit = (data: Partial<NewCustomer>) => {
  //   setCustomer(prevCustomer => ({
  //     ...prevCustomer,
  //     ...data
  //   }));
  //   console.log(data);
  //
  //   navigate('..')
  //
  // }

  const outletOnSubmit:any = useOutletContext();


  return (
    <>
    <form onSubmit={handleSubmit(outletOnSubmit)}>

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

      <Button block color='primary' size='large' onClick={() => navigate('../2')}>
        이전
      </Button>
      <Button block color='primary' size='large' type="submit">
        가입하기
      </Button>

    </form>

      <button onClick={() => console.log(customer)}>확인용</button>
    </>
  )
}

export default PersonalMemo;
