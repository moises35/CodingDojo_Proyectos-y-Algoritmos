// Dados dos números, devuelve un arreglo de longitud num1 con cada valor num2. Imprimir "¡Jinx!" si son iguales.

function imprimirJinx(num1, num2){
    let arr = [];
    for(let i = 0; i < num1; i++){
        arr.push(num2);
    }
    if(num1 == num2){
        console.log("¡Jinx!");
    }
    return arr;
}

let x = imprimirJinx(5, 5);
console.log(x);

let y = imprimirJinx(5, 10);
console.log(y);