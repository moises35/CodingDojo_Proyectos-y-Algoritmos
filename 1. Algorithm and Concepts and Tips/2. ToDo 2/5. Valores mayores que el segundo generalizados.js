// Escribe una función que acepte cualquier arreglo y devuelva un nuevo arreglo con los valores 
//del arreglo que sean mayores que su segundo valor. Imprime cuántos valores son. ¿Qué harás si el arreglo tiene solo un elemento?

function valoresMayores(arr){
    if(arr.length < 2){
        return "El arreglo tiene menos de dos elementos";
    }

    let mayorque = arr[1];
    let contador = 0;
    let arr2 = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > mayorque){
            arr2.push(arr[i]);
            contador++;
        }
    }
    return arr2;
}

let x = valoresMayores([1,3,5,7,9,13]);
console.log(x);

let y = valoresMayores([1]);
console.log(y);
