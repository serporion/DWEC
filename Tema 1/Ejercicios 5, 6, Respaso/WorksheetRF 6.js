
document.write("Te sumo los pares que van desde un numero que me des hasta otro que también me des")

let numeroN = parseInt(prompt("Dame un numero"));
let numeroM = parseInt(prompt("Dame el otro número numero"));
let suma = 0;

if (numeroN < 0){
    numeroN = numeroN*-1;
}

if (numeroM < 0){
    numeroM = numeroM*-1;
}


for (let i = numeroN; i <= numeroM; i++) {

    if (i % 2 == 0) {

       suma+=i;
    } 

}

document.write("<br>La suma de los numero pares es " + suma);

