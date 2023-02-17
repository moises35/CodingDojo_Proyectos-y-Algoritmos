/* Dado arr, agrega 1 a los elementos impares ([1], [3], etc.), console.log todos los valores y devuelve arr. */

function aggArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = aggArray(arr);
console.log(result);