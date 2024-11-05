



    class tablero {


        constructor(base, altura) {

            this.base = base;
            this.altura = altura;

            //Aunque se bidimensional se estructura de esta manera. Es una array, pero con arrays dentro.
            this.tableroCreado = [];
        }

        crearTablero() {
            let casillas = this.base * this.altura;
            let arrayTablero = [this.base, this.altura];
            let arrayAux = [];
            let ocupacion = 0;
            let i = 1;

            while (i <= casillas) {

                ocupacion = Math.floor((Math.random() * casillas) + 1);

                if (!arrayAux.find(item => item === ocupacion)) {
                    arrayAux.push(ocupacion);
                    i++;
                }
            }

            let posicionArrayAux = 0;

            for (let i = 0; i < this.base; i++) {
                //faltaba para cargar un array bidemensional en javaScript
                arrayTablero[i] = [];
                for (let j = 0; j < this.altura; j++) {
                    arrayTablero[i][j] = arrayAux[posicionArrayAux]
                    posicionArrayAux++;
                }

            }

            console.log("array ya cargado " + arrayTablero);
            this.tableroCreado.push(...arrayTablero);
            console.log("array this ya cargado " + this.tableroCreado);
        }

        verTablero() {

            this.tableroCreado.forEach((kenny, cartman) => console.log(kenny, cartman));

        }


        moverFicha(fila, columna, filaElegida, columnaElegida) {

            let ficha = this.tableroCreado[fila][columna];

            if (this.tableroCreado[fila][columna] != 16) {

                if (filaElegida - fila == 0 && columna - columnaElegida == 0) {
                    console.log("Elegiste la misma casilla");

                } else if (filaElegida - fila == 1 && columna - columnaElegida == 0) {
                    if (this.tableroCreado[fila + 1][columna] == 16) {
                        this.tableroCreado[fila][columna] = 16;
                        this.tableroCreado[fila + 1][columna] = ficha;
                        console.log("Movimiento realizado");
                    } else {
                        console.log("Movimiento no permitido. La ficha destino no se encuentra vacia");
                    }
                } else if (filaElegida - fila == -1 && columna - columnaElegida == 0) {
                    if (this.tableroCreado[fila - 1][columna] == 16) {
                        this.tableroCreado[fila][columna] = 16;
                        this.tableroCreado[fila - 1][columna] = ficha;
                        console.log("Movimiento realizado");
                    } else {
                        console.log("Movimiento no permitido. La ficha destino no se encuentra vacia");
                    }

                } else if (columnaElegida - columna == 1 && fila - filaElegida == 0) {
                    if (this.tableroCreado[fila][columna + 1] == 16) {
                        this.tableroCreado[fila][columna] = 16;
                        this.tableroCreado[fila][columna + 1] = ficha;
                        console.log("Movimiento realizado");

                    } else {
                        console.log("Movimiento no permitido. La ficha destino no se encuentra vacia");
                    }
                } else if (columnaElegida - columna == -1 && fila - filaElegida == 0) {
                    if (this.tableroCreado[fila][columna - 1] == 16) {
                        this.tableroCreado[fila][columna] = 16;
                        this.tableroCreado[fila][columna - 1] = ficha;
                        console.log("Movimiento realizado");
                    } else {
                        console.log("Movimiento no permitido. La ficha destino no se encuentra vacia");
                    }
                }
            } else {
                console.log("Esa casilla no se puede mover");
            }
        }


        /* //try { OBVIAR LAS EXCEPCIONES EN ESTOS CASOS, MEJOR CONTROL CON IF´S

         if (dentroDeLimites(this.tableroCreado, fila, columna + 1) && this.tableroCreado[fila][columna + 1] == 16) {
             this.tableroCreado[fila][columna] = 16;
             this.tableroCreado[fila][columna + 1] = ficha;
         } else if (dentroDeLimites(this.tableroCreado, fila, columna - 1) && this.tableroCreado[fila][columna - 1] == 16) {
             this.tableroCreado[fila][columna] = 16;
             this.tableroCreado[fila][columna - 1] = ficha;
         } else if (dentroDeLimites(this.tableroCreado, fila + 1, columna) && this.tableroCreado[fila + 1][columna] == 16) {
             this.tableroCreado[fila][columna] = 16;
             this.tableroCreado[fila + 1][columna] = ficha;
         } else if (dentroDeLimites(this.tableroCreado, fila - 1, columna) && this.tableroCreado[fila - 1][columna] == 16) {
             this.tableroCreado[fila][columna] = 16;
             this.tableroCreado[fila - 1][columna] = ficha;
         } else {
             console.log("No se puede mover");
         }


         //} catch (error) {
         //    console.log(error);
         //}
         */

        //Deja esta función por si acaso. Si recibimos las coordenadas de un click sobre nuestro tablero, nunca se va a salir de los limites.
        /*
        function dentroDeLimites(tablero, fila, columna) {
            return fila >= 0 && fila < tablero.length && columna >= 0 && columna < tablero[fila].length;
        }
        */

    }



window.onload = () => {
    
    let tablero1 = new tablero(4, 4);

    tablero1.crearTablero();
    
    tablero1.verTablero();
    
    tablero1.moverFicha(2, 1, 2, 2);

    tablero1.verTablero();
}






