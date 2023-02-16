/*
Crea una función que acepte un número como entrada. Devuelve un nuevo arreglo que cuenta de uno en uno, desde el número 
(como elemento "cero" del arreglo) hasta 0 (como último elemento). ¿Cuánto mide este arreglo?
*/

function arregloNuevo(num){
    let arr = [];
    for(let i = num; i >= 0; i--){
        arr.push(i);
    }
    return arr;
}

let x = arregloNuevo(5);
console.log(x);