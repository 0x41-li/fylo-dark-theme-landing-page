import { createGlobalStyle } from "styled-components";

// images
import backgroundBodyMobile from "../assets/images/body-background-mobile.svg";
import backgroundBodyDesktop from "../assets/images/body-background-desktop.svg";

const GlobalStyles = createGlobalStyle`
  // General
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
    border: unset;
  }

  a {
    text-decoration: unset;
  }
  
  // Body
  body {
    background: #1B2330 url(${backgroundBodyMobile}) no-repeat top 280px center / cover;

    @media screen and (min-width: 992px) {
      background: #1B2330 url(${backgroundBodyDesktop}) no-repeat top 280px center / cover;
    }
  }
`;

export default GlobalStyles;
