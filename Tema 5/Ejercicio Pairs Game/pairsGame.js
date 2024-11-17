let contador = 0;
let acierto = 1;


//let array = ['imagen1','imagen1','imagen2','imagen2','imagen3','imagen3','imagen4','imagen4','imagen5','imagen5'];

let cartas = [
    { id: 'imagen1', url: 'imagen1.jpg' },
    { id: 'imagen1', url: 'imagen1.jpg' },
    { id: 'imagen2', url: 'imagen2.jpg' },
    { id: 'imagen2', url: 'imagen2.jpg' },
    { id: 'imagen3', url: 'imagen3.jpg' },
    { id: 'imagen3', url: 'imagen3.jpg' },
    { id: 'imagen4', url: 'imagen4.jpg' },
    { id: 'imagen4', url: 'imagen4.jpg' },
    { id: 'imagen5', url: 'imagen5.jpg' },
    { id: 'imagen5', url: 'imagen5.jpg' }
];

let carta1 = null;
let carta2 = null;

let segundos = 0;
let milisegundos = 0;


let intervalo = null; 
let temporizadorActivo = false; 

window.onload = () => {

    let tablero = document.getElementById('tablero');
    let reloj = document.getElementById("reloj");
   
    //mezclar(array);
    //construirTablero(array.length);

    mezclar(cartas);
    construirTablero(cartas.length);
}


function pinchaCarta(e) {

    const elegida = e.target;

    if (!temporizadorActivo) {
        comenzar();
    }
    
    if (elegida.classList.contains('volteo') || elegida.classList.contains('correcta')) {
        return; 

    }  
        
        elegida.classList.add('volteo');

        //elegida.innerText = elegida.id;
        elegida.style.backgroundImage = `url(./${elegida.getAttribute('data-url')})`;
        
    

    if (!carta1) {
        carta1 = elegida; 
    } else {
        carta2 = elegida; 
        comprobar(carta1,carta2);
    }
   
}

function comprobar(carta1,carta2) {       

   setTimeout( () => {

    //if (carta1.id === carta2.id) {
    if (carta1.getAttribute('data-id') === carta2.getAttribute('data-id')) {
        
        carta1.classList.add('correcta');
        carta2.classList.add('correcta');
        acierto++;        

    } else {
        
        carta1.classList.remove('volteo');
        carta2.classList.remove('volteo');
        //carta1.innerText = '';
        //carta2.innerText = '';
        carta1.style.backgroundImage = "url('./reverso.png')";
        carta2.style.backgroundImage = "url('./reverso.png')";
              
    }

    resetCards();

    }, 500);

    //if (acierto == array.length / 2 ) {
    if (acierto == cartas.length / 2 ) {

        parar();
        document.getElementById("instrucciones").innerText = "Congratulations!!!";

    }

}

function resetCards() {
    carta1 = null;
    carta2 = null;
}


function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));
        
        let temp = array[i];   
        array[i] = array[j];   
        array[j] = temp;       
    }
}



function construirTablero(divs) {

    for (let i = 0; i < cartas.length; i++) {
        let carta = cartas[i]; 
    
        let crearDiv = document.createElement("div");
        crearDiv.classList.add('carta');
        crearDiv.setAttribute('data-id', carta.id);
        crearDiv.setAttribute('data-url', carta.url);
    
        crearDiv.addEventListener('click', pinchaCarta);
        tablero.appendChild(crearDiv);
    }
    
    

}


function comenzar() {
    temporizadorActivo = true;

        intervalo = setInterval(() => {
    
            if (segundos == 60) {
                segundos = 0;
            }
            if (milisegundos == 100) {
                milisegundos = 0
                segundos++;
            }

            let segundosDigitos = String(segundos).padStart(2, "0");
            let milisegundosDigitos = String(milisegundos).padStart(2, "0");
            reloj.innerText = `${segundosDigitos}:${milisegundosDigitos}`;            

            milisegundos++; 

            if (segundos == 30){
                parar();
                document.getElementById("instrucciones").innerText = "OUT, YOU ARE LOOSER!";
            }

        }, 10);
                
}

function parar() {
    clearInterval(intervalo);
    
    
}
