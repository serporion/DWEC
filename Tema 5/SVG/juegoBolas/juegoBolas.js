
let puntosJugador1 = 0;
let puntosJugador2 = 0;
let parar;
const VELOCIDAD = 5;

window.onload = () => {

    const svgPadre = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgPadre.setAttribute("width", 1000);
        svgPadre.setAttribute("height", 500);
        svgPadre.style.border = "5px solid #CCFF00";
        svgPadre.style.boxShadow = "0 0 50px #888888";
        document.body.appendChild(svgPadre);

    
    const bolas = [];

    for (let i = 0; i < 1; i++) {
        bolas.push(new Bola(svgPadre));
    }

    let barra1 = new Barra(svgPadre, "barra1", 20, 200);
    let barra2 = new Barra(svgPadre, "barra2", 960, 200);
    
    crearMarcadores();

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowDown" ) {
            barra2.direccionY = VELOCIDAD;

        } else if (e.key === "ArrowUp") {
            barra2.direccionY = VELOCIDAD*-1;  
        }

        if (e.key === "s") {
            barra1.direccionY = VELOCIDAD;

        }else if (e.key === "w"){
            barra1.direccionY = VELOCIDAD*-1;
        }
    });

    parar = setInterval(() => {
        bolas.forEach((bola) => {bola.mover(puntosJugador1, puntosJugador2, svgPadre );bola.detectarColisionesConBarras(barra1, barra2);bola.ganador();});
        barra1.mover();
        barra2.mover();
        
    }, 30);

   
};


function crearMarcadores (){ //La puntuacion global debe ser.

    let marcador1 = document.createElement("div");
        marcador1.id = "marcador1";
        marcador1.style.position = "absolute";
        marcador1.style.top = "40px";
        marcador1.style.left = "60px";
        marcador1.style.fontSize = "50px";
        marcador1.style.color = "orange";
        marcador1.textContent = "Jugador 1: 0";
        document.body.appendChild(marcador1);

    let marcador2 = document.createElement("div");
        marcador2.id = "marcador2";
        marcador2.style.position = "absolute";
        marcador2.style.top = "40px";
        marcador2.style.right = "60px";
        marcador2.style.fontSize = "50px";
        marcador2.style.color = "orange";
        marcador2.textContent = "Jugador 2: 0";
        document.body.appendChild(marcador2);


}

class Bola {

    constructor(svgPadre) {
        
        this.limite = {
            Xmax: svgPadre.getAttribute("width"),
            Xmin: 0,
            Ymax: svgPadre.getAttribute("height"),
            Ymin: 0,            
        };

        
        this.posicionX = this.getRandomInt(svgPadre.getAttribute("width")/2, svgPadre.getAttribute("height")/2);
        this.posicionY = this.getRandomInt(250, 500);
        
        this.radio = this.getRandomInt(5, 25);
        this.color = this.getRandomColor();
        
        this.direccionX = Math.random() * 2 - 1; 
        this.direccionY = Math.random() * 2 - 1; 

        this.velocidad = this.getRandomInt(2, 10);

        
        this.creaBola(svgPadre);
    }

    getRandomInt(minTamano, maxTamano) {
        return Math.floor(Math.random() * (maxTamano - minTamano + 1)) + minTamano;
    }

    
    getRandomColor() {

        const letras = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letras[Math.floor(Math.random() * 16)];
            console.log(color);
        }

        return color;
    }

    
    creaBola(svgPadre) {
        this.bola = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.bola.setAttribute("cx", this.posicionX);
        this.bola.setAttribute("cy", this.posicionY);
        this.bola.setAttribute("r", this.radio);
        this.bola.setAttribute("fill", this.color);
        svgPadre.appendChild(this.bola);
    }

    
    
    mover(svgPadre) {

        this.posicionX += this.direccionX * this.velocidad;
        this.posicionY += this.direccionY * this.velocidad;

        if (this.posicionX + this.radio > this.limite.Xmax || this.posicionX - this.radio < this.limite.Xmin) {
            this.direccionX *= -1; 

            // Si la bola toca la pared contraria, sumar un punto al jugador contrario
            if (this.posicionX-(this.radio*2) <= this.limite.Xmin) {
                puntosJugador2++;
                this.posicionX = this.limite.Xmax/2 ;
                this.posicionY = this.limite.Ymax/2 ;
                this.bola.setAttribute("r", this.getRandomInt(5, 25));
                this.bola.setAttribute("fill", this.getRandomColor());
                //this.svgPadre.appendChild(this.bola);
                marcador2.textContent = `Jugador 2: ${puntosJugador2}`;
            }
            if (this.posicionX+(this.radio*2) > this.limite.Xmax) {
                puntosJugador1++;
                this.posicionX = this.limite.Xmax/2 ;
                this.posicionY = this.limite.Ymax/2 ;
                this.bola.setAttribute("r", this.getRandomInt(5, 25));
                this.bola.setAttribute("fill", this.getRandomColor());
                marcador1.textContent = `Jugador 1: ${puntosJugador1}`;
            }
        }

        if (this.posicionY + this.radio > this.limite.Ymax || this.posicionY - this.radio < this.limite.Ymin) {
            this.direccionY *= -1; 
        }

        this.bola.setAttribute("cx", this.posicionX);
        this.bola.setAttribute("cy", this.posicionY);

        
    }

    ganador() {

        if (puntosJugador1 == 5) {        
            clearInterval(parar);
            document.getElementById("ganador").style.fontSize = "50px";
            document.getElementById("ganador").innerHTML = "Ganaste Jugador 1";
            
            
        } else if (puntosJugador2 == 5) {
            clearInterval(parar);
            document.getElementById("ganador").style.fontSize = "50px";
            document.getElementById("ganador").innerHTML = "Ganaste Jugador 2";
        }

        
    }

    detectarColisionesConBarras(barra1, barra2) {

        if (
            this.posicionX - this.radio < barra1.posicionX + barra1.ancho && // izquierda de la bola
            this.posicionX + this.radio > barra1.posicionX && // derecha de la bola
            this.posicionY + this.radio > barra1.posicionY && // arriba de la bola
            this.posicionY - this.radio < barra1.posicionY + barra1.alto // parte de abajo de la bola
        ) {
            this.direccionX *= -1; 
        }

        if (
            this.posicionX + this.radio > barra2.posicionX && 
            this.posicionX - this.radio < barra2.posicionX + barra2.ancho && 
            this.posicionY + this.radio > barra2.posicionY && 
            this.posicionY - this.radio < barra2.posicionY + barra2.alto 
        ) {
            this.direccionX *= -1;
        }
    }
}

class Barra {

    constructor(svgPadre, id, x, y) {
        
        this.limite = {
            Xmax: svgPadre.getAttribute("height"),
            Xmin: 0,
            Ymax:  svgPadre.getAttribute("height"),
            Ymin: 0,            
        };

        this.ancho = 20;
        this.alto = 100;
        this.id = id;

        this.velocidad = 0.05;
        this.direccionX = 0; //Math.random() * 2 - 1; 
        this.direccionY = 0; //Math.random() * 2 - 1;        

        this.posicionX = x; // svgPadre.getAttribute("width"  + this.ancho);
        this.posicionY = y; //100;//svgPadre.getAttribute("height" + this.alto);
        
        this.color = this.getRandomColor();
        
        this.creaBarra(svgPadre);
    }

    getRandomColor() {

        const letras = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letras[Math.floor(Math.random() * 16)];
            console.log(color);
        }

        return color;
    }

    creaBarra(svgPadre) {
        this.barra = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.barra.setAttribute("id", this.id);
        this.barra.setAttribute("width", this.ancho);
        this.barra.setAttribute("height", this.alto);
        this.barra.setAttribute("fill", this.color);
        this.barra.setAttribute("x", this.posicionX);
        this.barra.setAttribute("y", this.posicionY);
        this.barra.setAttribute("rx", "50px");
        svgPadre.appendChild(this.barra);
    }

    
    
  
    mover() {

        this.posicionY += this.direccionY;

        if (this.posicionY + this.alto > this.limite.Ymax || this.posicionY < this.limite.Ymin) {
            this.direccionY *= -1; // Cambia de dirección al llegar a los bordes
        }
        this.barra.setAttribute("y", this.posicionY);
        this.posicionY += this.direccionY;
    }


}


