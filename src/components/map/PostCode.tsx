import React, { useEffect, useRef } from "react";
import StyledInput from "../common/StyledInput";
import { useRecoilState } from "recoil";
import { customerState } from "../../recoil/atoms";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import StyledLabel from "../common/StyledLabel";
import {BlockButton, LineButton} from "../common/StyledButton";

declare global {
  interface Window {
    daum: any
  }

  interface IAddr {
    userSelectedType: string;
    roadAddress: string;
    jibunAddress: string;
    bname: string;
    buildingName: string;
    apartment: string;
    zonecode: any;
  }
}

function createIframe(elementWrap: React.MutableRefObject<HTMLDivElement | null>, setValue: any, currentScroll: number) {
  new window.daum.Postcode({
    oncomplete: function (data: {
      userSelectedType: string;
      roadAddress: string;
      jibunAddress: string;
      bname: string;
      buildingName: string;
      apartment: string;
      zonecode: any;
    }) {
      // const extraAddrInput = document.getElementById("address3") as HTMLInputElement;
      // const postcodeInput = document.getElementById("postCode") as HTMLInputElement;
      // const addressInput = document.getElementById("address1") as HTMLInputElement;
      // const detailAddressInput = document.getElementById("address2") as HTMLInputElement;

      let addr: string = "";
      let extraAddr: string = "";

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      // 사용자가 도로명 주소를 선택했을 경우 R / 사용자가 지번 주소를 선택했을 경우(J)
      if (data.userSelectedType === "R") {
        addr = data.roadAddress;
      } else {
        addr = data.jibunAddress;
      }

      if (data.userSelectedType === "R") {
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          // @TODO 행정동을 나중에 DB에 저장해야됨
          extraAddr += data.bname;
          setValue('district', data.bname)
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr += (extraAddr !== "" ? ", " + data.buildingName : data.buildingName);
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== "") {
          extraAddr = " (" + extraAddr + ")";
        }
        setValue('address3', extraAddr); // 요소가 없을 경우 런타임 에러 발생 가능
      }

      setValue('postCode', data.zonecode);
      setValue('address1', addr);
      let addr2 = document.getElementById('address2') as HTMLInputElement;
      addr2.focus();

      // iframe을 넣은 element를 안보이게 한다.
      // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
      if (elementWrap.current) {
        elementWrap.current.style.display = "none";
      }

      // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
      document.body.scrollTop = currentScroll;
    },
    width: '100%',
    height: '100%'
  }).embed(elementWrap.current);
}

const PostCode = () => {

  // useNavigate
  const navigate = useNavigate();

  const elementWrap= useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const postCodeScript: HTMLScriptElement = document.createElement("script");
    postCodeScript.async = true;
    postCodeScript.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
    document.head.appendChild(postCodeScript);
  }, [])

  const closePostCode = (event: { preventDefault: () => void; } | undefined) => {
    if (event) {
      event.preventDefault();
    }
    if (elementWrap.current) {
      elementWrap.current.style.display = 'none';
    }
  }

  const onClickAddr = (event: { preventDefault: () => void; }) => {
    if (event) {
      event.preventDefault();
    }
    // 현재 scroll 위치를 저장해놓는다.
    if (elementWrap.current && elementWrap.current.style) {
      const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);

      const existingIframe = elementWrap.current.querySelector('iframe');
      if (!existingIframe) {
        createIframe(elementWrap, setValue, currentScroll);
      }
      elementWrap.current.style.display = "block";
    }
  }

  // Recoil 값 가져오기
  const [customer, setCustomer] = useRecoilState(customerState);

  // react - hooks -form
  const {register, handleSubmit, setValue, formState: { errors } } = useForm();

  // const onSubmit = (data: Partial<NewCustomer>) => {
  //   setCustomer(prevCustomer => ({
  //     ...prevCustomer,
  //     ...data
  //   }));
  //   console.log(data);
  //
  //   navigate('../3');
  // }

  const outletOnSubmit:any = useOutletContext();

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(outletOnSubmit)}
          style={{
            display:'flex',
            flexDirection: 'column'
          }}
        >
          <StyledLabel htmlFor='postCode'>우편번호</StyledLabel>
          <StyledInput
            {...register("postCode")}
            type='text'
            id='postCode'
            placeholder="우편번호"
            borderWidth="1px solid black"
            width="100%"
            onClick={onClickAddr}
            readOnly
          />

          <StyledLabel htmlFor='address1'>주소</StyledLabel>
          <StyledInput
            {...register("address1")}
            type='text'
            id='address1'
            placeholder="주소"
            borderWidth="1px solid black"
            width="100%"
            readOnly
          />

          <StyledLabel htmlFor='address2'>상세주소</StyledLabel>
          <StyledInput
            {...register("address2")}
            type='text'
            id='address2'
            placeholder="상세주소"
            borderWidth="1px solid black"
            width="100%"
          />

          <StyledLabel htmlFor='address3'>참고항목</StyledLabel>
          <StyledInput
            {...register("address3")}
            type='text'
            id='address3'
            placeholder="참고항목을 입력해주세요"
            borderWidth="참고항목"
            width="100%"
            readOnly
          />
          <input
            {...register('district')}
            id='district'
            style={{display:'none'}}
          />

          <BlockButton type="submit">
            다음
          </BlockButton>
          <LineButton onClick={() => navigate('../1')}>
            이전
          </LineButton>
        </form>

        <div style={{ position: 'fixed', top: 0, left:0 }}>
          <div id="wrap"
               ref={elementWrap}
               style={{
                 display: 'none',
                 border: '1px solid',
                 width: `100vw`,
                 height: '100vh',
                 backgroundColor: 'white',
               }}>
            <img
              src="//t1.daumcdn.net/postcode/resource/images/close.png" id="btnFoldWrap"
              style={{ cursor: 'pointer', position: 'relative', left: '0px', top: -1, zIndex: 1 }}
              onClick={(e) => closePostCode(e)} alt="접기 버튼" />
          </div>
        </div>
      </div>

      <button onClick={() => console.log(customer)}>확인용</button>
    </>
  )
}

export default PostCode
