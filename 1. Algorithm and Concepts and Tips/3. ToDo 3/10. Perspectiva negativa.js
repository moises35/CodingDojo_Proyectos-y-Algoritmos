/* 
Dado un arreglo, crea y devuelve uno nuevo que contenga todos los valores del arreglo 
proporcionado en negativo (no simplemente multiplicada por -1). Dado [1, -3, 5], devuelve [-1, -3, -5].
*/

function negative(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i] * -1);
        }
    }
    return newArr;
}

console.log(negative([1, -3, 5]));