/*
Crea una función que acepte un arreglo. Devuelve un nuevo arreglo con todos los valores excepto 
el primero, agregando 7 a cada uno. No alteres el arreglo original.
*/

function agregaSiete(arr){
    let newArr = [];
    for(let i = 1; i < arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

console.log(agregaSiete([1,2,3,4,5,6,7,8,9,10]));