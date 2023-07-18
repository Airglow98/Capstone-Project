import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    --primary-color: #ff8902;
    --secondary-color: #efbf80;
    --tertiary-color: #ecd6af;
    --quaternary-color: #efb05f;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  html {
    background-image: linear-gradient(120deg, #4698b1 0%, #09f0b6 100%);
  }

  `;
