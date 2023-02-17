/*
Dado un arreglo, crea una función para devolver un nuevo arreglo donde cada valor 
en el original se ha duplicado. Llamar a doble([1,2,3]) debería devolver [2,4,6] sin cambiar el original.
*/

function doble(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

let arr = [1,2,3];
let result = doble(arr);
console.log(result);