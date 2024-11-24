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

// Construye el formulario principal
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
    let idUnico = generarIdUnico("nota");

    let nuevaNota = document.createElement("div");
    nuevaNota.className = "nota";
    nuevaNota.dataset.id = idUnico; // Asignar ID único
    nuevaNota.style.width = "200px";
    nuevaNota.style.height = "200px";
    nuevaNota.style.backgroundColor = "yellow";
    nuevaNota.style.position = "absolute";
    nuevaNota.style.left = posicionNuevaNota(document.querySelector("body").offsetWidth);
    nuevaNota.style.top = posicionNuevaNota(document.querySelector("body").offsetHeight);
    nuevaNota.style.cursor = "grab";
    nuevaNota.style.padding = "10px";
    nuevaNota.style.boxSizing = "border-box";

    // Crear inputs dentro de la nota
    let tituloInput = document.createElement("input");
    tituloInput.type = "text";
    tituloInput.placeholder = "Título";
    tituloInput.className = "titulo";

    let contenidoInput = document.createElement("textarea");
    contenidoInput.placeholder = "Contenido";
    contenidoInput.className = "contenido";

    let fechaInput = document.createElement("input");
    fechaInput.type = "date";
    fechaInput.className = "fecha";

    // Botón Guardar
    let guardarBoton = document.createElement("button");
    guardarBoton.textContent = "Guardar";
    guardarBoton.className = "guardar";
    guardarBoton.addEventListener("click", () => guardarNota(nuevaNota));

    // Botón Borrar
    let borrarBoton = document.createElement("button");
    borrarBoton.textContent = "Borrar";
    borrarBoton.className = "borrar";
    borrarBoton.addEventListener("click", () => borrarNota(nuevaNota));

    // Agregar elementos a la nota
    nuevaNota.appendChild(tituloInput);
    nuevaNota.appendChild(contenidoInput);
    nuevaNota.appendChild(fechaInput);
    nuevaNota.appendChild(guardarBoton);
    nuevaNota.appendChild(borrarBoton);

    document.getElementById("contenedor").appendChild(nuevaNota);

    agregarMovimiento(nuevaNota);
}




function posicionNuevaNota(pos){

        pos = Math.floor(Math.random() * (pos -0) + 0);

        return pos+"px";
}

// Agregar funcionalidad de movimiento a las notas
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
    let id = nota.dataset.id;
    let titulo = nota.querySelector(".titulo").value;
    let contenido = nota.querySelector(".contenido").value;
    let fecha = nota.querySelector(".fecha").value;

    let notaObjeto = {
        id,
        titulo,
        contenido,
        fecha,
        x: nota.style.left,
        y: nota.style.top,
    };

    // Buscar y actualizar si existe, o añadir si no
    let index = NotasEnStorage.findIndex((n) => n.id === id);
    if (index > -1) {
        NotasEnStorage[index] = notaObjeto;
    } else {
        NotasEnStorage.push(notaObjeto);
    }

    localStorage.setItem("NotasEnStorage", JSON.stringify(NotasEnStorage));
    alert("Nota guardada");
}


function rellenarNotasEnPantalla() {
    let datosLocales = localStorage.getItem("NotasEnStorage");

    if (datosLocales) {
        NotasEnStorage = JSON.parse(datosLocales);

        NotasEnStorage.forEach((notaData) => {
            let nuevaNota = document.createElement("div");
            nuevaNota.className = "nota";
            nuevaNota.dataset.id = notaData.id; // Recuperar ID único
            nuevaNota.style.width = "200px";
            nuevaNota.style.height = "200px";
            nuevaNota.style.backgroundColor = "yellow";
            nuevaNota.style.position = "absolute";
            nuevaNota.style.left = notaData.x;
            nuevaNota.style.top = notaData.y;
            nuevaNota.style.cursor = "grab";
            nuevaNota.style.padding = "10px";
            nuevaNota.style.boxSizing = "border-box";

            // Inputs con datos recuperados
            let tituloInput = document.createElement("input");
            tituloInput.type = "text";
            tituloInput.value = notaData.titulo;
            tituloInput.className = "titulo";

            let contenidoInput = document.createElement("textarea");
            contenidoInput.value = notaData.contenido;
            contenidoInput.className = "contenido";

            let fechaInput = document.createElement("input");
            fechaInput.type = "date";
            fechaInput.value = notaData.fecha;
            fechaInput.className = "fecha";

            // Botón Guardar
            let guardarBoton = document.createElement("button");
            guardarBoton.textContent = "Guardar";
            guardarBoton.className = "guardar";
            guardarBoton.addEventListener("click", () => guardarNota(nuevaNota));

            // Botón Borrar
            let borrarBoton = document.createElement("button");
            borrarBoton.textContent = "Borrar";
            borrarBoton.className = "borrar";
            borrarBoton.addEventListener("click", () => borrarNota(nuevaNota));

            // Agregar elementos a la nota
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


function generarIdUnico(titulo) {
    const idAleatorio = Math.floor(Math.random() * 100) + 1;  // Número aleatorio entre 1 y 100

    return idAleatorio + "_" + titulo;  // ID único con el formato 'número_titulo'
}

function borrarNota(nota) {
    let id = nota.dataset.id;

    // Filtrar la nota por ID en el array
    NotasEnStorage = NotasEnStorage.filter((n) => n.id !== id);
    localStorage.setItem("NotasEnStorage", JSON.stringify(NotasEnStorage));

    // Eliminar la nota del DOM
    nota.remove();
    alert("Nota eliminada");
}

// Función para modificar una nota usando su ID único
function modificarNota(idUnico) {
    const nota = document.getElementById(idUnico);
    if (nota) {
        // En este caso, se elimina la nota para crear una nueva con modificaciones
        const nuevoTitulo = prompt("Introduce el nuevo título para la nota:");
        if (nuevoTitulo) {
            borrarNota(idUnico);  // Primero se borra la nota actual
            construirNota(nuevoTitulo);  // Se crea una nueva con el nuevo título
        }
    }
}