// Ejercicio 3

// Array repetidos
let arrayNumeroRepetidos = [2, 5, 10, 5, 4, 3, 2, 1];

console.log(arrayNumeroRepetidos); // Mostramos los array repetidos

let arrayNumeros = [...new Set(arrayNumeroRepetidos)] // Usamos la clase Set para tener un nuevo conjunto de numeros no duplicados.
console.log(arrayNumeros) // Mostramos el nuevo conjunto de numeros.