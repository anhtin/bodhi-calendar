import { createGlobalStyle } from 'styled-components';

import * as colors from 'utils/colors';

export const StyleOverrides = createGlobalStyle`
  .ReactModal__Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(10, 10, 10, 0.86);
    opacity: 0;
    transition: opacity 0.3s ease-out;

    &--after-open {
      opacity: 1;
    }

    &--before-close {
      opacity: 0;
    }
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
    -webkit-overflow-scrolling: initial !important;
  }
`;
