import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  border-style, input, button, textArea {
    font: 400 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
  }
`;
