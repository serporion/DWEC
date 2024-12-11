/*
let categorias = [
    { imagen: '', nombre: '' }
];
*/
let categorias = [
    
];

let indiceOpinionActual = 0;

let carruselAutomatico;

window.onload = () => {
    const urlproducto = "https://api.escuelajs.co/api/v1/products?offset=0&limit=3";
    const urlcategoria = "https://api.escuelajs.co/api/v1/categories";


    solicitar(urlcategoria).then((recibido) => {

        construirCategorias(recibido);
       
        
    });


    solicitar(urlproducto).then((recibido) => {

        construirProductos(recibido);
       

    });


    document.getElementById("boton-siguiente").addEventListener("click", ()=> {
        indiceOpinionActual++;
        if (indiceOpinionActual >= categorias.length) {
            indiceOpinionActual = 0; // Volver al inicio si se alcanza el final
        }
        mostrarimagen()
        mostrardato();
        //mostrarOpinionActual2();
        //mostrarOpinionActual3();
    });


    document.getElementById("boton-anterior").addEventListener("click", ()=> {
        indiceOpinionActual--;
        if (indiceOpinionActual < 0) {
            indiceOpinionActual = categorias.length - 1;
        }
        mostrarimagen();
        mostrardato();
        
    });


    let elementoCarrusel = document.getElementById("comun");
    let botonsiguiente = document.getElementById("boton-siguiente"); 
    let botonanterior = document.getElementById("boton-anterior");


    // Agregar un escuchador eventlistener, en este caso un 'mouseover', para detener el carrusel automático cuando el mouse está sobre una opinión llamando a la función detenerCarrusel.
    elementoCarrusel.addEventListener("mouseover", detenerCarrusel);
    botonsiguiente.addEventListener("mouseover", detenerCarrusel);
    botonanterior.addEventListener("mouseover", detenerCarrusel);


    // Agregar un escuchador eventlistener, en este caso un 'mouseout', para reanudar el carrusel automático cuando el mouse está sobre una opinión llamando a la función reanudarCarrusel.
    elementoCarrusel.addEventListener("mouseout", reanudarCarrusel);
    botonsiguiente.addEventListener("mouseout", reanudarCarrusel);
    botonanterior.addEventListener("mouseout", reanudarCarrusel);



}



function solicitar(url) {

    return fetch(url, { method: "GET" })
        .then((res) => res.json()) 
        .then((datosRecibidos) => {
            return datosRecibidos;
        })
        .catch((error) => {
            console.error("Error al obtener los datos", error);
            return []; 
        });

       
}



function construirCategorias(datosRecibidos) {


    
    for (let i = 0; i < 5; i++) {

        categorias.push({
            imagen: datosRecibidos[i].image,
            nombre: datosRecibidos[i].name,  
        });
    }


    mostrarimagen()
    mostrardato();
 
}


function construirProductos(datosRecibidos){
/*

    let titulo = document.createElement("h2");
    titulo.innerHTML = "Nuestros Productos";

    document.getElementById("productos").appendChild(titulo);
*/
    let card = document.getElementById("producto-card");

    

        for (let i = 0; i < datosRecibidos.length; i++) {


            let divCard = document.createElement("div");
            divCard.id = "divCards";
            divCard.style.maxWidth = "20%";
            divCard.style.display = "inline-block";
            divCard.style.margin = "1rem";

            let nombres = document.createElement("p");
            nombres.id = "nombre";
            nombres.style.color = "red";
            nombres.innerHTML = datosRecibidos[i].title;

            let divImagen = document.createElement("div");
            divImagen.style.height = "100px";

            

            let imagen = document.createElement("img");
            imagen.src = datosRecibidos[i].images[0];

            imagen.classList.add("imagenesProductos");

            //imagen.style.width = "100%";
            //imagen.style.height = "100%";
            //imagen.style.objectFit = "cover";

            divImagen.appendChild(imagen);

            let precio = document.createElement("p");
            precio.id = "precio";
            precio.innerHTML = datosRecibidos[i].price;
            precio.style.color = "red";

            
            divCard.appendChild(nombres);
            divCard.appendChild(divImagen);
            divCard.appendChild(precio);

            card.appendChild(divCard);

        }

    
}


// Función para mostrar la imagen del campo imagen del array opiniones, accediendo a la propiedad src del elemento html carrusel-opiniones0, que es una imagen.
// Le pasamos la dirección desde aquí.
function mostrarimagen() {

    let carruselImagen = document.getElementById("carrusel-imagen");
    carruselImagen.style.display = "block";
    carruselImagen.src = categorias[indiceOpinionActual].imagen;
     

    /*
    let carruselImagen = document.createElement("img");
    carruselImagen.id = "carrusel-imagen";
    carruselImagen.src = categorias[indiceOpinionActual].imagen;
    divImagenCategoria.appendChild(carruselImagen);
    */
    
    
}


// Función para mostrar el nombre del campo nombre del array opiniones, accediendo a la propiedad textContent del elemento html carrusel-opiniones que es un div.
function mostrardato() {
    let carrusel = document.getElementById("carrusel-Nombre");
    carrusel.textContent = categorias[indiceOpinionActual].nombre;
}



// Funcion que avanza según el índice que tenga el array. Se puede hacer con modulo % también.
function avanzarOpinion() {
    indiceOpinionActual++;
    if (indiceOpinionActual >= categorias.length) {
        indiceOpinionActual = 0;
    }
    mostrarimagen();
    mostrardato();
    
}



//Detención y reanudación del avance de las opiniones según la posición del ratón.
// Se hace desaparecer el movimiento con intervalos de 3 segundos que establecimos.
function detenerCarrusel() {
    clearInterval(carruselAutomatico);
}

// Volvemos a generar, crear el intervalo de movimiento con intervalos de 3 segundos.
function reanudarCarrusel() {
    carruselAutomatico = setInterval(avanzarOpinion, 3000);
}


