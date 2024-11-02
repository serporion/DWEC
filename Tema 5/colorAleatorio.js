window.onload = () => {


    color = "";

    elegirCasilla = document.querySelectorAll("div");

    elegirCasilla.forEach(casilla => casilla.style.visibility = "hidden");

    numeroCasillas = {
        num: 0
    }

    document.getElementById("Color").innerText = "Elige dificultad";
    document.getElementById("Color").style.fontFamily = "helvetica";



    //PROBLEMAS PARA IMPLEMENTAR EL EVENTO CLICK Y LUEGO QUITARLO CON REMOVEEVENTLISTENER -> tengo que declarar color coomo variable global para 
    //no pasarla por parámetro que lo conllevaría crear una función flecha que no nos permite usar el mismo handler de la función comprobarColor.

    //elegirCasilla.forEach ( tecla => tecla.addEventListener('click', ()=> comprobarColor(tecla,color)));   

    elegirCasilla.forEach(tecla => tecla.addEventListener('click', comprobarColor));


    document.getElementById("nuevoColor").addEventListener('click', () => cambiarColores(numeroCasillas));

    document.getElementById("facil").addEventListener('click', () => easy(numeroCasillas));
    document.getElementById("dificil").addEventListener('click', () => hard(numeroCasillas));

}

function colorAleatorio() {
    return Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255);
}

function comprobarColor(evento) {


    

    if (evento.target.style.backgroundColor == color) {

        document.getElementById("cabecera").style.backgroundColor = "green";


        document.getElementById("comentario").innerHTML = "Adivinaste el color";
        document.getElementById("comentario").style.color = "red";
        document.getElementById("comentario").style.fontsize = "25px";

        document.getElementById("Color").innerHTML = "ACERTASTE";

        document.getElementById(evento.target.id).innerHTML = "Yes!";
        document.getElementById(evento.target.id).style.fontSize = "45px";

        desactivarClick(evento.target.id);

        const casillaGana = document.getElementById(evento.target.id);

        casillaGana.classList.add('casilla', 'resize');

        setTimeout(() => {
            casillaGana.classList.remove('casilla');
        }, 7000);


        setInterval(() => {
            window.location.reload();
        }, 6000);

        

    } else {
        evento.target.style.visibility = "hidden";
    }

    numeroCasillas.num =0;
}


function cambiarColores(numeroCasillas) {


    //window.location.reload();
    if (numeroCasillas.num != 0) {

    let i = 0;


    while (i < numeroCasillas.num) {
        elegirCasilla[i].style.visibility = "visible";

        elegirCasilla[i].style.backgroundColor = "rgb(" + colorAleatorio() + ")";        

        i++;
    }


    let casillaGanadora = Math.floor((Math.random() * numeroCasillas.num) + 1);

    let colorGanador = document.getElementById("" + casillaGanadora + "");


    color = colorGanador.style.backgroundColor;
    let caracteres = color.length;

    document.getElementById("Color").innerText = "RGB" + color.substr(3, caracteres) + "";

}
}

function desactivarClick(ganador) {

    let elegirCasilla = document.querySelectorAll("div");

    elegirCasilla.forEach(tecla =>
        tecla.removeEventListener('click', comprobarColor)
    );

    elegirCasilla.forEach(tecla => {

        if (tecla.id != ganador) {
            caer(tecla);
        }
    });

}

function caer(tecla) {

    tecla.classList.add('moverPerdedores');

}


function easy(numeroCasillas) {

    elegirCasilla.forEach(casilla => casilla.style.visibility = "hidden");

    document.getElementById("dificil").style.backgroundColor = "";
    document.getElementById("facil").style.backgroundColor = "red";
    

    numeroCasillas.num = 3;    
    cambiarColores(numeroCasillas);
    
}

function hard(numeroCasillas) {

    elegirCasilla.forEach(casilla => casilla.style.visibility = "visible");

    document.getElementById("dificil").style.backgroundColor = "red";
    document.getElementById("facil").style.backgroundColor = "";

   
    numeroCasillas.num = 6;
    cambiarColores(numeroCasillas);

}