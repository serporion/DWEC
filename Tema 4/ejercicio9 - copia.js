window.onload = () => {


    const imagen = document.querySelector('img');
    
    const paso = { estado: false };


    document.body.addEventListener('click', (e) => {
        if (e.target !== img) { // Opcional: Solo ejecuta el cambio si el clic no es sobre la imagen
            img.style.width = '300px'; // Cambia el ancho de la imagen
        }
        console.log(e.screenX + ' ' + e.screenY);
        console.log(e);

        



    });


    imagen.addEventListener('click', (e) => verPosicion(e, paso));


    imagen.addEventListener('dragstart', cambiarPosicionPrueba);

    

    
}



function verPosicion(e, paso) {
    // Actualizamos la posición del div con las coordenadas del ratón

    //console.log(`${e.pageX + 10}px`; // Un poco a la derecha del puntero
    //posicionRaton.style.top = `${e.pageY + 10}px`; // Un poco abajo del puntero
    //posicionRaton.innerHTML = `X: ${e.screenX}, Y: ${e.screenY}`; // Actualizamos el contenido
    console.log(e.screenX + ' ' + e.screenY);
    console.log(e);
    //e.target.img.scrollX(200);
    //e.img.style.backgroundColor='black';

    if (paso.estado === false ) {
        e.target.style.position = 'absolute';

        paso.estado = true;

    } else {




        if (e.target == img) {
            console.log(e.target);
            //e.target.style.width = '200px';
            //e.target.addEventListener('scroll', () => console.log(e.target.scrollX));
            //e.target.style.translateX = '200px';
            e.target.style.transform = "translate(100px, 500px)";
            paso.estado = false;
        } else {
            e.target.style.img.width = '3000px';
        }

    }

    //posicionRaton.innerHTML = e.clientX + " " + e.clientY;
}

function cambiarPosicionPrueba(evento) {

    console.log(evento);

    //arrastro.style.position = 'absolute';



    //arrastro.target.style.left = `${e.pageX + 100}px`;
    //arrastro.target.style.top = `${e.pageY + 100}px`;
    //posicionRaton.innerHTML
}


function cambiarPosicion(evento) {


}