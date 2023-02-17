/*
Crea una función que acepte un arreglo. Cada vez que el arreglo tenga tres valores impares 
seguidos, imprime "¡Eso es extraño!" Cada vez que el arreglo tenga tres pares seguidos, imprime "¡Aún más!".
*/ 

function paresImpares(arr){
    let aux = 0;
    let aux2 = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            aux++;
            aux2 = 0;
        } else {
            aux2++;
            aux = 0;
        }
        if(aux == 3){
            console.log("¡Aún más!");
            aux = 0;
        }
        if(aux2 == 3){
            console.log("¡Eso es extraño!");
            aux2 = 0;
        }
    }
}

let arr = [1,1,1,3,4,4,4,5,5,5,6,6,6];
paresImpares(arr);
