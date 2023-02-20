// Dada una matriz de cadenas y un valor (longitud), elimina las cadenas más cortas que la longitud de la matriz.

const quitarCadenasMasCortas = (matriz, longitud) => {
    // Separamos las cadenas que no cumplan la longitud
    let resultado = matriz.filter(cadena => cadena.length >= longitud);
    return resultado;
}

console.log(quitarCadenasMasCortas(["Hola", "Ramiro", "Rio", "Ana", "Auxilio", "Adios"], 5));