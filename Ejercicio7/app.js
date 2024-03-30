
const nombres = ["Pedro", "María", "Carlos", "Laura", "Juan", "Sofía", "Ana", "Luis", "Elena", "Diego"];

// Ordenar el array por la longitud de los nombres
nombres.sort((a, b) => b.length - a.length);

console.log("Array de nombres ordenado por la cantidad de letras en cada nombre:");
console.log(nombres);
