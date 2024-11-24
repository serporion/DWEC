

let NotasEnStorage = [];
let paso = { estado: false };
let notas;
let nota;

let lugar = {
    x: 0,
    y: 0,
};

window.onload = () => {
    
    notas = document.querySelector("section");

    construirTitulo();
    construirRegistrar();
    rellenarNota()


    let guardaNota = document.getElementById('guardar');

    guardaNota.addEventListener('click', (e) => guardarStorage(e));


    let crearNota = document.getElementById('boton');

    crearNota.addEventListener('click', (e) => construirNota(e));


    datosLocales = localStorage.getItem("NotasEnStorage");


        if (datosLocales != null) {
            //crearEntradaListaStorage(datosLocales);

            NotasRecuperadasEnStorage = JSON.parse(datosLocales);

            for (let i = 0; i < NotasRecuperadasEnStorage.length; i++) {
                crearEntradaListaStorage(NotasRecuperadasEnStorage[i]);
                NotasEnStorage.push(NotasRecuperadasEnStorage[i]);
            }
        }
    

    
};

function construirTitulo() {
    let miTitulo = document.createElement("h1");
    miTitulo.innerText = "Construye tu lista";
    document.getElementById("container").appendChild(miTitulo);
}

function construirRegistrar() {
    let form = document.createElement("div");
    form.id = "form";

    let inputTexto = document.createElement("input");
    inputTexto.type = "text";
    inputTexto.id = "input";
    inputTexto.placeholder = "e.g. eggs";

    form.appendChild(inputTexto);

    let inputBoton = document.createElement("input");
    inputBoton.type = "button";
    inputBoton.id = "boton";
    inputBoton.value = "Crear";

    form.appendChild(inputBoton);

    let inputBotonGuardar = document.createElement("input");

    inputBotonGuardar.type = "button";
    inputBotonGuardar.id = "guardar";
    inputBotonGuardar.value = "Guardar";

    form.appendChild(inputBotonGuardar);


    document.getElementById("container").appendChild(form);
}

function construirNota() {
    // Crear la nota en posición fija (250, 250)
    nota = document.createElement("div");
    nota.id = "note";
    nota.style.width = "200px";
    nota.style.height = "200px";
    nota.style.backgroundColor = "red";
    nota.style.position = "absolute";
    nota.style.left = "250px";
    nota.style.top = "250px";
    nota.style.cursor = "grab";

    document.getElementById("contenedor").appendChild(nota);

    mover();
}

function mover() {
    let isDragging = false; // Estado de arrastre
    let offsetX, offsetY; // Desplazamiento entre el clic y el borde de la nota

    // Detectar cuando comienza el arrastre
    nota.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - nota.offsetLeft;
        offsetY = e.clientY - nota.offsetTop;
        nota.style.cursor = "grabbing"; // Cambiar el cursor al arrastrar
    });

    // Mover la nota mientras el mouse se mueve
    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            let nuevaX = e.clientX - offsetX;
            let nuevaY = e.clientY - offsetY;

            nota.style.left = `${nuevaX}px`;
            nota.style.top = `${nuevaY}px`;
        }
    });

    // Soltar la nota y detener el arrastre
    document.addEventListener("mouseup", () => {
        if (isDragging) {
            isDragging = false;
            nota.style.cursor = "grab"; // Restaurar el cursor
        }
    });
}


function guardarNota() {

    
    
    let titulo = document.getElementById("input");
    let texto = document.getElementById("texto");
    let fecha = document.getElementById("fecha");

    boton.addEventListener("click", () =>{
        
        let nuevoEntradaConTresElementos = document.createElement("li");
        //nuevoEntrada.innerText = contenido.value;
        //if (datosLocales != null) {
        //    nuevoEntradaConTresElementos.innerText = contenido.value;
        //}else{
            nuevoEntradaConTresElementos.innerText = contenido.value;
        //}


        document.getElementById("lista").appendChild(nuevoEntradaConTresElementos);

        
        // Botón Editar
        let inputBotonEditar = document.createElement("button");
        inputBotonEditar.textContent = "Editar";
        inputBotonEditar.classList.add("editar");
        nuevoEntradaConTresElementos.appendChild(inputBotonEditar);

        // Botón Borrar
        let inputBotonBorrar = document.createElement("button");
        inputBotonBorrar.textContent = "Borrar";
        inputBotonBorrar.classList.add("borrar");
        nuevoEntradaConTresElementos.appendChild(inputBotonBorrar);

        

        NotasEnStorage.push(contenido);
       
        localStorage.setItem("NotasRecuperadasEnStorage", JSON.stringify(NotasEnStorage));
        
    });

    

    //Delegación de eventos. Creo solo un EventListener para los dos botones. Recordar delegación de eventos.
    //Separamos las acciones mediante la comprobación del nombre de una clase de cada boton.

    lista.addEventListener('click', (e) => {
        if (e.target.classList.contains('borrar')) {
            e.target.parentElement.remove();
            
            let item = e.target.parentElement.innerText;
            item = item.substring(0, item.length - 12); //editar+borrar = 12 caracteres

            let index = alimentos.indexOf(item);
            alimentos.splice(index, 1);

            localStorage.setItem("listaCompra", JSON.stringify(alimentos));
            
        } else if (e.target.classList.contains('editar')) {

            let item = e.target.parentElement.innerText;
            item = item.substring(0, item.length - 13);

            let indexModificar = alimentos.indexOf(item);
            alimentos.splice(indexModificar, 1);

            

            inputBotonModificar.addEventListener("click", () => {
                e.target.parentElement.innerText = inputModificar.value;

                guardarStorage(inputModificar.value);
            });

            let index = alimentos.indexOf(item);
            alimentos.splice(index, 1);

            
        }
        
        
    });
}






function crearEntradaListaStorage (datosLocales) {

    let notaEnPantalla = document.createElement("ul");
    notaEnPantalla.id = "lista";
    document.getElementById("container").appendChild(notaEnPantalla);

    /*
    let nuevoEntrada = document.createElement("li");
    nuevoEntrada.innerText = datosLocales;
    document.getElementById("lista").appendChild(nuevoEntrada);


    let inputBotonEditar = document.createElement("button");
        inputBotonEditar.textContent = "Editar";
        inputBotonEditar.classList.add("editar");
        nuevoEntrada.appendChild(inputBotonEditar);

        // Botón Borrar
        let inputBotonBorrar = document.createElement("button");
        inputBotonBorrar.textContent = "Borrar";
        inputBotonBorrar.classList.add("borrar");
        nuevoEntrada.appendChild(inputBotonBorrar);
    */
}


