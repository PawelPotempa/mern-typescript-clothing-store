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

  .slick-arrow {
    color: red;
    position: absolute;
    z-index: 99;
  }

  .slick-prev {
    top: 50%;
  }

  .slick-next {
    top: 50%;
    right: 0;
  }

`;

export default GlobalStyle;
