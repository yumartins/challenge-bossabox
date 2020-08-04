import { createGlobalStyle } from 'styled-components';

import typograph from './typograph';

const { family } = typograph;

const GlobalStyles = createGlobalStyle`
  * {
    line-height: normal;
    letter-spacing: normal;
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
    background: none;
    outline: 0;
  }

  input,
  textarea,
  select {
    outline: 0;
    margin: 0;
    appearance: none;
    box-shadow: none;
    border: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
    appearance: none;
    background-clip: padding-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    margin: 0;
  }

  body {
    font-family: ${family};
    margin: 0;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
