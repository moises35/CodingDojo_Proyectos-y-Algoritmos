// Usando FOR, imprime múltiplos de 3 de -300 a 0. Omite -3 y -6. 

for (var i = -300; i <= 0; i++) {
    if (i === -3 || i === -6) {
        continue;
    }
    if (i % 3 === 0) {
        console.log(i);
    }
}

