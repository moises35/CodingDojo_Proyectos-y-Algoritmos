// Dado una matriz, índice y valor adicional, inserta el valor en la matriz en el índice dado. 
// Haz esto sin utilizar métodos de matriz integrados. Puedes pensar en pushFront(arr, val) 
// como equivalente a insertAt(arr, 0, val).

function insertAt(arr, idx, val) {
    for (let i = arr.length; i > idx; i--) {
        arr[i] = arr[i - 1];
    }
    arr[idx] = val;
    return arr;
}

console.log(insertAt([1, 2, 3, 4], 2, 5));

