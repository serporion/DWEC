function myFunc(cadena) {
  cadena = "30";
}

let cadena = "45";

console.log(cadena); // 45
myFunc(cadena);
console.log(cadena); // 30



const arrayPosiciones = [1,2,3,4,5];



//FUNCIONES ANONIMAS, FLECHA

function leerArray (array) {

    //return console.log(array);
}

setInterval(function () {
    leerArray(arrayPosiciones);
}, 1000)

setInterval(()=>leerArray(arrayPosiciones), 1000);


function leerArray1 () {
  const arrayPosiciones = [6,7,8,9];
  //return console.log(arrayPosiciones);
}

setInterval(leerArray1,1000);


let multiplica = function cuadrado (n){
    return n*n;
}

console.log(multiplica(2));



function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
