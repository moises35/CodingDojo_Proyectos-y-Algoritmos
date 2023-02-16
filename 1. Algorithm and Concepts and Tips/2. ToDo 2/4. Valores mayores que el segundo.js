/*
Para [1,3,5,7,9,13], imprime valores que sean mayores que su segundo valor. Devuelve cuántos valores son.
*/

function valoresMayores(arr){
    let mayorque = arr[1];
    let contador = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > mayorque){
            console.log(arr[i]);
            contador++;
        }
    }
    return contador;
}

let x = valoresMayores([1,3,5,7,9,13]);
console.log("La cantidad de valores mayores que el segundo es: " + x);
    
    