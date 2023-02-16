// Tu función recibirá un arreglo con dos números. Imprime el primer valor y devuelve el segundo.

function imprimirRetorno(arr){
    console.log(arr[0]);
    return arr[1];
}

let x = imprimirRetorno([8, 10]);
console.log(x);