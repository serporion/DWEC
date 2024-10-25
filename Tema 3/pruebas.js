

function potencias(b, e) {

    const argsArray = Array.from(arguments); // Convertir arguments a array
    console.log("Arguments:", argsArray);

    for (let i of argsArray) {
        console.log(i);
    }

    if (e == 0) {

        return 1;
    } else
        //console.log("Arguments: "); 
        //console.log( expo.arguments);
        return b * potencias(b, e - 1);

}

console.log(potencias(2, 3));


const arrayM = [1, 4, 5, 9];

/*
function maximoDelArray(arrayM){
    let maximo = arrayM.map()

    return maximo;
}

maximoDelArray(arrayM);
*/


const array1 = [1, 4, 9, 16];

// Pass a function to map

function fun(x) {
    return x * 2;
}

const map1 = array1.map(fun);

console.log(map1);



//EJERCICIOS FUNCIONES
//EJERCICIOS FUNCIONES
//EJERCICIOS FUNCIONES


//1. Define una función máxima que dado un array de números devuelve el número más grande.

/*
let arrayOrden = [];

let valor1 =  5; //prompt("dame un valor");
let valor2 =  1; //prompt("dame un valor");
let valor3 =  7; //prompt("dame un valor");
let valor4 =  14; //prompt("dame un valor");




arrayOrden.push(valor1);
arrayOrden.push(valor2);
arrayOrden.push(valor3);
arrayOrden.push(valor4);
/*
console.log(arrayOrden);

//Funcion Math.max Directamente 
console.log(Math.max(...arrayOrden));

*/


let arrayOrden = [5, 1, 7, 14];

function maxima(array) {
    array.sort((a, b) => a - b);
    return array[array.length - 1];
}



console.log(maxima(arrayOrden));

for (let i of arrayOrden) {
    console.log(i);  // El array ya está ordenado
}


function volumen(r, b = 3) {
    let fijo = (4 / 3) * Math.PI;


    if (b == 0) {
        return fijo;
    } else
        return r * volumen(r, b - 1);
}


console.log(volumen(2));


let arrayDatos = [{
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
},
{
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
},
{
    name: 'Zulema',
    lastName: 'Vicente',
    age: 21
}];


function getNombre(array) {
    return console.log(array.map((array) => array.name));
}

arrayDatos


getNombre(arrayDatos);

let arrayTaxex = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    }
];





function getTaxes(array) {
    return array.map((array) => array.taxes = parseInt(array.price * 0.19));
}

console.log(getTaxes(arrayTaxex));

function anado(array) {
    for (let i = 0; i < array.length; i++) {
        array.taxex = (array.price * 19);
    }
}

console.log(anado(arrayTaxex));

for (let i of arrayTaxex) {
    console.log(i);
}


//Anañir campo y crear sobre otros campos calculados
arrayTaxex.map(x => x.taxesa = parseInt(x.price * 0.19));

for (let i of arrayTaxex) {
    console.log(i);
}


let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

function filterByLength(array) {
    // Tu código aquí 👈
    //array.filter (x => x.length >=4);
    return array.filter(x => x.length <= 5);

}

//console.log(words.filter(word => word.length > 6));
console.log(filterByLength(words));


//Filtra las compras que cumplan con las condiciones

//Busca dentro de un string y descubre si ¿Tiene la clave?

let textTexto = "Ana tiene una sabana"
let termimo = "ana";

//let texxxx = textTexto.

console.log(textTexto.toLowerCase().includes(termimo.toLowerCase()));


//Crea un buscador que retorne palabras de acuerdo parámetro de búsqueda


console.log(words.filter(x => x.includes(termimo)));


//Calcula la suma total de los elementos

function calcSum(numbers) {

    return numbers.reduce((a, b) => a + b, 0);
}

arrayPepe = [];
console.log(calcSum(arrayPepe));


//Calcular la suma de todas las compras entre objetos

function calcTotal(orders) {

    let suma = 0;

    orders.map(x => suma += x.total);

    for (let i of orders) {
        console.log(i);
    }

    return suma;
}



//Retornar si al menos alguno de los números es par  

function checkArray(numbers) {
    // Tu código aquí 👈




    let paso = numbers.find(x => x % 2 == 0) ? true : false;

    return paso;

}



//Retorna un booleano si todos los elementos son pares


let arrayPARES = [2, 4, 6, 8, 10];


function checkArrayPares(array) {
    // Tu código aquí 👈
    let tamano = array.length;
    if (tamano) {

        let array2 = (array.map(x => x % 2 == 0));

        let verdaderos = array2.filter(x => x == true);

        return (verdaderos.length == tamano) ? true : false
    } else
        return false;


}

console.log(checkArrayPares(arrayPARES));

/*function checkArray(array) {
  return array.length > 0 && array.every(x => x % 2 === 0);
}
/* Con esta más fácil


//Resuelve si dentro de una lista de cartas tienes el

*/


function findAs(deck) {
    // Tu código aquí 👈

    return deck.find(x => x == "AS");
}





function findAs(deck) {
    // Tu código aquí 👈

    return deck.find(x => x == "AS") ? "Tienes el AS" : "No, tienes el AS";
}



function FindIndexMyKey(array) {


    return array.find(x => x == "MyKey") ? array.findIndex(x => x == "myKey") : false;


}


//Junta de un array a un String

//return array.join();

let array3 = ["a", "b", "c"];
let array4 = ["d", "e", "f"];
var array5 = [];

function joinArray(array1, array2) {

    return array1.concat(array2);

    //return array5;
}


console.log(joinArray(array3, array4));


console.log(Math.max.apply(null, arrayPARES));

array3.forEach(x => console.log(x));


let arrayNormal = ["Juan", 30, "Madrid"];

arrayNormal.forEach((valor, indice) => {
    console.log(`Índice ${indice}: ${valor}`);
});


let arrayAsociativo = [
    {
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid"
    },
    {
        nombre: "Juand",
        edad: 303,
        ciudad: "dMadrid"
    }
];



arrayAsociativo.forEach(objeto => {
    Object.keys(objeto).forEach(key => {
        console.log(`${key}: ${objeto[key]}`);
    });
    console.log('---'); // Para separar cada objeto visualmente
});

    /* SOLO SACA UN OBJETO. HAY QUE HACER OTRO FOR EACH PARA EL OBJETO.

    Object.keys(arrayAsociativo).forEach(key => {
        console.log(`${key}: ${arrayAsociativo[key]}`);
    });
    */


