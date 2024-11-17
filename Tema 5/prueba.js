window.onload = () => {


datosLocales = localStorage.getItem("lista");

if (datosLocales != null) {
    crearEntradaLista 
};



let contenido = document.getElementById("input");


let boton = document.getElementById("boton");

boton.addEventListener("click", () =>{
    let nuevoEntrada = document.createElement("li");
    nuevoEntrada.innerText = contenido.value;
    document.getElementById("lista").appendChild(nuevoEntrada);
});



let miTitulo = document.createElement("h1");
miTitulo.innerText = "titulo";




document.body.appendChild(miTitulo);


let miTitulo2 = document.createElement("h1");    


document.body.removeChild(miTitulo);


//Delegación de eventos. No hay que buscar el propio elemento. Podemos poner el padre.
let borraElemento = document.getElementById("lista");

borraElemento.addEventListener("click", (e) => {
        //Se le pregunta al padre, porque se pregunta de quien es el padre.
        e.target.parentElement.removeChild(e.target);
});

}