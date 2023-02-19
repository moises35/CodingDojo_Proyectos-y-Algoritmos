// Dada una matriz y un valor adicional, inserta este valor al principio de la matriz. Haz esto sin utilizar ningún método de matriz incorporado.

function colocarAlFrente(arr, val) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(colocarAlFrente(arr, 0));
