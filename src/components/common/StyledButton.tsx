import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-block: 0.5rem 1rem;
  background-color: rgba(229, 228, 228, 0.35);
  border: 2px solid rgba(31, 31, 31, 0.8);
`;

export const LineButton = styled(Button)`
  color: rgba(31, 31, 31, 0.8);

  &:hover {
    background-color: rgba(31, 31, 31, 0.8);
    color: rgba(250, 250, 250, 0.94);
  }
`;

export const BlockButton = styled(Button)`
  background-color: rgba(31, 31, 31, 0.8);
  color: rgba(250, 250, 250, 0.94);

  &:hover {
    color: rgba(31, 31, 31, 0.8);
    padding: 1rem; /* 호버 상태에서도 동일한 padding 값을 유지합니다. */
  }
`;