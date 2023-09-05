import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` // definiendo un estilo global
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: grey;
}
`;

export default GlobalStyle;