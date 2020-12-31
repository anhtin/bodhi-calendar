import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: 1vh;
  align-self: flex-end;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 4rem;
  z-index: 1;

  :hover {
    background-color: rgb(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`;
