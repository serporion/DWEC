

let letrasPalabra = []; 
let contador = 0;
let acierto = 0;


window.onload = () => {

    //let array = ['payaso','carrusel','algodon','berenjenas','circo','globos']
    let array = ['madrid','barcelona','granada','sevilla','cuenca','leon','asturias'];
    let carta = document.getElementById("carta");
    let numeroAleatorio = 0;
    let palabra = "";

    document.getElementById("vidas").innerText = "You have 10 lives";
   
    /* NO PUEDO PARAR EL EVENTLISTENER SI ES ANONIMA*/
    /* SACO LA FUNCION AFUERA */

    /*
    carta.addEventListener("click", (e) => {

        console.log("carta clicked " + e.target.id);
       
        jugar(e.target.id);
    });
    */

    carta.addEventListener("click", pinchaCarta);

    
    numeroAleatorio = Math.floor(Math.random() * array.length);

    palabra = array[numeroAleatorio];

    letrasPalabra = palabra.split("");

    construir(letrasPalabra.length);

}


function pinchaCarta(e) {
    console.log("carta elegida " + e.target.id);
    
    jugar(e.target.id);
    
}

function construir(letrasPalabra) {
        

    for (let i = 0; i < letrasPalabra; i++) {

        let letraDiv = document.createElement("div");
        letraDiv.innerText = "_"; 
        letraDiv.style.display = "inline-block";
        letraDiv.style.margin = "0 10px"; 
        letraDiv.style.fontSize = "30px";
        

        letraDiv.id = "letra-"+i;

        tamano.appendChild(letraDiv);

        console.log(letrasPalabra[i]);
    }
}

function jugar(e){

    let casilla;

    let paso = false;

    if(contador != 10){

    console.log("palabra " + letrasPalabra);
    console.log("letra elegida" + e);

        letrasPalabra.forEach((letra, index) => {

            if (e == letra){

                acierto++;

                console.log("letra correcta");

                casilla = document.getElementById("letra-"+index);

                casilla.innerText = letra.toUpperCase();

                paso = true;
            }
        
            console.log("letra " + letra);

        });

        if(!paso){
            ++contador;
            document.getElementById("vidas").innerText = "You have " + (10 - contador) + " lives";
        }


        if (acierto == letrasPalabra.length){
            document.getElementById("vidas").innerText = "YOU WIN!";
            carta.removeEventListener("click", pinchaCarta);
        }   

    }else {
        document.getElementById("tamano").innerText = "JUEGO TERMINADO";

        /*
        carta.addEventListener("click", (e) => {

            console.log("carta clicked " + e.target.id);
           
            jugar(e.target.id);
        });
        */

        carta.removeEventListener("click", pinchaCarta);

    }
}