const a = [1,2,3,4];
 
let b = [3,5,9];

 

  let array = [...a, b];

  document.write(array.length -1);

  for(let i of array){
    document.write("<br>");
    document.write(i);
    document.write("<br>");
  }


  class Alumno {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Función flecha, que conserva el contexto de 'this'
    saludarFlecha = () => {
        console.log(`Hola, ${this.nombre} desde la función flecha.` );
    }

    // Función tradicional, que no conserva el contexto de 'this'
    saludarTradicional() {
        console.log(`Hola, ${this.nombre} desde la función tradicional.`);
    }
}


const instancia = new Alumno('Juan');
const instancia2 = new Alumno('Pedro');

// Usando la función flecha
instancia.saludarFlecha(); // Hola, Juan desde la función flecha.

// Usando la función tradicional correctamente desde la instancia
instancia.saludarTradicional(); // Hola, Juan desde la función tradicional.


const saludar = instancia2.saludarTradicional.bind(instancia2);
saludar(); // Hola, Juan desde la función tradicional USANDO BIND QUE VINCULA CON EL CONTEXTO DE LA INSTANCIA

// Usando la función tradicional sin el contexto de la instancia
const saludarMal = instancia2.saludarTradicional;
console.log('No saluda, porque se ha perdido el contexto de la instancia llamando a saludarMal():');
/*
saludarMal(); // Aquí es donde ocurre el error: Cannot read properties of undefined (reading 'nombre')
*/


function factorial(n) {

    console.log(factorial.arguments[0]); 

    if (n == 1) {
        return 1; //caso base
    }else {
        return n*factorial(n-1);
    }
    
}

factorial(2);

function repite (){
    console.log("hola");
}

let parar = setInterval(repite,1000);

function parada(){
    clearInterval(parar);
}

setTimeout(parada,5000);


let resu = (x,y) => x+y;
let cuadrado = base => Math.pow(base,2);
console.log(cuadrado(3));

console.log(resu(5));

var resud = function(x, y) {
    y = (typeof y !== 'undefined') ? y : 0; // Asignar 0 si y no está definido
    return x + y;
};

console.log(resud(5)); // Esto imprimirá 5

console.log('23' * false); // Imprime 23

console.log(parseInt('3 manzanas'));

console.log((3/1).toFixed(2));

const foo = ["one", "two", "three"];

const [aa, bb, cc] = foo;

console.log(aa);

function getMonthName(mo) {
    mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    if (months[mo]) {
      return months[mo];
    } else {
      throw new Error("InvalidMonthNumber"); // throw keyword is used here
    }
  }
  
  try {
    // statements to try
    monthName = getMonthName(53); // function could throw exception
    console.log(monthName);
  } catch (e) {
    monthName = "unknown"
    console.log("Caught exception: " + e + ". Mes " + monthName); // ;
    //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
  }
  

  