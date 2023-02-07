// Imprime los números enteros del 1 al 100. Si es divisible por 5, imprime "Codificando" en su lugar. Si es por 10, también imprime "Dojo".
for(let i = 1; i <= 100; i++) {
    if (i % 10 === 0) {
        console.log("Dojo");
    } else if (i % 5 === 0) {
        console.log("Codificando");
    } else {
        console.log(i);
    }
}

