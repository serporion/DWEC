window.onload = () => {


    const imagen = document.querySelectorAll('img');

    const paso = { estado: false };

    const lugar = {
        x: 0,
        y: 0,
        indice: 0
    }


    document.body.addEventListener('click', (e) => {

        console.log(e);

        if (e.target.nodeName == 'IMG') { 
            console.log('Clic en la propia imagen. No la muevo');

        }else if (e.target !== img && paso.estado ===true ) {

            console.log(e.screenX + ' ' + e.screenY);
            console.log(e);

            console.log(imagen);
            
            //imagen.style.transform = `translate(${e.screenX-lugar.x}px, ${e.screenY-lugar.y}px)`;

            //const imgSeleccionada = NodeList.prototype.item(indexOf(imagen));
            
            const imgSeleccionada = imagen[lugar.indice];
            imgSeleccionada.style.transform = `translate(${e.clientX - lugar.x}px, ${e.clientY - lugar.y}px)`;

          
            paso.estado = false;
        }


    });


    imagen.forEach((im,index) => {
        im.addEventListener('click', (e) => verPosicion(e,paso,lugar,index));
    });

    //imagen.addEventListener('click', (e) => verPosicion(e, paso,lugar));

}



function verPosicion(e, paso, lugar,index) {

    console.log(e.screenX + ' ' + e.screenY);
    console.log(e);


    lugar.x = e.target.offsetLeft;
    lugar.y = e.target.offsetTop; 
    //lugar.indice = e.target.id;
    lugar.indice = index;

    console.log(`El lugar de la imagen es \n\nPosition X: ${ lugar.x}, Position Y: ${ lugar.y}`);
    

    if (paso.estado === false) {
        //e.target.style.position = 'absolute';

        paso.estado = true;

    } else {



        console.log('hola');

    }

    
}
