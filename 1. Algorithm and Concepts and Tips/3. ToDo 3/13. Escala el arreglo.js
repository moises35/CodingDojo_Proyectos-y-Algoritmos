/* 
Dado el arreglo arr y el número num, multiplica cada valor de arr por num y devuelve el arr cambiado.
*/

function escala(arr, num){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}

console.log(escala([1,2,3,4,5,6,7,8,9,10], 2));