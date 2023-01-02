import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  :root {
    font-size: 16px; 

  --input-color: #000;


  --input-border: #a4adbd;
  --input-background: #fff;
  --input-placeholder: #a4adbd;
  
  --input-border-focus: #275EFE;
  --input-border-error: #ff9494;

  --group-color: var(--input-color);
  --group-border: var(--input-border);
  --group-background: #EEF4FF;

  --group-color-focus: #fff;
  --group-border-focus: var(--input-border-focus);
  --group-background-focus: #678EFE;
}
`;

export default GlobalStyle;
