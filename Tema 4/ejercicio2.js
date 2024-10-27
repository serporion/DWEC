/*
function verPosicion(e) {

  //document.body.innerHTML = e.clientX + " " + e.clientY;
  document.body.innerHTML = e.screenX + " " + e.screenY;
}
    
  



 
*/

document.body.addEventListener("mousemove", verPosicion);

const posicionRaton = document.createElement("div");

posicionRaton.style.position = "absolute"; // Para que el div pueda moverse libremente
posicionRaton.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
posicionRaton.style.border = "1px solid #ccc";
posicionRaton.style.padding = "5px";
posicionRaton.style.pointerEvents = "none"; // Para que el div no interfiera con los eventos del ratón
document.body.appendChild(posicionRaton); // Añadimos el div al body

function verPosicion(e) {
    // Actualizamos la posición del div con las coordenadas del ratón
    posicionRaton.style.left = `${e.pageX + 10}px`; // Un poco a la derecha del puntero
    posicionRaton.style.top = `${e.pageY + 10}px`; // Un poco abajo del puntero
    posicionRaton.innerHTML = `X: ${e.screenX}, Y: ${e.screenY}`; // Actualizamos el contenido
    //posicionRaton.innerHTML = e.clientX + " " + e.clientY;
}
//document.body.addEventListener("mousemove", verPosicion); 