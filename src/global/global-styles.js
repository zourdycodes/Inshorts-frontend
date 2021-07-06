import { createGlobalStyle } from "styled-components/macro";

export const Global = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a:link,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  
  ::-webkit-scrollbar {
    width: 9px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #444444;
    border-radius: 8px;
    
    &:hover {
      background: #777777;
    }
  }
`;
