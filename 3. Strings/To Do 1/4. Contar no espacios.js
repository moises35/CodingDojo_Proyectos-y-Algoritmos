// Acepta una cadena y devuelve el número de caracteres sin espacio que encuentre en una cadena.
// Por ejemplo, dado, "Amor, me estás volviendo loca", devuelve 29 (no 35).

const contarNoEspacios = (cadena) => {
    let resultado = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== " ") {
            resultado++;
        }
    }
    return resultado;
}

console.log(contarNoEspacios("Amor, me estás volviendo loca"));