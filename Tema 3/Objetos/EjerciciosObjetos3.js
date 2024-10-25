
let arrayLambda = [

    {
        nombre: "Jorge",
        edad: "25",
        ubicacion: "Móstoles"
    },

    {
        nombre: "Mario",
        edad: "30",
        ubicacion: "Madrid"
    }

]


let objetito = {
    nombre:"Mario",
    edad:"25",
    ubicacion:"Mostoles"
}

console.log(objetito.nombre);


class Lambdasiana {

    constructor(objetos){

        this.objetos = objetos;

    }

    speak(){

        return (`Hello my name is ${this.objetos.nombre}, I am from ${this.objetos.ubicacion}.`);

    }


    speakAll(){
        return this.objetos.map(objeto => {
            return `Hello, my name is ${objeto.nombre}, I am ${objeto.edad} years old and I am from ${objeto.ubicacion}.`;
        }).join('\n'); // Unir las frases en una sola cadena con saltos de línea
    
    }
    
   
}

let lamb1 = new Lambdasiana(arrayLambda);
let lamb2 = new Lambdasiana(objetito);

console.log(lamb2.speak());
console.log(lamb1.speakAll());