// Crea una función que, dada una cadena, devuelva todo el contenido de esa cadena, pero sin espacios en blanco.
// Si se da la cadena "Pl ayTha tF u nkyM usi c", devuelve "PlayThatFunkyMusic".

const quitarEspacios = (cadena) => {
    return cadena.split(" ").join("");
}

console.log(quitarEspacios("Pl ayTha tF u nkyM usi c"));