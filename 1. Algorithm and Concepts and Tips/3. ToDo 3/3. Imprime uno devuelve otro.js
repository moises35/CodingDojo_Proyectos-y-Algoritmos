/* 
Crea una función que tome un arreglo de números. La función debe imprimir el penúltimo valor 
del arreglo y devolver el primer valor impar del arreglo.
*/

function printOneReturnAnother(arr){
    console.log(`El penultimo valor es: ${arr[arr.length - 2]}`);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            return arr[i];
        }
    }
}

let arr = [2,4,6,8,10,12,13,14,16,18,20];
let result = printOneReturnAnother(arr);
console.log(`El primer valor impar es: ${result}`);