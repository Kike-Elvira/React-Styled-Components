import React, { useState } from "react";
import { styled } from "styled-components";
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";
import { IconoTema,Detalle,Saldo,Box, Btn } from "../UI";

const IconoTemaMargin = styled(IconoTema)`
  // herencia de estilos entre parentesis va el componente del que hereda
  margin-top: 2px;
`;

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <span>
          <IconoTema src={dinero} alt="Icono de saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconoTemaMargin
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
    </Box>
  );
};

export default Account;
