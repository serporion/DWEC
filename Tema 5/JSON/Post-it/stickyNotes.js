let NotasEnStorage = [];
let notas;

// Para mover las notas
let notaEnMovimiento = null;
let offsetX, offsetY;

window.onload = () => {
    notas = document.querySelector("section");

    construirTitulo();
    construirRegistrar();

    rellenarNotasEnPantalla(); 

    let crearNota = document.getElementById("boton");
    crearNota.addEventListener("click", construirNota);

};



function construirTitulo() {
    let miTitulo = document.createElement("h1");
    miTitulo.innerText = "Crea tu nota";
    document.getElementById("container").appendChild(miTitulo);
}


function construirRegistrar() {

    let form = document.createElement("div");
    form.id = "form";

    let inputBoton = document.createElement("input");
    inputBoton.type = "button";
    inputBoton.id = "boton";
    inputBoton.value = "Crear Nota";

    form.appendChild(inputBoton);

    document.getElementById("container").appendChild(form);
}

function rellenarNotasEnPantalla() {
    let datosLocales = localStorage.getItem("NotasEnStorage");

    if (datosLocales) {
        NotasEnStorage = JSON.parse(datosLocales);

        NotasEnStorage.forEach((notaData) => {
            let nuevaNota = document.createElement("div");
            nuevaNota.className = "nota";
            nuevaNota.dataset.id = notaData.id;
            nuevaNota.dataset.time = notaData.tiempo; // Recuperar tiempo
            nuevaNota.style.width = "360px";
            nuevaNota.style.height = "380px";
            nuevaNota.style.backgroundColor = "#FEF3B5";
            nuevaNota.style.position = "absolute";
            nuevaNota.style.left = notaData.x;
            nuevaNota.style.top = notaData.y;
            nuevaNota.style.cursor = "grab";
            nuevaNota.style.padding = "10px";
            nuevaNota.style.boxSizing = "border-box";
            nuevaNota.style.borderRadius = "15px";

            let tituloInput = document.createElement("label");
            tituloInput.style.width = "98%";
            tituloInput.style.padding = "10px";
            tituloInput.innerHTML = notaData.titulo;
            tituloInput.style.fontSize = "23px";
            tituloInput.style.fontWeight = "bold";
            tituloInput.id = "titulo";

            let contenidoInput = document.createElement("textarea");
            contenidoInput.style.width = "98%";
            contenidoInput.style.height = "40%";
            contenidoInput.style.fontSize = "17px";
            contenidoInput.value = notaData.contenido;
            contenidoInput.id = "contenido";

            let fechaInput = document.createElement("input");
            fechaInput.type = "date";
            fechaInput.value = notaData.fecha;
            fechaInput.id = "fecha";
            fechaInput.style.fontSize = "17px";
            
            let tiempoTranscurridoLabel = document.createElement("label");
            tiempoTranscurridoLabel.style.display = "block";
            tiempoTranscurridoLabel.style.marginTop = "10px";
            tiempoTranscurridoLabel.style.fontSize = "14px";
            tiempoTranscurridoLabel.style.color = "#555";
            tiempoTranscurridoLabel.textContent = calcularTiempoTranscurrido(notaData.tiempo);
        
            
           
            let guardarBoton = document.createElement("button");
            guardarBoton.textContent = "Guardar";
            guardarBoton.addEventListener("click", () => guardarNota(nuevaNota));

            let borrarBoton = document.createElement("button");
            borrarBoton.textContent = "Borrar";
            borrarBoton.addEventListener("click", () => borrarNota(nuevaNota));


            nuevaNota.appendChild(tituloInput);
            nuevaNota.appendChild(contenidoInput);
            nuevaNota.appendChild(fechaInput);
            nuevaNota.appendChild(tiempoTranscurridoLabel);
            nuevaNota.appendChild(guardarBoton);
            nuevaNota.appendChild(borrarBoton);

            document.getElementById("contenedor").appendChild(nuevaNota);


            setInterval(() => {
                tiempoTranscurridoLabel.textContent = calcularTiempoTranscurrido(notaData.tiempo);
            }, 60000);


            agregarMovimiento(nuevaNota);

        });
    }
}





function posicionNuevaNota(limite){

        limite = Math.floor(Math.random() * (limite ));

        return limite+"px";
}


function agregarMovimiento(nota) {

    nota.addEventListener("mousedown", (e) => {
        notaEnMovimiento = nota;
        offsetX = e.clientX - nota.offsetLeft;
        offsetY = e.clientY - nota.offsetTop;
        nota.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {

        if (notaEnMovimiento) {

            let nuevaX = e.clientX - offsetX;
            let nuevaY = e.clientY - offsetY;

            notaEnMovimiento.style.left = `${nuevaX}px`;
            notaEnMovimiento.style.top = `${nuevaY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        
        if (notaEnMovimiento) {

            notaEnMovimiento.style.cursor = "grab";
            notaEnMovimiento = null;
        }
    });
}


function guardarNota(nota) {
    
    let paso = true;

    let idBuscar = nota.dataset.id;

    let titulo;
    
    let index = NotasEnStorage.findIndex((nota) => nota.id === idBuscar );
    //let index = NotasEnStorage.findIndex((n) => n.id === id)

    if (index > -1) {

        titulo = document.getElementById("titulo").innerHTML; 
       
    }else {
      
        titulo = document.getElementById("titulo").value;
        paso = false;     

    }    

    let id = nota.dataset.id + titulo;
    let contenido = document.getElementById("contenido").value;
    let fecha = document.getElementById("fecha").value;
    let tiempo = Date.now();

    console.log(document.getElementById('titulo').value + " a " + document.getElementById('contenido').innerHTML + " b " + document.getElementById('fecha').value);

    if (titulo == "" || contenido == "" || fecha == "") {

        alert("Los campos no pueden estar vacios");
        
        
    }else {

    let notaObjeto = {
        id,
        titulo,
        contenido,
        fecha,
        x: nota.style.left,
        y: nota.style.top,
        tiempo,
    };


    if (paso)  {

        NotasEnStorage[index] = notaObjeto;

    }else {
        
        NotasEnStorage.push(notaObjeto);
    }


    localStorage.setItem("NotasEnStorage", JSON.stringify(NotasEnStorage));
    nota.remove();
    alert("Nota guardada");
}
}





function generarIdUnico() {
    const idAleatorio = Math.floor(Math.random() * 100) + 1;  

    return idAleatorio + "_"; 
}

function borrarNota(nota) {

    let id = nota.dataset.id;

    NotasEnStorage = NotasEnStorage.filter((n) => n.id !== id);
    localStorage.setItem("NotasEnStorage", JSON.stringify(NotasEnStorage));

    nota.remove();
    alert("Nota eliminada");
}



function construirNota() {
    let idUnico = generarIdUnico();

    let nuevaNota = document.createElement("div");
    nuevaNota.className = "nota";
    nuevaNota.dataset.id = idUnico;
    nuevaNota.dataset.time = Date.now(); 
    nuevaNota.style.width = "360px";
    nuevaNota.style.height = "380px";
    nuevaNota.style.backgroundColor = "#FEF3B5";
    nuevaNota.style.position = "absolute";
    nuevaNota.style.left = posicionNuevaNota(document.querySelector("body").offsetWidth);
    nuevaNota.style.top = posicionNuevaNota(document.querySelector("body").offsetHeight);
    nuevaNota.style.cursor = "grab";
    nuevaNota.style.padding = "10px";
    nuevaNota.style.boxSizing = "border-box";
    nuevaNota.style.borderRadius = "15px";

    let tituloInput = document.createElement("input");
    tituloInput.type = "text";
    tituloInput.placeholder = "Título";
    tituloInput.id = "titulo";
    tituloInput.style.width = "90%";
    tituloInput.style.marginBottom = "10px";
    tituloInput.style.fontSize = "20px";

    let contenidoInput = document.createElement("textarea");
    contenidoInput.placeholder = "Contenido";
    contenidoInput.style.width = "98%";
    contenidoInput.style.height = "40%";
    contenidoInput.id = "contenido";
    contenidoInput.style.fontSize = "17px";

    let fechaInput = document.createElement("input");
    fechaInput.type = "date";
    fechaInput.id = "fecha";
    fechaInput.style.fontSize = "17px";


    let tiempoTranscurridoLabel = document.createElement("label");
    tiempoTranscurridoLabel.style.display = "block";
    tiempoTranscurridoLabel.style.marginTop = "10px";
    tiempoTranscurridoLabel.style.fontSize = "14px";
    tiempoTranscurridoLabel.style.color = "#555";
    tiempoTranscurridoLabel.textContent = calcularTiempoTranscurrido(Date.now());

    
    setInterval(() => {
        tiempoTranscurridoLabel.textContent = calcularTiempoTranscurrido(nuevaNota.dataset.time);
    }, 60000);

    let guardarBoton = document.createElement("button");
    guardarBoton.textContent = "Guardar";
    guardarBoton.addEventListener("click", () => guardarNota(nuevaNota));

    let borrarBoton = document.createElement("button");
    borrarBoton.textContent = "Borrar";
    borrarBoton.addEventListener("click", () => borrarNota(nuevaNota));

    nuevaNota.appendChild(tituloInput);
    nuevaNota.appendChild(contenidoInput);
    nuevaNota.appendChild(fechaInput);
    nuevaNota.appendChild(tiempoTranscurridoLabel);
    nuevaNota.appendChild(guardarBoton);
    nuevaNota.appendChild(borrarBoton);

    document.getElementById("contenedor").appendChild(nuevaNota);

    agregarMovimiento(nuevaNota);
}

function calcularTiempoTranscurrido(tiempo) {

    let ahora = Date.now();
    let diferencia = ahora - tiempo; 
    let minutos = Math.floor(diferencia / 60000); 

    return  minutos > 1 || minutos === 0 ? minutos + " minutos han transcurrido" : "minuto ha transcurrido";
}
