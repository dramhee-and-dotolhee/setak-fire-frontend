import styled from "styled-components";


const StyledInput = styled.input<{ borderWidth: string | undefined }>`
  border: none;
  border-bottom: ${props => props.borderWidth || '1px'};
  width: ${props => props.width || '100%'};
  font-size: 14px;
  line-height: 1.4;
  
  &:focus {
  outline: none;
  border-color: blue;
  }
  
  &::placeholder {
  font-size: 14px;
  line-height: 1;
  color: gray;
  }
  
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export default StyledInput;
