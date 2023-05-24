import {useRecoilState} from "recoil";
import {textState} from "../atoms";
import {useState} from "react";


function Test () {

  const [text, setText] = useRecoilState(textState);

  const [text2, setText2] = useState("");

  const onChange = (event: { target: { value: string | ((currVal: string) => string); }; }) => {
    setText(event.target.value);
    console.log('text1 : ', text);
  }

  const onChange2 = (event: { target: { value: string | ((currVal: string) => string); }; }) => {
    setText2(event.target.value);
    console.log('text2 : ', text2);
  }

  return (
    <div>

      {/* Recoil - useRecoilState */}
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <hr/>

      {/* useState */}
      <input type="text" value={text2} onChange={onChange2} />
      <br />
      Echo: {text2}
    </div>
  )
}

export default Test;
