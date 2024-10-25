
//import { Lambdasiana } from './EjerciciosObjetos3.js'; 



let objetitoInstructor = {
    specialty:"redux",
    favLanguage:"JavaScript",
    catchPhrase:"Don't forget the homies"
}


let objetito = {
    nombre:"Mario",
    edad:"25",
    ubicacion:"Mostoles"
}

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


class Instructor extends Lambdasiana{

    constructor(objetoInstructor, objetos){

        super(objetos);

        this.objetoInstructor = objetoInstructor;

    }
    demo(subject){
        return `I am an instructor of ${subject}. Imparto ${this.objetoInstructor.favLanguage}.`;
    }

    grade(objeto, subject){
        return `${objeto.nombre} receives a perfect score on ${subject}.`;
    }

  }


let instructor1 = new Instructor(objetitoInstructor, objetito);

console.log(instructor1.demo("DWEC"));
console.log(instructor1.grade(objetito, "Desing Web"));
console.log(instructor1.speak());



        /* De otra forma */
        /*
        class Instructor extends Lambdasiana {
            constructor(objetoInstructor, objetos) {
                super(objetos);  // Pasamos el objeto 'objetos' a la clase base

                // Asignamos las propiedades individuales del objeto instructor, no el objeto completo
                this.specialty = objetoInstructor.specialty;
                this.favLanguage = objetoInstructor.favLanguage;
                this.catchPhrase = objetoInstructor.catchPhrase;
            }

            demo(subject) {
                return `I am an instructor of ${subject}. I specialize in ${this.favLanguage}.`;
            }

            grade(objeto, subject) {
                return `${objeto.nombre} receives a perfect score on ${subject}.`;
            }
        }
        */