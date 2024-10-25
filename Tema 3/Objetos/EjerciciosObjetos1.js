
/*

TASK 1

Write a Person class whose constructor initializes name and age from arguments.
All instances of Person should also initialize with an empty stomach array.
Give instances of Person the ability to .eat("someFood"):
When eating an edible, it should be pushed into the stomach.
The eat method should have no effect if there are 10 items in the stomach.
Give instances of Person the ability to .poop():
When an instance poops, its stomach should empty.
Give instances of Person a method .toString():
It should return a string with name and age. Example: "Mary, 50"
*/

class Persona {

    #estomago = [];

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    comer(comida){
        if (this.#estomago.length == 2){
            console.log("Tiene que cagar. Te vacío el estómago");
            this.cagar();

        }else{
            this.#estomago.push(comida);
        }
    }

    cagar(){
        this.#estomago = [];
    }   

    toString(){
       
            return "Nombre: "+ this.nombre + ", Edad: " + this.edad;
    }

}


let arrayPersona = [];

let per1 = new Persona('María','30');


per1.comer("Pollo");
per1.comer("Arroz");



per1.comer("Leche");

arrayPersona.push(per1);




console.log(per1.toString())

//document.write(per1.toString());
document.write(per1);



