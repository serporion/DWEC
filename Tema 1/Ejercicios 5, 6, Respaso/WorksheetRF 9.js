let numero = parseInt(prompt("Dame un numero y te diré los divisores"));

for (let i = 1; i <= numero || i < numero/2; i++){

    if (numero % i == 0) {

        document.write("<br> El número es divisible " + i);

    }

}