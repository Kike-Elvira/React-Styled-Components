import React from "react";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icono } from "../UI";

const SwitchIcon = ({tema}) => {
  const claro = <Icono src={themeOn} alt="Tema Claro"></Icono>;
  const oscuro = <Icono src={themeOff} alt="Tema Oscuro"></Icono>;
  console.log(tema);
  return <>{tema ? oscuro : claro}</>; // depende el tema es cual va a asignar
};

export default SwitchIcon;
