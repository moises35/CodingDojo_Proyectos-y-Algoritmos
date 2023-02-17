/* 
Dado un arreglo , escribe una función para invertir los valores, en el lugar. Ejemplo: reverse([3,1,6,4,2]) 
devuelve el mismo arreglo, que contenga [2,4,6,1,3].
*/

function reverse(arr){
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverse([3,1,6,4,2]));
