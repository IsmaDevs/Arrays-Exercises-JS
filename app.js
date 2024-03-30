// Ejercicio 1

// Variables declaradas (Scope Global)
let arrayNumeros = [1, 5, 10, 4, 2];
let suma = 0;

console.log(arrayNumeros); // Mostramos el array por consola

// Suma de los elementos del Array

for(let i = 0; i < arrayNumeros.length; i++) {
    
    suma += arrayNumeros[i];

}

console.log(`Suma de los elementos = ${suma}`); // Mostramos la suma de los elementos del array por consola.