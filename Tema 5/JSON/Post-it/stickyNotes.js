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
    miTitulo.innerText = "Notas Interactivas";
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


function construirNota() {

    let idUnico = generarIdUnico();

    let nuevaNota = document.createElement("div");
    nuevaNota.className = "nota";
    nuevaNota.dataset.id = idUnico;
    nuevaNota.dataset.time = Date.now(); 
    nuevaNota.style.width = "300px";
    nuevaNota.style.height = "300px";
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
    tituloInput.className = "titulo";
    tituloInput.style.width = "80%";
    tituloInput.style.marginBottom = "10px";

    let contenidoInput = document.createElement("textarea");
    contenidoInput.placeholder = "Contenido";
    contenidoInput.style.width = "90%";
    contenidoInput.style.height = "40%";
    contenidoInput.className = "contenido";

    let fechaInput = document.createElement("input");
    fechaInput.type = "date";
    fechaInput.className = "fecha";

    
    let guardarBoton = document.createElement("button");
    guardarBoton.textContent = "Guardar";
    guardarBoton.className = "guardar";
    guardarBoton.addEventListener("click", () => guardarNota(nuevaNota));

    
    let borrarBoton = document.createElement("button");
    borrarBoton.textContent = "Borrar";
    borrarBoton.className = "borrar";
    borrarBoton.addEventListener("click", () => borrarNota(nuevaNota));

    
    nuevaNota.appendChild(tituloInput);
    nuevaNota.appendChild(contenidoInput);
    nuevaNota.appendChild(fechaInput);
    nuevaNota.appendChild(guardarBoton);
    nuevaNota.appendChild(borrarBoton);

    document.getElementById("contenedor").appendChild(nuevaNota);

    agregarMovimiento(nuevaNota);
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

    let titulo = nota.querySelector(".titulo").value;
    let id = nota.dataset.id + titulo;
    let contenido = nota.querySelector(".contenido").value;
    let fecha = nota.querySelector(".fecha").value;
    let tiempo = Date.now();

    let notaObjeto = {
        id,
        titulo,
        contenido,
        fecha,
        x: nota.style.left,
        y: nota.style.top,
        tiempo,
    };


   
    let index = NotasEnStorage.findIndex((n) => n.id === id);

    if (index > -1) {
        //let id = NotasEnStorage[index].id;
        //NotasEnStorage.remove(index);
        NotasEnStorage[index] = notaObjeto;
        //borrarNota(id);

    } else {
        NotasEnStorage.push(notaObjeto);
    }



    localStorage.setItem("NotasEnStorage", JSON.stringify(NotasEnStorage));
    nota.remove();
    alert("Nota guardada");
}


function rellenarNotasEnPantalla() {

    let datosLocales = localStorage.getItem("NotasEnStorage");

    if (datosLocales) {
        NotasEnStorage = JSON.parse(datosLocales);

        NotasEnStorage.forEach((notaData) => {

            let nuevaNota = document.createElement("div");
            nuevaNota.className = "nota";
            nuevaNota.dataset.id = notaData.id; 
            nuevaNota.style.width = "300px";
            nuevaNota.style.height = "300px";
            nuevaNota.style.backgroundColor = "#FEF3B5";
            nuevaNota.style.position = "absolute";
            nuevaNota.style.left = notaData.x;
            nuevaNota.style.top = notaData.y;
            nuevaNota.style.cursor = "grab";
            nuevaNota.style.padding = "10px";
            nuevaNota.style.boxSizing = "border-box";

            
            let tituloInput = document.createElement("label");
            tituloInput.style.width = "80%";
            tituloInput.style.padding = "100px";
            tituloInput.innerHTML = notaData.titulo;
            tituloInput.style.fontSize = "25px";
            tituloInput.style.textAlign = "center";
            tituloInput.style.fontWeight = "bold";
            tituloInput.className = "titulo";

            let contenidoInput = document.createElement("textarea");
            contenidoInput.style.width = "90%";
            contenidoInput.style.height = "40%";
            contenidoInput.style.fontSize = "17px";
            contenidoInput.value = notaData.contenido;
            contenidoInput.className = "contenido";

            let fechaInput = document.createElement("input");
            fechaInput.type = "date";
            fechaInput.value = notaData.fecha;
            fechaInput.className = "fecha";

            
            let guardarBoton = document.createElement("button");
            guardarBoton.textContent = "Guardar";
            guardarBoton.className = "guardar";
            guardarBoton.addEventListener("click", () => guardarNota(nuevaNota));

            
            let borrarBoton = document.createElement("button");
            borrarBoton.textContent = "Borrar";
            borrarBoton.className = "borrar";
            borrarBoton.addEventListener("click", () => borrarNota(nuevaNota));

            
            nuevaNota.appendChild(tituloInput);
            nuevaNota.appendChild(contenidoInput);
            nuevaNota.appendChild(fechaInput);
            nuevaNota.appendChild(guardarBoton);
            nuevaNota.appendChild(borrarBoton);

            document.getElementById("contenedor").appendChild(nuevaNota);

            agregarMovimiento(nuevaNota);
        });
    }
}


function generarIdUnico() {
    const idAleatorio = Math.floor(Math.random() * 100) + 1;  

    return idAleatorio + "_"; // + titulo;  
}

function borrarNota(nota) {

    let id = nota.dataset.id;

    NotasEnStorage = NotasEnStorage.filter((n) => n.id !== id);
    localStorage.setItem("NotasEnStorage", JSON.stringify(NotasEnStorage));

    nota.remove();
    alert("Nota eliminada");
}

