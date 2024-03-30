let arrayPrimos = [2, 3, 17, 41, 11, 5, 19];
let suma = 0;

for (let i = 0; i < arrayPrimos.length; i++) {
    
    suma += arrayPrimos[i];
    
}

console.log("Resultados del ejercicio 10\n")
console.log(`La suma del array de los numeros primos es: ${suma}\n\nEl total de numeros primos del array es de: ${arrayPrimos.length}`)