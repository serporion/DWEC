

    
    

window.onload = () => {

    //ESTA FUNCION PINTA UNA TABLA

    const tabla = document.createElement('table');

    
    const numFilas = 50;
    const numColumnas = 50;

    
    for (let i = 0; i < numFilas; i++) {
        const fila = document.createElement('tr'); 
        for (let j = 0; j < numColumnas; j++) {
            const celda = document.createElement('td'); 
            
            fila.appendChild(celda); 
        }
        tabla.appendChild(fila); 
    }

    document.getElementById('tablaContainer').appendChild(tabla);

//-----------------------------------------------------------------------


    //const tds = Array.from(document.getElementsByTagName('td'));
    const tds = document.querySelectorAll('td');

    console.log(tds.length);
    
    tds.forEach(td => {
        td.addEventListener('mouseover', (evento) => cambiarColor(evento));
    });

    const but = document.querySelector('button[name="borrar"]');

    but.addEventListener('click', ()=> borrar(tds));


}


function borrar (tds){
    tds.forEach(td => td.style.backgroundColor= 'white');
}



function cambiarColor(evento) {

    if (evento.ctrlKey === true) {
        evento.target.style.backgroundColor = 'red';

    }else if (evento.altKey === true){
        evento.target.style.backgroundColor = 'blue';
    }
    else if (evento.shiftKey === true){
        evento.target.style.backgroundColor = 'white';
    }
    else {
        evento.target.style.backgroundColor = 'green';
    }
}



/*
function crearTabla() {
    // Crear un elemento de tabla
    const tabla = document.createElement('table');

    // Definir el número de filas y columnas
    const numFilas = 50;
    const numColumnas = 50;

    // Crear filas y celdas
    for (let i = 0; i < numFilas; i++) {
        const fila = document.createElement('tr'); // Crear fila
        for (let j = 0; j < numColumnas; j++) {
            const celda = document.createElement('td'); // Crear celda
            //celda.innerText = `(${i}, ${j})`; // Texto dentro de la celda
            fila.appendChild(celda); // Añadir celda a la fila
        }
        tabla.appendChild(fila); // Añadir fila a la tabla
    }

    // Añadir la tabla al contenedor en el body
    document.getElementById('tablaContainer').appendChild(tabla);
}

*/




