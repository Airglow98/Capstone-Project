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
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
  }

  `;
