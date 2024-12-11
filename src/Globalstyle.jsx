import {createGlobalStyle} from "styled-components";

export const Globalstyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }
  body {
    line-height: 1.5;
    font-size: 16px;
    overflow-x:hidden;
  }
  .section{font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  }
`;

