let n1 = 2;
let n2 = 3;

let n3 = prompt("Dame un número que no sea 0");
let n4 = prompt("Dame otro número que no sea 0");

let radio = parseFloat(prompt("Dame el radio"));
const pi = 3.14;

let grados = parseFloat(prompt("Dame los grados celsius convertir en fharenheit"));
const fharenheit = 33.8;
let gradosfar = grados * fharenheit;

let fharenheits = parseFloat(prompt("Dame los grados farenheit a convertir en celsius"));

document.write("El primer número es " + n1);
document.write("<p>El segundo número es " + n2);
document.write("<p>La suma de los dos números es: " + n1+n2);
document.write("<p>La multiplicacion de los números es: " + (n1*n2));
document.write("<p>La division de los números es: " + (n1/n2));
document.write("<p>La resta de los números es: " + (n1-n2));



document.write("<p>El tercer número es " + n3);
document.write("<p>El cuarto número es " + n4);
document.write("<p>La suma de los dos números es: " + n3+n4);
document.write("<p>La multiplicacion de los números es: " + (n3*n4));
document.write("<p>La division de los números es: " + (n3/n4));
document.write("<p>La resta de los números es: " + (n3-n4));


document.write("<p>El area es: " + radio*radio*pi);

document.write("<p>La conversión de " + grados + " centigrados a Fharenheit es " + far);

