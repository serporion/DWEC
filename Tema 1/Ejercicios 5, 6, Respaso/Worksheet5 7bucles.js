let numeroGanador = parseInt(prompt("Dame un número para que otro lo adinvine"));
let ganador = false;

while (!ganador) {
    let numero = parseInt(prompt("Dame un número a ver si lo adivinas"));
    if (numero == numeroGanador) {
        document.write("Ganaste!");
        ganador = true;
    }else if (numero > numeroGanador) {
        console.log("Demasiado alto. Prueba otra vez");
    }else if (numero < numeroGanador) {
        console.log("Demasiado bajo. Prueba otra vez");
    }
}

