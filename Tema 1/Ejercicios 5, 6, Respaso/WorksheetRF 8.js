document.write("Te hago el factorial de los numero desde el 0 hasta el número que des")

let numero = parseInt(prompt("Dame un numero"));
let factorial = 1;


for (let i = 1; i <= numero; i++) {
    factorial*=i;
}

document.write("<br>La suma de los numero es " + factorial);


function fact(n){

    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * fact(n-1);
    }
}

document.write("<br>El factorial de 4 es: " + fact(4));