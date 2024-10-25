document.write("Te sumo los numero desde el 0 hasta el número que des")

let numero = parseInt(prompt("Dame un numero"));
let suma = 0;


for (let i = 1; i <= numero; i++) {
    suma+=i;
}

document.write("<br>La suma de los numero es " + suma);