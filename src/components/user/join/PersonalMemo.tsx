import { useForm } from "react-hook-form";
import StyledInput from "../../common/StyledInput";
import { useRecoilState } from "recoil";
import { customerState } from "../../../recoil/atoms";
import { useNavigate, useOutletContext } from "react-router-dom";
import StyledLabel from "../../common/StyledLabel";
import {BlockButton, LineButton} from "../../common/StyledButton";
import React from "react";


function PersonalMemo () {

  // useNavigate
  const navigate = useNavigate();

  // Recoil 값 가져오기
  const [customer, setCustomer] = useRecoilState(customerState);

  // react - hooks -form
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
    <form
      onSubmit={handleSubmit(outletOnSubmit)}
      style={{
        display:'flex',
        flexDirection: 'column'
      }}
    >

        <StyledLabel htmlFor="howToEnter">출입방법</StyledLabel>
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

        <StyledLabel htmlFor="howToEnter">요청사항</StyledLabel>
        <StyledInput
          {...register('requirementMemo')}
          type="text"
          id="requirementMemo"
          placeholder="요청사항을 입력해주세요"
          borderWidth="1px solid black"
          width="100%"
          required={true}
        />

        <StyledLabel htmlFor="howToEnter">메모</StyledLabel>
        <StyledInput
          {...register('memo')}
          type="text"
          id="memo"
          placeholder="메모를 입력해주세요"
          borderWidth="1px solid black"
          width="100%"
          required={true}
        />

      <BlockButton type="submit">
        가입하기
      </BlockButton>
      <LineButton onClick={() => navigate('../2')}>
        이전
      </LineButton>

    </form>

      <button onClick={() => console.log(customer)}>확인용</button>
    </>
  )
}

export default PersonalMemo;
