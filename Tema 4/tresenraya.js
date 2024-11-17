window.onload = () => {

    let casillas = document.querySelectorAll('div');

    let turno = {
        paso: 2
    };

    let contador = {
        vuelta: 1
    };

    let combinacionesTurnoX = [];
    let combinacionesTurnoO = [];

    casillas.forEach(cas =>  cas.addEventListener('click', evento => localizacasillas(evento, turno, contador, combinacionesTurnoX, combinacionesTurnoO)));

    console.log(turno);

    document.getElementById('reiniciar').addEventListener('click', () => reiniciarPartida( turno, contador, combinacionesTurnoX, combinacionesTurnoO));

}


function localizacasillas(evento, turno, contador, combinacionesTurnoX, combinacionesTurnoO) {
    console.log("En turno entra" + turno);

    if (evento.target.innerText === '') {
        if (turno.paso % 2 === 0) {
            evento.target.innerText = 'X';
            combinacionesTurnoX.push(evento.target.id);
            if (comprobar(combinacionesTurnoX, "X")) contador.vuelta = 9;
        } else {
            evento.target.innerText = 'O';
            combinacionesTurnoO.push(evento.target.id);
            if (comprobar(combinacionesTurnoO, "O")) contador.vuelta = 9;
        }
        turno.paso++;
        contador.vuelta++;
    } else {
        alert('Casilla ocupada');
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


    //VER ESTA FORMA, diferencias entre some y every con find.
    /*
    if (combinaciones.some(combinacion =>
        combinacion.every(elemento => movimientos.includes(elemento)))) {
        document.getElementById('ganador').innerText = "El ganador es " + jugador;
        document.getElementById('comentario').innerText = 'JUEGO TERMINADO';
    }
    */


    let combinacionGanadora = combinaciones.find(combinacion =>
        combinacion.every(elemento => movimientos.includes(elemento))
    );

    if (combinacionGanadora) { 
            
            combinacionGanadora.forEach(casilla => { 
                
            const casillaGana = document.getElementById(casilla);

            casillaGana.classList.add('casilla');
                        
            setTimeout(() => {
                casillaGana.classList.remove('casilla');
            }, 3000);

        });

        document.getElementById('ganador').innerText = "El ganador es " + jugador;
        document.getElementById('comentario').innerText = 'JUEGO TERMINADO';
    }

}

function reiniciarPartida(turno, contador, combinacionesTurnoX, combinacionesTurnoO) {
    
    let casillas = document.querySelectorAll('div');

    casillas.forEach(cas => {
        cas.innerText = ''; 
        cas.classList.remove('casilla'); 
    });

    
    combinacionesTurnoX.length = 0;
    combinacionesTurnoO.length = 0;
    turno.paso = 2;
    contador.vuelta = 1;

    
    document.getElementById('comentario').innerText = "";
    document.getElementById('ganador').innerText = "";
}

