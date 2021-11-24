import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body,
  html {
    box-sizing: border-box;
    font-size: 16px;
    margin: 0;
    padding: 0;
  
  }

  body {
    height: 100%;
    min-height: 100vh;
    overscroll-behavior-y: contain;
    background-color: #F0F0F0;
    font-family: 'Lato',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    width: 100%;   
  }

  a {
    text-decoration: none;
  }

  h2 {
    border-bottom: 2px solid green;
    padding: 0 0 0.5rem 0;
    margin: 0px;
  }
`;

export default GlobalStyle;
