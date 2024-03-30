// Ejercicio 6

let semana = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
console.log(semana)

let dia = prompt("Ingresa un numero entre 0 y 6");

    for (let i = 0; i < semana.length; i++) {
        
        if (dia < semana[i+1])
        {
            console.log(semana[dia])
        }
        
    }
