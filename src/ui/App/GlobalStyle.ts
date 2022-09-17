import { createGlobalStyle } from 'styled-components';

import { colors } from '../constants';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${colors.YELLOW_LIGHT};
    font-size: 16px;
    min-width: 300px;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: #4a4a4a;
    font-size: 1em;
    line-height: 1.5;
  }

  body, button, input, select, textarea {
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
  }

  a {
    color: ${colors.PRIMARY};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
