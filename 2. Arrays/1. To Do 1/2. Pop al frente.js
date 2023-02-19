// Dada una matriz, elimina y devuelve el valor al principio de la matriz. Haz esto sin utilizar ningún método de matriz 
// incorporado, excepto pop().

function popFrente(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return temp;
}

let miArray = [1, 2, 3, 4, 5];
console.log(popFrente(miArray));