let numero = prompt("Dame cuantos numeros quieres. Empiezo por el 1 y siguo de uno en uno");

for (let i = 1; i <= numero; i++) {
    document.write("<br>" + i);
}

let numero2 = prompt("Dame cuantos numeros quieres. Empiezo por el 2 y siguo de dos en dos");

for (let j = 1; j <= numero2; j+=2) {
    document.write("<br>" + j);
}

let numero3 = prompt("Dame cuantos numeros quieres. Empiezo por el 1 y siguo de uno en uno");

for (let i = numero3; i >= 0; i--) {
    document.write("<br>" + i);
}

for (let i = 1; i <= 10; i++) {
    console.log("La tabla del 9 es 9 * " + i + " = " + i * 9);
}