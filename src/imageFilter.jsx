import React from "react";
import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { IconoTema } from "./Components/UI";

 const IconStyled = (type) =>{
    
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante"></IconoTema>,
        Salud: <IconoTema src={salud} alt="salud"></IconoTema>,
        Transporte: <IconoTema src={transporte} alt="transporte"></IconoTema>,
        Utilidades: <IconoTema src={utilidades} alt="utilidades"></IconoTema>,
        default: <IconoTema src={otros} alt="otros"></IconoTema>,
    }
    return Images[type] || Images["default"]; // dependiendo el tipo returna uno de los casos 
}

export default IconStyled;