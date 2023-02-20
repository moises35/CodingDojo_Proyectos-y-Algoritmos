// Crea una función que, dada una cadena, devuelva el acrónimo de la cadena (solo las primeras letras de cada palabra, en mayúscula). 
// Dado "no hay almuerzo gratis. Debes pagar por tu comida", devuelve "NHAG-DPPTC".
// Dado "¡En vivo desde Nueva York, es sábado por la noche!", devuelve "ENDNYESPLN".

const acronimos = (cadena) => {
    let resultado = "";
    // Quitamos los caracteres especiales que no sean letras y punto
    cadena = cadena.replace(/[^a-zA-Z. ]/g, "");
    // Iteramos sobre la cadena y quitamos la primera letra de cada palabra
    for (let i = 0; i < cadena.length; i++) {
        if (i === 0) {
            resultado += cadena[i].toUpperCase();
        } else if (cadena[i - 1] === " ") {
            resultado += cadena[i].toUpperCase();
        } else if (cadena[i] === ".") {
            resultado += '-';
        }
    }
    return resultado;
}

console.log(acronimos("no hay almuerzo gratis. Debes pagar por tu comida"));
console.log(acronimos("¡En vivo desde Nueva York, es sábado por la noche!"));
