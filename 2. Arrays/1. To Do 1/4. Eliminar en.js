// Dada una matriz y un índice en una matriz, elimina y devuelve el valor de la matriz en ese índice. 
// Haz esto sin usar métodos de matriz integrados, excepto pop(). Piensa en popFront(arr) como equivalente a removeAt(arr, 0).

function removeAt(arr, idx) {
    idx -= 1;
    let val = arr[idx];
    for (let i = idx; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return val;
}

let arr = [5, 6, 1, 4, 3, 2];
console.log(removeAt(arr, 3));
console.log(arr);