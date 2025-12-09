import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  max-width: 500px;
  margin: 0 auto;
}

ul, ol {
  padding: 0;
  margin: 0;
  list-style: none;
}
`;
