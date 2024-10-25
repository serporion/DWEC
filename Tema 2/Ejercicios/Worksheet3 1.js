let cadena = "Jupiter";
//let cadenaInvertida = "";
let fraseInvertida = "";

document.write("<br>");
document.write(cadena + ": ");
document.write(invierteCadena(cadena));

function invierteCadena(cadena) {

    let cadenaInvertida = "";

    for (let i = cadena.length - 1; i >= 0; i--) {

        cadenaInvertida = cadenaInvertida + cadena[i];

    }

    return (cadenaInvertida + " ");
}


let frase = "En un papel mojado se escribe el futuro";


document.write("<br>");
document.write("<br>");
document.write(frase);
document.write("<br>");
document.write("<br>");
document.write("Esta sería la frase de arriba invertida: " + inviertePalabras(frase));

function inviertePalabras(frase) {

    let arrayFrase = frase.split(" ");
    let arrayFraseInvertida = [];

    for (let i = 0; i < arrayFrase.length; i++) {
        arrayFraseInvertida = arrayFraseInvertida + invierteCadena(arrayFrase[i]);
    }

    return arrayFraseInvertida;
}
document.write("<br>");



function encuentraPalabraMasLarga(frase) {

    let arrayPalabras = frase.split(" ");
    let palabraLarga = "";

    document.write("<br>");

    for (let i = 0; i < arrayPalabras.length; i++) {

        if (palabraLarga.length < arrayPalabras[i].length) {
            palabraLarga = arrayPalabras[i];

        }

    }

    return palabraLarga;
}

document.write("La palabra mas larga es: " + encuentraPalabraMasLarga(frase));



let filtraPalabrasMasLargas = (frase, limite) => {
    let contador = 0;
    let arrayPalabras = frase.split(" ");

    for (let i = 0; i <= arrayPalabras.length - 1; i++) {

        if (arrayPalabras[i].length > limite) {
            contador++;
        }
    }
    
    return contador;

}

document.write("<br>");
document.write("<br>");
document.write("El número de palabras mayor a 3 letras en la frase " + "\n" + frase + "\n" + " es : " + filtraPalabrasMasLargas(frase, 3));


let cadenaBienFormada = (cadena) => {
    let cadena1 = cadena.toLowerCase();

    let primeraLetra = cadena1[0].toUpperCase();

    cadena1 = primeraLetra + cadena1.substring(1);

    //cadena1[0] = cadena1[0].toUpperCase();
    return cadena1;

}

let frase2 = "VayA HITOriaS Nos DA DIOs";
document.write("<br>");
document.write("<br>");
document.write("Transoformo la frase " + frase2);
document.write("<br>");
document.write("<br>");
document.write(cadenaBienFormada(frase2));


let frase3 = "cuidado que me presento en el congreso";
let frase4 = "El caos brilla cuando la desesperación emerge";
let frase5 = "ESTO ES UN SIN DIOS";

let mezclaMinusMayus = (frase) => {

    let regex = /[A-Z]/g;
    let arrayResultado = frase.match(regex);

    let contadorPalabras = frase.split(" ");
    let numeroEspacios = contadorPalabras.length - 1;

    if (arrayResultado != null) {


        if ((arrayResultado.length + numeroEspacios) == frase.length) {
            return "Todo está escrito en mayúsculas";
        } else {
            return "Existe una mezcla entre mayúsculas y minúsculas";
        }
    } else
        return "Todo está escrito en minúsculas"

}
document.write("<br>");
document.write("<br>");
document.write("Resultado: " + mezclaMinusMayus(frase4));


let cadena2 = "esed";

let palindromo = (cadena) => {

    let arrayCadena = cadena.split("");
    let arrayCadenaInvertida = [];
    let esPalindromo = true;

    for (let i = arrayCadena.length - 1; i >= 0; i--) {
        arrayCadenaInvertida = arrayCadenaInvertida + arrayCadena[i];
    }
    for (let i = 0; i < arrayCadena.length; i++) {
        if (arrayCadena[i] != arrayCadenaInvertida[i]) {
            esPalindromo = false;
        }
    }
    return esPalindromo ? "Si, es un palindromo" : "No, no es un palindromo";

}

document.write("<br>");
document.write("<br>");
document.write("Es un palindromo la palabra " + cadena2 + " : " + palindromo(cadena2));


let escribePalabraEnFigura = (palabra) => {

    let contar = palabra.length;
    let arrayPalabra = palabra.split("");
    let arrayCadenaInvertida = [];

    for (let i = arrayPalabra.length - 1; i >= 0; i--) {
        arrayCadenaInvertida = arrayCadenaInvertida + arrayPalabra[i];
    }

    for (let i = 0; i < contar; i++) {
        document.write(arrayPalabra[i]);
    }

    document.write("<br>");
 
    for (let i = contar - 2; i <= contar; i++) {
       
        for (let j = 0; j < contar-1; j++) {
            if (j == 0) {
               
                document.write(arrayPalabra[i-2]);
                
            }
            if (j == (contar-2)) {
                
                document.write(arrayCadenaInvertida[i-2]);
            } else {
                document.write("X");
            }
            
        }
        document.write("<br>");

    }
    

    for (let i = 0; i < contar; i++) {
        document.write(arrayCadenaInvertida[i]);
    }


    return "";

}
/*

if (i =! contar 1){
    document.write(arrayPalabra[j]);
}
if (i == 2 && j == 1){
    document.write(arrayPalabra[j]);
}
if (i == contar) {
    document.write(arrayCadenaInvertida[j-1]);
}
*/

document.write("<br>");
document.write("<br>");
document.write(escribePalabraEnFigura("ADIOS"));