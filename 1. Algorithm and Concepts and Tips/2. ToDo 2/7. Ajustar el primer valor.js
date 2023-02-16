/*Tu función debería aceptar un arreglo. Si el valor en [0] es mayor que la longitud de; arreglo, 
imprime "¡Demasiado grande!"; si el valor en [0] es menor que la longitud del arreglo, imprime 
"¡Demasiado pequeño!"; de lo contrario, imprime "¡Perfecto!".
 */

function compararLongitud(arr){
    if(arr[0] > arr.length){
        console.log("¡Demasiado grande!");
    } else if(arr[0] < arr.length){
        console.log("¡Demasiado pequeño!");
    } else {
        console.log("¡Perfecto!");
    }
}

compararLongitud([8, 10]);
compararLongitud([2, 10]);
compararLongitud([5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
