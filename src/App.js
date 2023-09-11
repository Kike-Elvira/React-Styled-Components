import React, { useState } from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro,temaOscuro } from "./Components/UI/themes";
import { BtnTema } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme"
function App() {
  const [tema,setTema] = useState(true);
  const toggleTheme = () => {
    setTema((tema) => !tema) // negamos el tema para cambiar su estado
  }
  return (
    <ThemeProvider theme={tema ? temaClaro : temaOscuro}> 
      <GlobalStyle />
      <BtnTema onClick={toggleTheme}>
        <SwitcherTheme tema={tema}></SwitcherTheme>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
