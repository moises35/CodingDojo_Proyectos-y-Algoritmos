// Agrega números enteros impares de -300,000 a 300,000, y console.log la suma final. ¿Existe un atajo?
let sum = 0;

for(let i = -300000; i <= 300000; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log(sum);