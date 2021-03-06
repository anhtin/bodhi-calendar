import styled from 'styled-components';

export const Wrapper = styled.div`
  & main {
    box-sizing: border-box;
  }

  & .logo {
    height: 70px;
    margin: 10px;
  }

  & .credits {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & footer {
    display: flex !important;
    flex-direction: column;
    text-align: center;
    padding: 2vh;
    background-color: transparent;
  }

  & footer p {
    font-size: x-small;
    white-space: pre-wrap;
  }
`;
