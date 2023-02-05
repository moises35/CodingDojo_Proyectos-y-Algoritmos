// Imprime todos los múltiplos enteros de 5, de 512 a 4096. Después, también registra cuántos había.

let contador = 0;
for (let i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        console.log(i);
        contador++;
    }
}
console.log("Hay " + contador + " múltiplos de 5 entre 512 y 4096.");

