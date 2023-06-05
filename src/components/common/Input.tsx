import StyledInput from "./Input.style";
import InputType from "../../global/interfaces/InputType";


function SFFInput({type, id, placeholder = '', width, required, borderWidth, value}: InputType) {
  return (
    <StyledInput
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      width={width}
      borderWidth={borderWidth}
      required={required}
    />
  )
}

export default SFFInput;




