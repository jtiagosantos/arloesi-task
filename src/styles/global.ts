import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --brand-primary-0: #ED2F59;
    --brand-secondary-0: #12DB89;
    --black-0: #303030;
    --black--1: #575757;
    --white-0: #FFFFFF;
    --helpers-placeholder: #909090;
    --background-color: #F6F4F4;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    height: 100vh;

    @media(max-width: 1000px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%; 
    }
  }

  body {
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
