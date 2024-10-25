
/*
let nombre = prompt("Dame tu nombre");

document.write("<p>" + nombre[nombre.length -1]);

let encontrado = false;

const arr = [3,5,7];

for(let i of arr)  
    document.write(i + "<br>");

*/

let persona ={};
persona.nombre = "Pedro";
persona.apellidos = "Sanchez";
let paso = true;


for (let miembro in persona)
    document.write(miembro + "<br>");

for (let miembros in persona) {
    if (miembros == "edad"){
        document.write("He encontrado edad");
    }else if (miembros == "nombre"){
        document.write("He encontrado nombre");
        break;
    }else{
        document.write("No ha encontrado nada");
    }
}