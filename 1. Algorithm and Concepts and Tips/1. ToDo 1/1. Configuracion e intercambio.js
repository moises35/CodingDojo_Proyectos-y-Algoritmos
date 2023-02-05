let myNumber = 42;
let myName = "Moises";

// Imprimimos el contenido de las variables
console.log(`--> myNumber: ${myNumber}`);
console.log(`--> myName: ${myName}`);

// Intercambiamos el contenido
let aux = myName;
myName = myNumber;
myNumber = aux;

// Imprimimos el contenido de las variables
console.log(`--> myNumber: ${myNumber}`);
console.log(`--> myName: ${myName}`);
