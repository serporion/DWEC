// Objeto de ejemplo para el estudiante
let objetoEstudiante = {
    nombre: "Carlos",
    edad: "30",
    ubicacion: "Madrid",
    estudiosPrevios: "Ingeniero Civil",
    nombreClase: "CS132",
    materiasFavoritas: ['HTML', 'CSS', 'JS']
};


class Lambdasiana {
    constructor(objetos) {

        this.nombre = objetos.nombre;
        this.edad = objetos.edad;
        this.ubicacion = objetos.ubicacion;
    }

    speak() {
        return `Hello my name is ${this.nombre}, I am from ${this.ubicacion}.`;
    }
}


class Student extends Lambdasiana {
    constructor(objetos) {
        
        super(objetos);

        this.estudiosPrevios = objetos.estudiosPrevios;
        this.nombreClase = objetos.nombreClase;
        this.materiasFavoritas = objetos.materiasFavoritas;
    }

    listSubjects() {
        return `Loving ${this.materiasFavoritas.join(', ')}!`;
    }

    PRAssignment(subject) {
        return `${this.nombre} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.nombre} has begun sprint challenge on ${subject}`;
    }
}


let estudiante1 = new Student(objetoEstudiante);


console.log(estudiante1.speak()); 
console.log(estudiante1.listSubjects()); 
console.log(estudiante1.PRAssignment('JavaScript')); 
console.log(estudiante1.sprintChallenge('JavaScript')); 