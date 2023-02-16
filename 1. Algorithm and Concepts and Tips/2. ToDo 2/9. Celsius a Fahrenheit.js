/* Crea celsiusToFahrenheit(cDegrees) que acepte el número de grados Celsius y devuelva 
la temperatura equivalente expresada en grados Fahrenheit. */

function celsiusToFahrenheit(cDegrees){
    return (cDegrees * (9/5)) + 32;
}

let x = celsiusToFahrenheit(0);
console.log(x);

let y = celsiusToFahrenheit(25);
console.log(y);