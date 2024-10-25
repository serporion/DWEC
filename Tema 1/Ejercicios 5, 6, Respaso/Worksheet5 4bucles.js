let palabra; 

    while (palabra != "SALIR") {
        palabra = prompt("Dame palabras. Si pones SALIR \nsaldrás del programa");
        console.log(palabra);
        document.write(palabra);         
       
    }

document.write("<br>Saliendo"); 