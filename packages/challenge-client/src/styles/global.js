import { createGlobalStyle } from 'styled-components';

import colors from './colors';
import typograph from './typograph';

const {
  ink,
} = colors;

const {
  size,
  weight,
  family,
  family_mono,
} = typograph;

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
  span,
  small {
    color: ${ink.base};
    margin: 0;
  }

  h1 {
    font-size: ${size.l3};
    line-height: 50px;
    font-weight: ${weight.semiBold};
    letter-spacing: .84px;
  }

  h2 {
    font-size: ${size.l2};
    line-height: 40px;
    font-weight: ${weight.semiBold};
    letter-spacing: .72px;
  }

  h3 {
    font-size: ${size.l2};
    line-height: 40px;
    font-weight: ${weight.semiBold};
    letter-spacing: .72px;
  }

  h4 {
    font-size: ${size.m2};
    line-height: 32px;
    font-weight: ${weight.semiBold};
    letter-spacing: .52px;
  }

  h5 {
    font-size: ${size.m1};
    line-height: 30px;
    font-weight: ${weight.semiBold};
    letter-spacing: .48px;
  }

  p,
  input,
  label {
    font-size: ${size.s3};
    line-height: 26px;
    font-weight: ${weight.regular};
    letter-spacing: .4px;
  }
  
  small {
    font-size: ${size.s2};
    line-height: 24px;
    font-weight: ${weight.regular};
    letter-spacing: .36px;
    font-family: ${family_mono};
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
