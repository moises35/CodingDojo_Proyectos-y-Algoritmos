// Si 2 números dados representan tu mes y día de nacimiento en cualquier orden, registra "¿Cómo lo supiste?", de lo contrario registra "Un día cualquiera...".
// Mi mes de nacimiento es 08 y mi día de nacimiento es 19.

function birthday(x, y) {
    if (x === 8 && y === 19 || x === 19 && y === 8) {
        console.log("¿Cómo lo supiste?");
    } else {
        console.log("Un día cualquiera...");
    }
}

birthday(8, 19);
birthday(19, 8);
birthday(8, 20);