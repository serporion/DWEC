

let numeros = parseInt(prompt("Dame un numero"));

if (isNaN(numeros)) {
    document.write("Me tienes que dar un número");
} else {

    while (numeros) {
        console.log(numeros);
        numeros = parseInt(prompt("Dame otro numero"));

        if (isNaN(numeros)) 
            document.write("Me tienes que dar un número");
    }
}

document.write("<br>Fin del programa"); 