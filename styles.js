import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root{
    --primary-color: #ff8902;
    --secondary-color: #efbf80;
    --tertiary-color: #ecd6af;
    --quaternary-color: #efb05f;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--tertiary-color);
  }
`;
