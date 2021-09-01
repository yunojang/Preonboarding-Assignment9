import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MAIN_COLOR from "constant/color";

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'NanumSquareRound';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: "NanumSquareRound";
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  body {
    background: ${MAIN_COLOR};
  }

  button, input[type="submit"] {
    background: none;
    border: none;
    cursor: pointer;
    user-select: none;
  }
`;

export default GlobalStyle;
