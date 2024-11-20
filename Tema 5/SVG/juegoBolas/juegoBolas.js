
window.onload = () => {

    const svgPadre = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgPadre.setAttribute("width", 1000);
    svgPadre.setAttribute("height", 1000);
    svgPadre.style.border = "2px solid pink";
    document.body.appendChild(svgPadre);

    
    const bolas = [];

    for (let i = 0; i < 20; i++) {
        bolas.push(new Bola(svgPadre, 300));
    }

    let barra1 = new Barra(svgPadre, "barra1", 20, 450);
    let barra2 = new Barra(svgPadre, "barra2", 960, 450);
    
    

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            barra1.mover(e);  
        }
        if (e.key === "s" || e.key === "w") {
            barra2.mover(e); 
        }
    });

    setInterval(() => {
        bolas.forEach((bola) => {bola.mover();bola.detectarColisionesConBarras(barra1, barra2);});
        
    }, 30);

};


class Bola {

    constructor(svgPadre, tamano) {
        
        this.limite = {
            Xmax: 1000,
            Xmin: 0,
            Ymax: 1000,
            Ymin: 0,            
        };

        
        this.posicionX = this.getRandomInt(50, tamano);
        this.posicionY = this.getRandomInt(50, tamano);
        
        this.radio = this.getRandomInt(5, 25);
        this.color = this.getRandomColor();
        
        //Idea para cambiar de dirección
        this.direccionX = Math.random() * 2 - 1; 
        this.direccionY = Math.random() * 2 - 1; 

        this.velocidad = this.getRandomInt(2, 10);

        
        this.creaBola(svgPadre);
    }

    // Generar valores aleatorios para X y Y
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

        // MAL, darse cuenta que no sirve para las dos condiciones. Las bolas se salian.
        let posicionTotalX = this.posicionX + this.radio;
        let posicionTotalY = this.posicionY + this.radio;


        if (this.posicionX + this.radio > this.limite.Xmax || this.posicionX - this.radio < this.limite.Xmin) {
            this.direccionX *= -1; 
        }


        if (this.posicionY + this.radio > this.limite.Ymax || this.posicionY - this.radio < this.limite.Ymin) {
            this.direccionY *= -1; 
        }

        this.bola.setAttribute("cx", this.posicionX);
        this.bola.setAttribute("cy", this.posicionY);

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

        // Barra 2
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

        this.velocidad = 0.05;

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

        if (this.posicionY + this.alto > this.limite.Ymax || this.posicionY < this.limite.Ymin) {
            //this.direccionY *= -1; 
            return;
        }

        //this.posicionY += this.posicionY * this.velocidad;

        if (e.key =="ArrowDown"){
            this.barra.setAttribute("y",  this.posicionY+=this.posicionY * this.velocidad);
        }

        else if (e.key == "ArrowUp") {
                this.barra.setAttribute("y",  this.posicionY-=this.posicionY * this.velocidad);
                //this.posicionX -= this.direccionX * this.velocidad;
                //this.posicionY += this.direccionY * this.velocidad;
        } 
        else if (e.key == "s") {
                
                this.barra.setAttribute("y",  this.posicionY+=this.posicionY * this.velocidad);
                //this.posicionX += this.direccionX * this.velocidad;
                //this.posicionY += this.direccionY * this.velocidad;
        }
        else if (e.key == "w") {
                this.barra.setAttribute("y",  this.posicionY-=this.posicionY * this.velocidad);
                //this.posicionX -= this.direccionX * this.velocidad;
                //this.posicionY += this.direccionY * this.velocidad;
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
