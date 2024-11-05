

//import {Tablero} from './tresenraya.js';
//import './tresenraya.js';

//class Juego extends tresenraya.Tablero {


    class Tablero {

        static #DIMENSIONES = 3;
    
        /*
        constructor() {
            // Inicializa el tablero con un array bidimensional de 3x3
            this.tableroCreado = Array.from({ length: Tablero.#DIMENSIONES }, () => 
                Array.from({ length: Tablero.#DIMENSIONES }, () => null)
            );
        }    
        */
    
        constructor() {
    
            this.tableroCreado = [];
            this.crearTablero();
    
        }
    
    
        crearTablero() {
    
            for (let i = 0; i < Tablero.#DIMENSIONES; i++) {
    
                this.tableroCreado[i] = [];
    
                for (let j = 0; j < Tablero.#DIMENSIONES; j++) {
                    this.tableroCreado[i][j] = null
    
                }
    
            }
    
            console.log("array ya cargado " + this.tableroCreado);
    
        }
    
        verTablero() {
    
            console.log(`Tablero: `)
            this.tableroCreado.forEach((kenny, cartman) => console.log(kenny, cartman));
    
        }
    }


class Juego extends Tablero {

    #turnos = 3;
    #jugadores = 2;

    

    constructor(jug1, jug2, tableroJugar) {

        super();
        this.jugador1 = jug1;
        this.jugador2 = jug2;
        this.tableroJugar = tableroJugar;

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
        
        let combinacionesX = [];
        let combinacionesO = [];

    }


    presentar() {
        console.log(`Jugador 1 es: ${this.jugador1}`)
        console.log(`Jugador 2 es: ${this.jugador2}`)
        console.log(`Tablero: `)
        this.tableroJugar.verTablero();
    }

    jugar() {

        let paso = false;
        let turnoJugador = 1;
        let jugadorTurno = 1;

        let equis = "X";
        let ceros = "O";

        do {


            if (turnoJugador == 3 && combinacionesO.length == 3) {
                console.log("Juago acabado en tablas");
            }else {

            
            
            console.log(`Turno: ${jugadorTurno}`);

            do {

                if (jugadorTurno%2 != 0) {                

                    console.log(`Jugador: ${this.jugador1}`);
                    marcar(combinacionesX, equis);

                }else if (this.jugadorTurno%2 == 0) {
                    console.log(`Jugador: ${this.jugador1}`);
                    marcar(combinacionesO, ceros);
                }

                this.tableroJugar.verTablero();
                    
                

                jugadorTurno++;




            }while (jugadorTurno <= this.#jugadores);


            turnoJugador++;

            console.log(`Turno: ${this.turno}`);
            console.log(`Jugador: ${jugador}`);

            
            
            this.tableroJugar.verTablero();
            
            }
            
           

        }while(turnoJugador < this.#turnos);


    }

    marcar(movimientosJugador,opcion,posicion){


        if (posicion === ""){
       
            console.log("Marcado: " + opcion + " en " + posicion);
            movimientosJugador.push(opcion);
               
        } else {
            console.log('Casilla ocupada');
        }


        let combinacionGanadora = combinaciones.find(combinacion =>
            combinacion.every(elemento => movimientosJugador.includes(elemento))
        );
    
        if (combinacionGanadora) { 
            
            console.log("El ganador es " + opcion=="X" ? ""+this.jugador1+"" : ""+this.jugador2+"");
            
            document.getElementById('ganador').innerText = "El ganador es " + jugador;
            document.getElementById('comentario').innerText = 'JUEGO TERMINADO';
        }



    }

}




window.onload = () => {

    let jugadorA = "Pedro";
    let jugadorB = "Luis";

    let tableroJugada = new Tablero();

    let juego1 = new Juego(jugadorA, jugadorB, tableroJugada);


   

    juego1.presentar();

    juego1.jugar();

}
