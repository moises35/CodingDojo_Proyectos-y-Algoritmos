// Basado en el anterior ejercicio: “Cuenta regresiva cada cuatro”, dado lowNum, highNum, mult, print múltiplos de mult 
//desde highNum hasta lowNum, usando un FOR. Para (2,9,3), imprime 9 6 3 (en líneas sucesivas).

function flexibleCountdown(lowNum, highNum, mult) {
    for (let i = highNum; i > lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}

flexibleCountdown(2, 9, 3);

