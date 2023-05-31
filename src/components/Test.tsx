import {useRecoilState, useRecoilValue} from "recoil";
import {textState} from "../recoil/atoms";
import {charCountState} from "../recoil/selectors";


function Test () {


  // RecoilState
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: { target: { value: string | ((currVal: string) => string); }; }) => {
    setText(event.target.value);
    console.log('text1 : ', text);
  }


  // Selector
  const count = useRecoilValue(charCountState);


  // useState
  // const [text2, setText2] = useState("");
  //
  // const onChange2 = (event: { target: { value: string | ((currVal: string) => string); }; }) => {
  //   setText2(event.target.value);
  //   console.log('text2 : ', text2);
  // }



  return (
    <div>

      {/* recoil - useRecoilState */}
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
      <hr/>
      <div>Character Count : {count}</div>



      {/*/!* useState *!/*/}
      {/*<input type="text" value={text2} onChange={onChange2} />*/}
      {/*<br />*/}
      {/*Echo: {text2}*/}

    </div>
  )
}

export default Test;
