/*
Dado un arreglo, escribe una función que cambie todos los números positivos del arreglo a "grande". 
Ejemplo: makeItBig([- 1,3,5, -5]) devuelve el mismo arreglo, cambiado a [-1, "big", "big", - 5].
*/

function makeItBig(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}

let arr = [-1,3,5,-5];
let result = makeItBig(arr);
console.log(result);