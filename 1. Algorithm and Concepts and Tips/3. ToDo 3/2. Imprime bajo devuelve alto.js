/* 
Crea una función que tome un arreglo de números. La función debe imprimir el valor más bajo del arreglo y devolver el valor más alto del arreglo.
*/

function printLowReturnHigh(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }

        if(arr[i] > max) {
            max = arr[i];
        } 
    }
    console.log(`El mas bajo es: ${min}`);
    return max;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let result = printLowReturnHigh(arr);
console.log(`El mas alto es: ${result}`);