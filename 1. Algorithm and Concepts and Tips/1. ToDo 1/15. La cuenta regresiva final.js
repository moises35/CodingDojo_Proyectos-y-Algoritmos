// Esto se basa en "Cuenta regresiva flexible". Los nombres de los parámetros no son tan útiles, 
//pero el problema es esencialmente idéntico; ¡no te dejes engañar! Dados 4 parámetros (param1, param2, param3, param4), 
//imprime los múltiplos de param1, comenzando en param2 y extendiéndose hasta param3. Una excepción: si un múltiplo es 
//igual a param4, omítelo (no lo imprimas). Haz esto usando un WHILE. Dado (3,5,17,9), imprime 6,12,15 (que son todos 
//los múltiplos de 3 entre 5 y 17, y excluyendo el valor 9).

function finalCountdown(param1, param2, param3, param4) {
    let i = param2;
    while (i <= param3) {
        if (i % param1 === 0 && i !== param4) {
            console.log(i);
        }
        i++;
    }
}

finalCountdown(3, 5, 17, 9);