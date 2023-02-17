/*
Dado un arreglo, intercambia el primero y el último, el tercero y el antepenúltimo, etc. 
La entrada [true, 42, "Ada", 2, "pizza"] se convierte en ["pizza", 42, "Ada", 2, true]. 
Cambia [1,2,3,4,5,6] por [6,2,4,3,5,1].
*/

function intercambiar(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            newArr.push(arr[arr.length - 1 - i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(intercambiar([true, 42, "Ada", 2, "pizza"]));