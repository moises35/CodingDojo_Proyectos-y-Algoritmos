/* 
Dado un arreglo de números, crea una función para reemplazar el último valor con el número
de valores positivos. Por ejemplo, countPositives([- 1,1,1,1]) cambia el arreglo a [-1,1,1,3] y lo devuelve.
*/

function countPositives(arr){
    let aux = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            aux++;
        }
    }
    arr[arr.length - 1] = aux;
    return arr;
}

let arr = [-1,1,1,1];
let result = countPositives(arr);
console.log(result);