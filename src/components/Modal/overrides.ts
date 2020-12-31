import { createGlobalStyle } from 'styled-components';

import * as colors from 'utils/colors';

export const StyleOverrides = createGlobalStyle`
  .ReactModal__Overlay {
    position: fixed;
    inset: 0px;
    background-color: rgba(10, 10, 10, 0.86);
    transition: opacity 0.3s ease-in-out;
  }

  .ReactModal__Content {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    min-width: 200px;
    padding: 1.5em;
    background-color: ${colors.YELLOW_LIGHT};
    border: 1px solid ${colors.PRIMARY};
    transform: translate(-50%, -50%);
    overflow: auto;
  }
`;
