// Crea una función de JavaScript que, dada una cadena, devuelva el número entero formado 
// por los dígitos de la cadena. Dado "0s1a3y5w7h9a2t4? 6! 8? 0", la función debería devolver el número 1357924680.

const obtenerDigitos = (cadena) => {
    let resultado = "";
    for (let i = 0; i < cadena.length; i++) {
        if(!isNaN(cadena[i]) && cadena[i] !== " ") {
            resultado += cadena[i];
        }
    }
    return parseInt(resultado);
}

console.log(obtenerDigitos("0s1a3y5w7h9a2t4? 6! 8? 0"));