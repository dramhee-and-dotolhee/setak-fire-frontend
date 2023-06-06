import {Divider} from "antd";
import {Button, Form, Input} from "antd-mobile";
import React, {useEffect, useRef} from "react";
import SFFInput from "../common/Input";

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

function createIframe(elementWrap: React.MutableRefObject<HTMLDivElement | null>, currentScroll: number) {
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
      const extraAddrInput = document.getElementById("extraAddr") as HTMLInputElement;
      const postcodeInput = document.getElementById("postCode") as HTMLInputElement;
      const addressInput = document.getElementById("addr") as HTMLInputElement;
      const detailAddressInput = document.getElementById("detailAddr") as HTMLInputElement;

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
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr += (extraAddr !== "" ? ", " + data.buildingName : data.buildingName);
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== "") {
          extraAddr = " (" + extraAddr + ")";
        }
        extraAddrInput.value = extraAddr; // 요소가 없을 경우 런타임 에러 발생 가능
      } else {
        let extraAddrInput = document.getElementById("extraAddr") as HTMLInputElement;
        extraAddrInput.value = extraAddr; // 요소가 없을 경우 런타임 에러 발생 가능
      }

      postcodeInput.value = data.zonecode;
      addressInput.value = addr;
      detailAddressInput.focus();

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
        createIframe(elementWrap, currentScroll);
      }
      elementWrap.current.style.display = "block";
    }
  }

  return (
    <>
      <div style={{ display: 'flex' }}>

        <Form
          style={{ flex: 1 }}
          requiredMarkStyle="asterisk"
          footer={
            <Button block type='submit' color='primary' size='large'>
              다음
            </Button>
          }
        >
          <label htmlFor='postCode'>우편번호</label>
          <SFFInput
            type='text'
            id='postCode'
            placeholder="우편번호"
            borderWidth="1px solid black"
            width="100%"
          />

          <label htmlFor='address1'>주소</label>
          <SFFInput
            type='text'
            id='address1'
            placeholder="주소"
            borderWidth="1px solid black"
            width="100%"
          />

          <label htmlFor='address2'>상세주소</label>
          <SFFInput
            type='text'
            id='address2'
            placeholder="상세주소"
            borderWidth="1px solid black"
            width="100%"
          />

          <label htmlFor='address3'>참고항목</label>
          <SFFInput
            type='text'
            id='address3'
            placeholder="비밀번호를 입력해주세요"
            borderWidth="참고항목"
            width="100%"
          />

        </Form>
        <div style={{ position: 'fixed' }}>
          <div id="wrap"
               ref={elementWrap}
               style={{
                 display: 'none',
                 border: '1px solid',
                 width: `100vw-1rem`,
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
    </>
  )
}

export default PostCode
