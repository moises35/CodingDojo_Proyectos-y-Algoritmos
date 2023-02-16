/*
Kelvin quiere convertir entre escalas de temperatura. Crea fahrenheitToCelsius(fDegrees) que acepte 
un número de grados en Fahrenheit y devuelva la temperatura equivalente expresada en grados Celsius. 
Para revisar, Fahrenheit = (9/5 * Celsius) + 32.
*/

function fahrenheitToCelsius(fDegrees){
    return (fDegrees - 32) * (5/9);
}

let x = fahrenheitToCelsius(32);
console.log(x);

let y = fahrenheitToCelsius(78);
console.log(y);