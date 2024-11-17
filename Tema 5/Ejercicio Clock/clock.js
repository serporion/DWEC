
let intervalo;
let segundos = 0;
let milisegundos = 0;



window.onload = () => {


let reloj = document.getElementById("reloj");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");



reloj.innerText = "00:00";

start.addEventListener("click", () => {
    comenzar();
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
});

stop.addEventListener("click", () => {
    parar();
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
});

reset.addEventListener("click", () => {
    reiniciar();
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
});


}


function comenzar() {
    
    //segundos = seg;
    //milisegundos = miliseg;

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
        }, 10);


}

function parar() {
    clearInterval(intervalo);
    
    
}

function reiniciar() {
    parar();
    reloj.innerText = "00:00";	
    segundos = 0;
    milisegundos = 0;
    
}
