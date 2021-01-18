import { createGlobalStyle } from 'styled-components';
import Color from 'utils/ColorPalette';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    height: 100%;
  }

  body {
    min-height: 100%;

    margin: 0;
    padding: 0;
    font-family: "Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    scrollbar-width: none;
  }

  button, button:active {
    outline: none;
    border: none;

    font-family: "Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  a, a:visited {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;

    ::selection {
      background: #343a40;
      color: #f1f3f5;
    }
  }
`;

export default GlobalStyle;
