window.onload = () => {


    const imagen = document.querySelector('img');

    const paso = { estado: false };

    const lugar = {
        x: 0,
        y: 0
    }


    document.body.addEventListener('click', (e) => {

        

        if (e.target === img) { 
            console.log('Clic en la propia imagen. No la muevo');

        }else if (e.target !== img && paso.estado ===true ) {

            console.log(e.screenX + ' ' + e.screenY);
            console.log(e);

            imagen.style.transform = `translate(${e.clientX - lugar.x}px, ${e.clientY - lugar.y}px)`;
            
            //imagen.style.transform = `translate(${e.screenX-lugar.x}px, ${e.screenY-lugar.y}px)`;
            paso.estado = false;
        }


    });


    imagen.addEventListener('click', (e) => verPosicion(e, paso,lugar));

}



function verPosicion(e, paso, lugar) {

    console.log(e.screenX + ' ' + e.screenY);
    console.log(e);


    lugar.x = e.target.offsetLeft;
    lugar.y = e.target.offsetTop; 

    console.log(`El lugar de la imagen es \n\nPosition X: ${ lugar.x}, Position Y: ${ lugar.y}`);
    

    if (paso.estado === false) {
        //e.target.style.position = 'absolute';

        paso.estado = true;

    } else {



        console.log('hola');

    }

    
}
