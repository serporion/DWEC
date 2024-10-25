

// 2. Crea una función que simule el 
function lanzamiento() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

//lanzamiento();
var uno = 0;
var dos = 0;
var tres = 0;
var cuatro = 0;
var cinco = 0;
var seis = 0;
var probable = 0;


for (var i = 0; i < 6000; i++) {

    let probable = lanzamiento();

    switch (probable) {
        case 1:
            uno += 1;
            break;
        case 2:
            dos += 1;
            break;
        case 3:
            tres += 1;
            break;
        case 4:
            cuatro += 1;
            break;
        case 5:
            cinco += 1;
            break;
        default:
            seis += 1;
            break;
    }

}

document.write("El 1 ha salido " + uno + ". Probabilidad de " + ((uno / 6000) * 100).toFixed(2) + "%" + "<br>El 2 ha salido" + dos + ". Probabilidad de " + ((dos / 6000) * 100).toFixed(2) + "%" + "<br>El 3 ha salido" + tres + ". Probabilidad de " + ((tres / 6000) * 100).toFixed(2) + "%" + "<br>El 4 ha salido" + cuatro + ". Probabilidad de " + ((cuatro / 6000) * 100).toFixed(2) + "%" + "<br>El 5 ha salido" + cinco + ". Probabilidad de " + ((cinco / 6000) * 100).toFixed(2) + "%" + "<br>El 6 ha salido" + seis + ". Probabilidad de " + ((seis / 6000) * 100).toFixed(2) + "%");



// Inicializa un objeto para contar las apariciones de cada número
const conteo = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

// Función para simular el lanzamiento de un dado
function lanzamiento() {
    return Math.floor(Math.random() * 6) + 1;
}

// Función recursiva para simular los lanzamientos
function simularTiradas(tiradasRestantes) {
    if (tiradasRestantes === 0) {
        // Si ya no hay tiradas restantes, calcula las probabilidades
        for (let num in conteo) {
            const probabilidad = (conteo[num] / 4820) * 100;
            console.log(`Probabilidad de ${num}: ${probabilidad.toFixed(2)}%`);
        }
        return;
    }else{

    

    // Realiza un lanzamiento
    const resultado = lanzamiento();
    conteo[resultado]++; // Aumenta el conteo del número obtenido

    // Llama a la función de nuevo con un tirada menos
    return simularTiradas(tiradasRestantes - 1);
    }
}

// Comienza la simulación con 6000 tiradas
simularTiradas(4820);



//4. Función recursiva que te de el volumen de una esfera.
function volumen(r, b = 3) {
    let fijo = (4 / 3) * Math.PI;


    if (b == 0) {
        return fijo;
    } else
        return r * volumen(r, b - 1);
}


console.log(volumen(2));


//6. Crea una funciòn de manera recursiva que te de la potencia de un numero que des.

function potenciaDeFormaRecursiva(base, potencia) {
    if (potencia <= 1)
        return base * 1;
    else
        return base * (potenciaDeFormaRecursiva(base, potencia - 1));

}

document.write("<br><br>Potencia de forma recursiva: " + potenciaDeFormaRecursiva(2, 3));


document.write("<br><br>Factorial de un número dado");


document.write("<table border=1>");
document.write("<tr><th>Numero</th><th>Factorial</th></tr>");
//document.write("t" + i + "</td><td>" + factorial(i) + "</td></tr>");

document.write("<br>");
document.write("<br>");

for (let i = 1; i <= 10; i++) {

    document.write("<tr><td> Factorial de " + i + " es: </td>" + "<td>" + factorial(i) + "</td></tr>");

    function factorial(i) {
        if (i == 1) {
            return 1;
        } else {
            return i * factorial(i - 1);
        }
    }
}

document.write("</table>");

document.write("<br>");
document.write("<br>Funciones ejercicios hoja 1-a");
document.write("<br>");



/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */


function isOdd(x) {
    //return x % 2 != 0 ;
    return x % 2 == 0 ? false : true;
}
document.write("<br>");
document.write("Funcion de evaluacion de un número impar");
document.write("<br>");
document.write(isOdd(3));
document.write("<br>");



/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

function inRange(x, min, max) {

    return ((x >= min) && (x <= max));

}

document.write("<br>");
document.write("Función que devuelve si un número se encuentra dentro de un rango");
document.write("<br>");
document.write(inRange(80, -4, 10));
document.write("<br>");



/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

var numbers = [3, 8, 7, 30, 5, 9, 3, 2, 1];
var num = 6;

function getBiggestNumer(number) {

    let mayor = -Infinity;

    for (let i = 0; i < numbers.length-1; i++) {
        if (mayor < numbers[i]) {
            mayor = numbers[i];
        }
    }
    
    return mayor;
}
document.write("<br>");
document.write("Función que devuelve el número más grande del arrray");
document.write("<br>");
document.write(getBiggestNumer(num));
document.write("<br>");



/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */

function getPercentage(number, percentage) {

    let resultado = 0;

    resultado = ((percentage / 100) * number).toFixed(0);

    return resultado;
}

document.write("<br>");
document.write("Función que devuelve el porcentaje correspondiente de un número");
document.write("<br>");
document.write(getPercentage(200, 10));
document.write("<br>");


/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

let colores = ["red", "blue", "green"];


function getRandomColorSequence(colores, length) {

    let secuencia = [];

    for (let i = 0; i < length; i++) {

        random = parseInt(Math.random() * (colores.length))

        secuencia.push(colores[random]);
    }

    let formateo = "";
    

    for (let i = 0; i < secuencia.length; i++) {

        
        if (i == (secuencia.length - 1)) {
            formateo = formateo + "'" + secuencia[i] + "'";             
        }
        else {
            formateo = formateo + "'" + secuencia[i] + "', ";
        }
  

    }
    return formateo;

}


document.write("<br>");
document.write("Función que devuelve una secuencia de colores que existen en un array pero de forma aleatoria y con un número de colores que se pasa");
document.write("<br>");
document.write("[" + getRandomColorSequence(colores, 4) + "]");
document.write("<br>");


/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */


function getRockPaperScissor() {

    let juego = ["rock", "paper", "scissor"];

    let resultado;

    resultado = juego[parseInt(Math.random()*juego.length)];    

       
    return resultado;

}


document.write("<br>");
document.write("Función que devuelve una una jugada aleatoria de piedra, papel o tijera");
document.write("<br>");
document.write("\"" + getRockPaperScissor() + "\"");
document.write("<br>");



/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function getRockPaperScissorRandomSequence(length){

    let juego = ["paper", "rock", "scissor"];

    let secuencia =[];


    for (let i = 0; i < (length); i++){

        secuencia.push(juego[parseInt(Math.random()*(juego.length))]);
    }

    return secuencia;

}

document.write("<br>");
document.write("Función que devuelve una una jugada aleatoria de piedra, papel o tijera tantas veces como le indiques");
document.write("<br>");
document.write("\"" + getRockPaperScissorRandomSequence(5) + "\"");
document.write("<br>");


/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */

let arrayNumerosParaFiltrar = [1,2,3,4,5,6,7,8,9];

function filterNumbersGreaterThan (numero,filter){

    let resultado = [];

        for (let recorre of numero){
            if (recorre < filter){
                resultado.push(recorre);
            }
        }


    return resultado;
}

document.write("<br>");
document.write("Función que devuelve un array que sean mayor a cierto número x dejando solo los que sean menores a este");
document.write("<br>");
document.write("[" + filterNumbersGreaterThan(arrayNumerosParaFiltrar, 5) + "]");
document.write("<br>");


/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

function getFactorial(n){
    return n == 1 ? 1 : n * getFactorial(n-1);
}

document.write("<br>");
document.write("Función que devuelve el factorial de un número");
document.write("<br>");
document.write(getFactorial(5));
document.write("<br>");


/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */


function areArraysEqual(a, b){
    
    if (a.length != b.length){
        return false;
    }    
    
    for (let i = 0; i < a.length; i++){
        if (a[i] != b[i]){
            return false;
        }
    }
    return true;

}

let a = [1, 4];
let b = [1, 1, 4];


document.write("<br>");
document.write("Función que devuelve true si dos arrays son iguales (tienen los mismos ítems en el mismo orden");
document.write("<br>");
document.write(areArraysEqual(a,b));
document.write("<br>");


/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */


function toHackerSpeak(text){
    
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i]; // Carácter actual

        
        if (char === "a") {
            result += "4"; 
        } else if (char === "e") {
            result += "3"; 
        } else if (char === "i") {
            result += "1"; 
        } else if (char === "o") {
            result += "0"; 
        } else if (char === "s") {
            result += "5"; 
        } else {
            result += char; 
        }
    }


    return result;
    //return text.replace(/a/g, "4").replace(/e/g, "3").replace(/i/g, "1").replace(/o/g, "0").replace(/s/g, "5");

}

document.write("<br>");
document.write("Función que convierte un string a \"Hacker Speak\"");
document.write("<br>");
document.write(toHackerSpeak("I'm a hacker now"));
document.write("<br>");


/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */


function getFileExtension(file) {
    return file.split('.').pop();
}


document.write("<br>");
document.write("Función que obtiene la extensión de un archivo");
document.write("<br>");
document.write(getFileExtension("imagen.jpg"));
document.write("<br>");



/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 */

let arr1 = [[1, 5, 4], [3, 10], [2, 5]];

function flatArray(arr) {
    return arr.flat();
}

let flatArrayFlecha = arr => arr.flat();

document.write("<br>");
document.write("Función que dada un array 2D, devuelve un array 1D que contiene todos los ítems");
document.write("<br>");
document.write(flatArray(arr1));
document.write("<br>");
document.write("<br>");
document.write("Convertida a Flecha" + flatArrayFlecha(arr1));
document.write("<br>");



/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

let arr2 = [4, 5, 10, 4, 10, 2];

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);

  /*
    return arr.filter (
        function (item, index) {
            return arr.indexOf(item) === index;

        })

*/
}    

let nuevaArray1 = arr2.filter((item,index) => arr2.indexOf(item)===index);


document.write("<br>");
document.write("Función que remueve duplicados de un array");
document.write("<br>");
document.write(removeDuplicates(arr2));
document.write("<br>");
document.write("<br>");
document.write("Sin usar la función removeDuplicate");
document.write("<br>");
document.write(nuevaArray1);
document.write("<br>");
document.write("<br>");


for(let a of arr2){document.write(a);}
document.write("<br>");
document.write("<br>");

/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string 
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * 
 * @example
 *  countLetter("a", "javascript") // returns 2
 */


function countLetter(letter, text) {
    return text.split(letter).length ;
}


document.write("<br>");
document.write("Función que devuelve la cantidad de veces que una letra aparece en un string");
document.write("<br>");
document.write(countLetter("a", "javascript"));
document.write("<br>");