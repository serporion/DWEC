
window.onload = () => {

    const svgPadre = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgPadre.setAttribute("width", 1000);
    svgPadre.setAttribute("height", 1000);
    svgPadre.style.border = "2px solid pink";
    document.body.appendChild(svgPadre);

    
    const bolas = [];

    for (let i = 0; i < 105; i++) {
        bolas.push(new Bola(svgPadre, 300));
    }

    
    setInterval(() => {
        bolas.forEach((bola) => bola.mover());
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
        
        this.direccionX = Math.random() * 2 - 1; // Valor aleatorio entre -1 y 1
        this.direccionY = Math.random() * 2 - 1; // Valor aleatorio entre -1 y 1

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
}



