// Escribe una función que determine si un año determinado es bisiesto. Si un año es divisible por cuatro, es un año bisiesto, 
//a menos que sea divisible por 100. Sin embargo, si es divisible por 400, entonces lo es.

function esBisiesto(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log("Es bisiesto");
    } else {
        console.log("No es bisiesto");
    }
}

esBisiesto(2000);
esBisiesto(2001);
esBisiesto(2002);
esBisiesto(2003);