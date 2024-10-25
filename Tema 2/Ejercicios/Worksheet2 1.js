
/*document.write("Genearar un número entre 0 y 1")
document.write("<br>" + Math.random());

document.write("<br><br>Genearar un número entre 100 y 200")

document.write("<br>" + Math.floor((Math.random()*200-100)+100));


let num; 

while (num != 100){
    
    num = parseInt((Math.random()*101)+100);
}

document.write("<br>" + num);


let numero1 = parseInt(prompt("Introduce el primer numero"));
let numero2 = parseInt(prompt("Introduce el segundo numero"));


document.write("<br><br>Generar un número entre los números que me has dado");
//document.write("<br>" + Math.random() * (numero2-numero1+1)+numero1);

document.write("<br>");
document.write("Aquí");
document.write("<br>" + (Math.random() * (9 - 6 + 1) + 6));

document.write("<br>");
document.write("Otro Aquí");
document.write("<br>");
document.write(Math.random() * (9 - 6 + 1) + 6);


document.write("<br><br> El número entre " + numero1 + " y " + numero2 + " es: <br>");
document.write(Math.random() * (numero2-numero1+1)+numero1);

document.write("<br>");

*/



for(let i = 0; i<2000; i++){
    

    let randomNumber = Math.floor(Math.random() * (200 - 105 -1) + (105+1));

    if (randomNumber == 105 || randomNumber == 200) {
        // Si por algún motivo sigue sacando el valor 105 o 200, ejecuta la lógica aquí
        console.log("Número no deseado:", randomNumber);
    } 
    
}


let coeficienteA = parseInt(prompt("Dame el coeficiente A"));
let coeficienteB = parseInt(prompt("Dame el coeficiente B"));
let coeficienteC = parseInt(prompt("Dame el coeficiente C"));

let resultado;
let parte2a;

let parte1 = coeficienteB * -1;
let parte2 = Math.sqrt(Math.pow(coeficienteB, 2) - (4 * coeficienteA * coeficienteC));

//A=3, B=5, C=1, A veces dice NaN pero porque es un número negativo dentro de una raiz cuadrada.

/*
document.write(parte1);
document.write("<br>");
document.write(parte2);
*/

document.write("Exposición de resultados <br><br>");
document.write("Resultado 1<br>");

resultado = (parte1 + parte2) / (2 * coeficienteA);

document.write(resultado);
document.write("<br> Resultado 2<br>");

resultado = (parte1 - parte2) / (2 * coeficienteA);
document.write(resultado);


