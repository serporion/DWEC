let nombre = ["jose", "rosa", "paco", "antonio", "maria"];

//Funcion completa
function pintaNombres(nombre) {
  console.log("Hola " + nombre);
}


nombre.forEach(pintaNombres);


//No hago función de arriba, la simplifico

//nombre.forEach = (nombre) => console.log("Hola "+ nombre);

nombre.forEach(nombre => console.log("Hola con funcion arrow anó   nima " + nombre));


nombre.sort((a, b) => {
  if (a < b)
    return 1
  else if (a > b)
    return -1
  else
    return 0
}

  //num1-num2
);

console.log(nombre);


//-------------------------------------------------------------//

/*Transform this function:

function sum(num1, num2){
    return num1 + num2
}



sum(40,2)
sum(42,0)
*/
let sum = (num1, num2) => num1 + num2


console.log("the answer to everything is", sum(42, 0))


//let suma = sum(40,2) => num1 + num2;

//console.log(sum );


let suma = n => n * 2;

console.log("Resultado " + suma(5));



let array = [1, 2, 3, 4];

let array2 = array.map(n => n * 2);

//console.log(array2);
array.forEach((n => console.log(n * 2)));

console.log(array.map(n => n * 2));


const kvArray = [
  { Nombre: 1, value: "Pedro" },
  { Nombre: 2, value: "Jorge" },
  { Nombre: 3, value: "Enrique" },
];


let arrayNueva = kvArray.map(({ Nombre, value }) => ({ [Nombre]: value }));
console.log(kvArray);
document.write("<br>");
console.log(arrayNueva);
//console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
console.log("solo nombres");
let arrayNuevaSoloNombres = kvArray.map(({ value }) => value);
console.log(arrayNuevaSoloNombres);


const arrayObjetos = [
  { name: 'Pedro', age: 25 },
  { name: 'Maria', age: 30 },
];



const arrayTaxes = [
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

// Añadir la propiedad "taxes" a cada objeto
arrayTaxes.forEach(obj => {
  obj.taxes = parseInt(obj.price * 0.19); // Calcular los impuestos y asignar
});

arrayTaxes.map(x => x.taxesa = parseInt(x.price*0.19));




// Imprimir el array modificado
console.log(arrayTaxes);

function addNewAttr(array) {
  return array.map((item) => {
    const copyItem = { ...item };
    copyItem.taxes = Math.trunc(copyItem.price * 0.19)
    return copyItem;
  });
}


let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

function filterByLength(array) {
  // Tu código aquí 👈
  //array.filter (x => x.length >=4);
  return array.filter (x => x.length >=4);

}

//console.log(words.filter(word => word.length > 6));
console.log(filterByLength(words));


/*

En php
$arrayEjemplo5 = [
    [
        "customerName" => "Nicolas",
        "total" => 100,
        "delivered" => true
    ],
    [
        "customerName" => "Zulema",
        "total" => 120,
        "delivered" => false
    ]
];

*/
let arrayEjemplo5 = [
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true
  },

  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 300,
    delivered: true,
  }


];

console.log(arrayEjemplo5);

let arrayEjemplo5Resultado = arrayEjemplo5.filter(array => array.total >= 100 && array.delivered == true);

console.log(arrayEjemplo5Resultado);



function checkInString(text, term) {

  let term1 = term.toLowerCase();
  let text1 = text.toLowerCase();
  

  return text1.includes(term1);

}

let texa1 = "La historia Interminable hola";
let terma1 = "holas"

console.log(checkInString("La historia interminable hola","hosla"));



document.write("El termino " + texa1.includes(terma1) ? "si" : "no" + " está en la cadena " + texa1 );

let arrFiltraPorLetras = ["ana", "anastasia", "jorge", "geronimo"];

console.log(arrFiltraPorLetras.filter( el => el.toLowerCase().includes("Ana".toLowerCase())));


let arrayReduce = [1,2,3,4];

console.log(arrayReduce.reduce(actual,siguiente => actual + siguiente));