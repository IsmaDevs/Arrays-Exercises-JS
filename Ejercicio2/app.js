// Ejercicio 2.

// Variables en un scope Global
let arrayNumeros = [5, 10, 6, 9, 3];
let aux = 0;

// Mostramos nuestro Array
console.log(arrayNumeros)

    // Usamos el for para recorrer y dentro un if para encontrar el mayor valor

for (let i = 0; i < arrayNumeros.length; i++) {

     if(arrayNumeros[i] > aux) 
     {
        aux = arrayNumeros[i]
     }
}

console.log(aux); // Mostramos el mayor valor por consola