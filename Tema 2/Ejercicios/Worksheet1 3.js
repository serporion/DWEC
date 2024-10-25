var segundos = 6;
document.contains = "";

function miFuncion1() {
    //document.open();

    /*
    if (segundos == 0) {
        document.write("Se acabo el tiempo");
        return;
    }
        */

    if (segundos == 0) 
        clearInterval(intervalo);

    console.log("Llamada a mi funcion");
    document.write(segundos);
    segundos--;
    document.close();

    //clearInterval(miFuncion1);

}


//miFuncion();
//setInterval(miFuncion(j), 1000);
//setTimeout(miFuncion(), 5000);

let intervalo = setInterval(miFuncion1, 1000);
//setInterval(miFuncion1, 1000);


if (segundos == 0) {
    document.write("Salímos del contador");
}