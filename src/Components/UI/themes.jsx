import {
  fondoClaro,
  contenidoClaro,
  TextoFondoClaro,
  fondoOscuro,
  contenidoOscuro,
  textoFondoOscuro,
} from "./Variables";

export const temaClaro = {
    body: fondoClaro,
    inside: contenidoClaro,
    text: TextoFondoClaro,
    filter: "",
}

export const temaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro,
    text: textoFondoOscuro,
    filter: "invert(100%)", // invirtiendo el color del icono svg
}