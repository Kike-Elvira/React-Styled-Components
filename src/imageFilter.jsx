import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { Icono } from "./Components/UI";

 const IconStyled = (type) =>{
    
    const Images = {
        Restaurante: <Icono src={alimentacion} alt="Restaurante"></Icono>,
        Salud: <Icono src={salud} alt="salud"></Icono>,
        Transporte: <Icono src={transporte} alt="transporte"></Icono>,
        Utilidades: <Icono src={utilidades} alt="utilidades"></Icono>,
        default: <Icono src={otros} alt="otros"></Icono>,
    }
    return Images[type] || Images["default"]; // dependiendo el tipo returna uno de los casos 
}

export default IconStyled;