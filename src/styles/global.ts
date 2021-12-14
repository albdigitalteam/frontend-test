import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    height: 100%;
    background: #000000;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: #ffffff;
  }

  input, button, p {
    font-family: "Roboto", serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 0;
  }
`;

