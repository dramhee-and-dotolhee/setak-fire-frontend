import StyledInput from "../../common/StyledInput";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import StyledLabel from "../../common/StyledLabel";
import { BlockButton, LineButton } from "../../common/StyledButton";

function CustomerInfo() {

  // useNavigate
  const navigate = useNavigate();

  // react - hooks -form
  const {register, handleSubmit, formState: {errors}} = useForm();

  // const onSubmit = (data: Partial<NewCustomer>) => {
  //
  //   // 휴대폰번호 공백 및 하이픈 제거
  //   data.phoneNumber = data.phoneNumber?.trim().replace(/-/g, '');
  //
  //   setCustomer(prevCustomer => ({
  //     ...prevCustomer,
  //     ...data,
  //   }));
  //
  //   console.log(data);
  //
  //   navigate('../2');
  // }

  const outletOnSubmit: any = useOutletContext();

  return (
    <>
      <form
        onSubmit={handleSubmit(outletOnSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >

        <StyledLabel htmlFor='name'>이름</StyledLabel>
        <StyledInput
          {...register('name', {
            required: '필수 항목입니다.',
            minLength: {value: 2, message: '이름은 최소 2자 이상이어야 합니다.'},
            maxLength: {value: 10, message: '이름은 최대 10자까지 허용됩니다.'},
          })}
          type='text'
          id='name'
          placeholder="아이디를 입력해주세요"
          borderWidth="1px solid black"
          width="100%"
        />
        <span>{errors?.name?.message as string}</span>

        <StyledLabel htmlFor='phoneNumber'>휴대전화번호</StyledLabel>
        <StyledInput
          {...register('phoneNumber', {
            required: '필수 항목입니다.',
            pattern: {
              value: /^\d{3}-\d{3,4}-\d{4}$/,
              message: '올바른 휴대전화번호 형식을 입력해주세요. (XXX-XXXX-XXXX)',
            },
          })}
          type='text'
          id='phoneNumber'
          placeholder="아이디를 입력해주세요"
          borderWidth="1px solid black"
          width="100%"
        />
        <span>{errors?.phoneNumber?.message as string}</span>

        <BlockButton type="submit">
          다음
        </BlockButton>
        <LineButton onClick={() => navigate('../0')}>
          이전
        </LineButton>
      </form>
    </>
  )
}

export default CustomerInfo;
