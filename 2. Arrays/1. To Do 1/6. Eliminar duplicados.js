// Sara está buscando contratar a un desarrollador web increíble y ha recibido postulaciones de varias fuentes. 
// Su asistente los ordenó alfabéticamente, pero notó algunos duplicados. Dada una matriz ordenada, 
// elimina los valores duplicados. Debido a que los elementos de la matriz ya están en orden, 
// todos los valores duplicados se agruparán. Al igual que con todos estos desafíos de arreglos, hazlo sin 
// utilizar ningún método de arreglo incorporado.

function quitarPop(arr) {
    let temp = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return temp;
}

function eliminarDuplicados(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            for (let j = i; j < arr.length; j++) {
                arr[j] = arr[j + 1];
            }
            quitarPop(arr);
            i--;
        }
    }
    return arr;
}

console.log(eliminarDuplicados([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
console.log(eliminarDuplicados(["ana", "esteban", "esteban","esteban", "fabricio", "marcelo", "marcelo", "oscar"]))


