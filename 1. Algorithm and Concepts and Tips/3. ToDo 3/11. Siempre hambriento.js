/*
Crea una función que acepte un arreglo  e imprime "delicioso" cada vez que uno de los valores sea
igual a "comida". Si no hay elementos "comida" en el arreglo, entonces escribe "Tengo hambre" una vez.
*/

function hambriento(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == "comida") {
            console.log("delicioso");
            count++;
        }
    }
    if(count == 0) {
        console.log("Tengo hambre");
    }
}

hambriento([1,2,3,4,5,6,7,8,9,10]);
hambriento([1,2,3,4,5,6,7,8,9,10,"comida"]);