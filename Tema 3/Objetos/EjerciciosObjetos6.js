
class Lambdasiana {
    constructor(objetos) {

        this.nombre = objetos.nombre;
        this.edad = objetos.edad;
        this.ubicacion = objetos.ubicacion;
    }

    speak() {
        return `Hello my name is ${this.nombre}, I am from ${this.ubicacion}.`;
    }


    speakAll(){
        return this.objetos.map(objeto => {
            return `Hello, my name is ${objeto.nombre}, I am ${objeto.edad} years old and I am from ${objeto.ubicacion}.`;
        }).join('\n'); // Unir las frases en una sola cadena con saltos de línea
    
    }
    
   
}

class Instructor extends Lambdasiana {
    constructor(objetoInstructor) {
        super(objetoInstructor);  

        
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




class ProyectManager extends Instructor {
    constructor (objetoProyectManager) {

        super(objetoProyectManager),

        this.gradClassName = objetoProyectManager.gradClassName;
        this.favInstructor = objetoProyectManager.favInstructor;
    
    }


    standUp(channel) {
        return `${this.nombre} announces to ${channel}, @channel standy times!`
    }

    debugsCode(student, materia){
        return `${this.nombre} debugs ${student.nombre}'s code on ${materia}`;
    }
    
}


let objetoProyectManager = {
    nombre:"Vanesa",
    edad:"28",
    ubicacion:"Alcorcón",
    specialty:"redux",
    favLanguage:"JavaScript",
    catchPhrase:"Don't forget the homies",
    gradClassName: "CS1",
    favInstructor: "Sean",
    color: "amarillo",
    tamano: "grande"
    

}


let objetoEstudiante = {
    nombre: "Carlos",
    edad: "30",
    ubicacion: "Madrid",
    estudiosPrevios: "Ingeniero Civil",
    nombreClase: "CS132",
    materiasFavoritas: ['HTML', 'CSS', 'JS']
};

let estudiante1 = new Student(objetoEstudiante);


let manager = new ProyectManager(objetoProyectManager);


console.log(manager.standUp("#development")); 
console.log(manager.debugsCode(estudiante1, 'JavaScript')); 
console.log(manager.color + ' Si no está definido en el constructor, el valor no sale');


manager.color = 'azul';
console.log(manager.color);

www.skillicons.com