window.onload = () => {

    var bola = document.getElementById('circulo');
    var radio = 40;
    
    var posicionX = 50;
    var limiteX = {
        max: 500,
        min: 0
    };

    var limiteX = {
        max: 500,
        min: 0
    };

    var limiteY = {
        max: 500,
        min: 0
    };

    

    let paso = true;

    setInterval(() => {

        let posicion = posicionX + radio;

        if (((posicion) <= (limiteX.max)) && paso){
            bola.setAttribute('cx', posicion++);
            posicionX +=5;

            console.log(posicion);
            
            if (posicion > limiteX.max-radio) {
                paso = false;
            }            

            console.log(paso);
            
        } else if (!paso){
            console.log("entrar");
            bola.setAttribute('cx', posicion--);
            posicionX -=5;

            console.log("posisicon" + posicion);
            console.log("posicion" + posicionX);

            if (posicion < (limiteX.min+radio)) {
                paso = true;
            } 
        }
        
    }, 30)  



    /*

    var bola = new Array();

    for (var i = 0; i <100000; i++) {
        bolas.push(new bola("juego", getRandomInt(300)));
        bola.detectarColisioes()
        bola.mover();
}

}

    clase bola (

        constructor(


    }


    creaTag(svgPadre){
    
    this.bola = docuemnt. createelementNS("http://www.w3.org/2000/svg", "circle");
    this.bola.setAttribute("cx", "this.posicionX");
    this.bola.setAttribute("cy", "this.posicionY");
    this.bola.setAttribute("r", "this.radio");

    document.getIElementById("svgPadre").appendChild(this.bola);

    }

    */


    generarcolor
    generar
}