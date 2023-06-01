import InputType from "../../global/interfaces/InputType";

export default function StyledInput({ placeholder, required }:InputType) {

  const style = {
    width: '100%',
    height: '100%',
    border: 'none',
    borderBottom: '1px solid gray',
    lineHeight: '1.5',
  }

  return (
    <input
      style={style}
      placeholder={placeholder}
      required={required}
    />
  );
}





