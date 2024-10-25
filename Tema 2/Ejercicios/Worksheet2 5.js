
let coeficienteA = parseInt(prompt("Dame el coeficiente A"));
let coeficienteB = parseInt(prompt("Dame el coeficiente B"));
let coeficienteC = parseInt(prompt("Dame el coeficiente C"));

let resultado;
let parte2a;

let parte1 = coeficienteB * -1;
let parte2 = Math.sqrt(Math.pow(coeficienteB, 2) - (4 * coeficienteA * coeficienteC));


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