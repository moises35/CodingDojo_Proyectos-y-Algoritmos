// Intercambia posiciones de pares sucesivos de los valores de una matriz dada. 
// Si la longitud es impar, no cambies el elemento final. Para [1,2,3,4], devuelve [2,1,4,3]. 
// Por ejemplo, cambia la entrada ["Brendan", verdadero, 42] a [verdadero, "Brendan", 42]. 
// Al igual que con todos los desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado.

function intercambiarPares(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i + 1] !== undefined) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    return arr;
}

console.log(intercambiarPares([1, 2, 3, 4]));
console.log(intercambiarPares(["Brendan", true, 42]));
