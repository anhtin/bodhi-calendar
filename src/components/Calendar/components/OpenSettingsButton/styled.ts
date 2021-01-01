import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  padding: 0.4em;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 4em;
  line-height: 0.5em;

  :hover {
    background-color: rgb(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`;
