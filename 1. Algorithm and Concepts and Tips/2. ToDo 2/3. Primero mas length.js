/*
Dado un arreglo, devuelve la suma del primer valor del arreglo, más la longitud del arreglo. 
¿Qué sucede si el primer valor del arreglo no es un número, sino una cadena (como “what?”)
 o un booleano (como false).
*/

function primerValorMasLongitud(arr){
    return arr[0] + arr.length;
}

let x = primerValorMasLongitud([8, 10]);
console.log(x);

let y = primerValorMasLongitud(["what?", 10]);      // Se concatena la cadena con el número
console.log(y);