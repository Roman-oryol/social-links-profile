import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

body,
html {
  margin: 0;
}

body {
  min-width: 327px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-optical-sizing: auto;
  font-style: normal;
}

`;

export default GlobalStyle;
