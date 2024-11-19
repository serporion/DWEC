
let alimentos = [];


window.onload = () => {

    
construirTitulo();
construirRegistrar()
construirLista()

datosLocales = localStorage.getItem("listaCompra");

    if (datosLocales != null) {
        //crearEntradaListaStorage(datosLocales);

        listaCompra = JSON.parse(datosLocales);

        for (let i = 0; i < listaCompra.length; i++) {
            crearEntradaListaStorage(listaCompra[i]);
            alimentos.push(listaCompra[i]);
        }
    }

}


function construirTitulo() {
    let miTitulo = document.createElement("h1");
    miTitulo.innerText = "Grocery Bud";
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
    inputBoton.value = "Submit";

    form.appendChild(inputBoton);
    

    document.getElementById("container").appendChild(form);

}



function construirLista() {

    let lista = document.createElement("ul");
    lista.id = "lista";
    document.getElementById("container").appendChild(lista);
    

    let contenido = document.getElementById("input");

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

        

        guardarStorage(contenido.value);
        
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


function guardarStorage(contenido) {

    
    alimentos.push(contenido);
       
    localStorage.setItem("listaCompra", JSON.stringify(alimentos));
       
  
}

function crearEntradaListaStorage (datosLocales) {

    let lista = document.createElement("ul");
    lista.id = "lista";
    document.getElementById("container").appendChild(lista);

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
    
}