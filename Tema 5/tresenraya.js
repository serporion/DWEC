window.onload = () => {

    let casilla = document.querySelectorAll('div');

    let turno = {
        paso: 2
    };

    let contador = {
        vuelta: 1
    };



    let combinacionesTurnoX = [];
    let combinacionesTurnoO = [];


    casilla.forEach(cas => { cas.addEventListener('click', evento => localizaCasilla(evento, turno.paso++, contador.vuelta++, combinacionesTurnoX, combinacionesTurnoO)); });

    console.log(turno);

}


function localizaCasilla(evento, turno, contador, combinacionesTurnoX, combinacionesTurnoO) {
    console.log("En turno entra" + turno);

    let ganador;


    if (evento.target.innerText == '') {



        if (turno % 2 == 0) {
            document.getElementById(evento.target.id).innerText = 'X';
            combinacionesTurnoX.push(evento.target.id);

            if (comprobar(combinacionesTurnoX, "X")) {
                contador = 9;
            }



        } else {
            document.getElementById(evento.target.id).innerText = 'O';
            combinacionesTurnoO.push(evento.target.id);

            if (comprobar(combinacionesTurnoO, "O")) {
                contador = 9;
            }
        }

    } else {
        alert('casilla ocupada');
        contador--;
        turno--;
    }



    if (contador >= 9) {

        document.getElementById('comentario').innerText = 'JUEGO TERMINADO';

        if (ganador == "") {
            document.getElementById('ganador').innerText = "El juego acabó en tablas.";
        }


    }

}

function comprobar(movimientos, jugador) {

    let combinaciones = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['3', '6', '9'],
        ['1', '5', '9'],
        ['3', '5', '7']
    ];


    if (combinaciones.some(combinacion =>
        combinacion.every(elemento => movimientos.includes(elemento)))) {
        document.getElementById('ganador').innerText = "El ganador es " + jugador;
        document.getElementById('comentario').innerText = 'JUEGO TERMINADO';
    }

}

