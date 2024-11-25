

class Tablero {

    static DIMENSIONES = 3;

    /*
    constructor() {  // Forma diferente de inicializar el tablero.
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

    static getDIMENSIONES() {
        return Tablero.DIMENSIONES;
    }  

    crearTablero() {

        for (let i = 0; i < Tablero.getDIMENSIONES(); i++) {

            this.tableroCreado[i] = [];

            for (let j = 0; j < Tablero.getDIMENSIONES(); j++) {
                this.tableroCreado[i][j] = null

            }

        }

        console.log("array ya cargado " + this.tableroCreado);

    }

    verTablero() {

        this.tableroCreado.forEach((kenny, cartman) => console.log(kenny, cartman));

    }
}


console.log("Dimensiones del tablero:", Tablero.getDIMENSIONES());


let tablero1 = new Tablero();

    tablero1.verTablero();


//export { Tablero };
/*
window.onload = () => {
    
    let tablero1 = new Tablero();

    tablero1.verTablero();

};

*/
