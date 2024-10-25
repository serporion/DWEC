/*
Homework: Credit Card Validation
You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999777788880000
6666666666661666
The following credit card numbers are invalid:

a92332119c011112 invalid characters
4444444444444444 only one type of number
1111111111111110 sum less than 16
6666666666666661 odd final number
In order to run the function, you'll need to know how to load javascript on an HTML page. From there, you will open your developer console to call the function.
*/
    let tarjeta = "1111111111111110"; 
    let correcta = true;
    let arrayNumeroTarjeta = tarjeta.split("");
    let potencia = 1;
    
    
    
let validarTarjetaCredito = (numero) => {
    
    let suma = (n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16) => n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + n13 + n14 + n15 + n16;

    //document.write("<br>El tipo de suma es " + typeof(suma));

    //document.write("<br>El tipo de dato de tarjeta es " + typeof(tarjeta));

    for (let i = 0; i < arrayNumeroTarjeta.length; i++) {

        arrayNumeroTarjeta[i] = parseInt(arrayNumeroTarjeta[i]);
    }

    let sumaTarjeta = (suma(...arrayNumeroTarjeta));

    //document.write("<br>La suma de los digitos es " + sumaTarjeta);

    if (sumaTarjeta < 16) {
        correcta = false;
    }
    for (let i = 1; i <= 9; i++) {
        for (let j = i + 1; j <= 16; j++) {
            potencia *= arrayNumeroTarjeta[j];
        }
        if((Math.pow(i, 16) == potencia)){
            correcta = false;

        }
    }

    if (arrayNumeroTarjeta[15]%2 != 0) { 
            correcta = false;
    }


    return correcta ? "correcta" : "incorrecta";

}

document.write("<br>");
document.write("El numero de la tarjeta que es " + tarjeta + " es: " + validarTarjetaCredito(tarjeta));


