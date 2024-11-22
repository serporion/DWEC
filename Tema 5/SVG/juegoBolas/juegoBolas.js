
let puntosJugador1 = 0;
let puntosJugador2 = 0;
let parar;

window.onload = () => {

    const svgPadre = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgPadre.setAttribute("width", 1000);
        svgPadre.setAttribute("height", 1000);
        svgPadre.style.border = "2px solid pink";
        document.body.appendChild(svgPadre);

    
    const bolas = [];

    for (let i = 0; i < 15; i++) {
        bolas.push(new Bola(svgPadre, 500));
    }

    let barra1 = new Barra(svgPadre, "barra1", 20, 450);
    let barra2 = new Barra(svgPadre, "barra2", 960, 450);
    
    crearMarcadores();

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            barra2.mover(e);  
        }
        if (e.key === "s" || e.key === "w") {
            barra1.mover(e); 
        }
    });

    parar = setInterval(() => {
        bolas.forEach((bola) => {bola.mover(puntosJugador1, puntosJugador2);bola.detectarColisionesConBarras(barra1, barra2);bola.ganador();});
        
        
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

    constructor(svgPadre, tamano) {
        
        this.limite = {
            Xmax: 1000,
            Xmin: 0,
            Ymax: 1000,
            Ymin: 0,            
        };

        
        this.posicionX = this.getRandomInt(500, tamano);
        this.posicionY = this.getRandomInt(500, tamano);
        
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

    
    
    mover() {
        this.posicionX += this.direccionX * this.velocidad;
        this.posicionY += this.direccionY * this.velocidad;

        if (this.posicionX + this.radio > this.limite.Xmax || this.posicionX - this.radio < this.limite.Xmin) {
            this.direccionX *= -1; 

            // Si la bola toca la pared contraria, sumar un punto al jugador contrario
            if (this.posicionX-(this.radio*2) <= this.limite.Xmin) {
                puntosJugador2++;
                marcador2.textContent = `Jugador 2: ${puntosJugador2}`;
            }
            if (this.posicionX+(this.radio*2) > this.limite.Xmax) {
                puntosJugador1++;
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
            Xmax: 1000,
            Xmin: 0,
            Ymax: 1000,
            Ymin: 0,            
        };

        this.ancho = 20;
        this.alto = 100;
        this.id = id;

        this.direccionX = Math.random() * 2 - 1; 
        this.direccionY = Math.random() * 2 - 1;        

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
        svgPadre.appendChild(this.barra);
    }

    
    mover(e) {


        if (this.posicionY  > this.limite.Ymax - this.alto) {
            this.posicionY = this.limite.Ymax - (this.alto*2-this.alto/2);
        }
    
        if (this.posicionY  < this.limite.Ymin + this.alto/2) {
            this.posicionY = this.limite.Ymin + (this.alto/2);
        }

        if (e.key =="ArrowDown"){
                this.barra.setAttribute("y",  this.posicionY+=30);
        }

        else if (e.key == "ArrowUp") {
                this.barra.setAttribute("y",  this.posicionY-=30);
        
        } 
        else if (e.key == "s") {
                
                this.barra.setAttribute("y",  this.posicionY+=30);
        }
        else if (e.key == "w") {
                this.barra.setAttribute("y",  this.posicionY-=30);
        
        }


        if (this.posicionX-(this.radio*2) <= this.limite.Xmin) {
            puntosJugador2++;
            marcador2.textContent = `Jugador 2: ${puntosJugador2}`;
        }
        if (this.posicionX+(this.radio*2) > this.limite.Xmax) {
            puntosJugador1++;
            marcador1.textContent = `Jugador 1: ${puntosJugador1}`;
        }
        //a lo loco!
        /*
            setInterval(() => {
                this.posicionY += this.direccionY;// * this.velocidad;
    
                if (this.posicionY + this.alto > this.limite.Ymax || this.posicionY < this.limite.Ymin) {
                    this.direccionY *= -1; // Cambia de dirección al llegar a los bordes
                }
    
                this.barra.setAttribute("y", this.posicionY);
            }, 30);
        */

    }
  


}
