import styled from "styled-components";


const StyledInput = styled.input<{ borderWidth: string | undefined }>`
  border: none;
  max-width: ${props => props.width || '90%'};
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-block: 0.5rem 1rem;
  background: rgba(229, 228, 228, 0.35);

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
