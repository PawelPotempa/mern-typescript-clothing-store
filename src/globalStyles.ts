import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    font-family: "Fira Sans Condensed", sans-serif;
    box-sizing: border-box;
  }

  .slick-track {
    display: flex;
  }

  .slick-slider {
position: relative;
  }

`;

export default GlobalStyle;
