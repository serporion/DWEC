let edad = parseInt(prompt("Dame tu edad "));
let localidad = prompt("Dame tu localidad");

localidad = localidad.toLocaleLowerCase();


if (edad >= 18 && edad <=30){

    if (localidad == "madrid"){
        document.write("<br>Enhorabuena, puedes pedir el carnet de empresarios emprendedores");
    }

}
   