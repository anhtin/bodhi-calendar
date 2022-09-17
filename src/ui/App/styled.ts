import styled from 'styled-components';

export const Container = styled.div`
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
    align-items: center;
    text-align: center;
    margin-bottom: min(80px, max(15vw, 15vh));
    padding: 2vh;
    background-color: transparent;
  }

  & footer p {
    font-size: x-small;
    white-space: pre-wrap;
  }
`;
