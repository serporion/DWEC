//Variables globales.
let categorias = [

];

let indiceOpinionActual = 0;

let carruselAutomatico;

let paso = false;

let pasoMostrar = false;

let pasoInfinito = false;

let aleatorioAnterior = -1;

let pagina = 1;

let alturaVisible = document.documentElement.clientHeight;

let accesoCategoria = -1;

let limite;

let producto;

const IMAGEN_POR_DEFECTO = "images/default.png";

window.onload = () => {
    const urlproducto = "https://api.escuelajs.co/api/v1/products?offset=0&limit=200";
    const urlcategoria = "https://api.escuelajs.co/api/v1/categories";

    solicitar(urlcategoria).then((recibido) => {

        construirCategorias(recibido);

    });

    solicitar(urlproducto).then((recibido) => {

        construirProductos(recibido);

    });

    // Agregar el evento Eventlistener al botón-siguiente. Hace avanzar la posición del carrusel en un elemento, leyendo el array.
    document.getElementById("boton-siguiente").addEventListener("click", () => {
        indiceOpinionActual++;
        if (indiceOpinionActual >= categorias.length) {
            indiceOpinionActual = 0; // Volver al inicio si se alcanza el final
        }
        mostrarimagen()
        mostrardato();

    });

    // Agregar el evento Eventlistener al botón- anterior. Hace retroceder la posición del carrusel en un elemento, leyendo el array.
    document.getElementById("boton-anterior").addEventListener("click", () => {
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


    // Agregar el evento Eventlistener, en este caso un 'mouseover', para detener el carrusel automático cuando el mouse está sobre una opinión llamando a la función detenerCarrusel.
    elementoCarrusel.addEventListener("mouseover", detenerCarrusel);
    botonsiguiente.addEventListener("mouseover", detenerCarrusel);
    botonanterior.addEventListener("mouseover", detenerCarrusel);


    // Agregar el evento Eventlistener, en este caso un 'mouseout', para reanudar el carrusel automático cuando el mouse está sobre una opinión llamando a la función reanudarCarrusel.
    elementoCarrusel.addEventListener("mouseout", reanudarCarrusel);
    botonsiguiente.addEventListener("mouseout", reanudarCarrusel);
    botonanterior.addEventListener("mouseout", reanudarCarrusel);

    document.getElementById("carrito").addEventListener("click", mostrarCarrito);

    //Se inicia el carrusel
    reanudarCarrusel();

}

//Función que comprueba si existe y si es una imagen valida lo que se recoge de la API
function imagenProducto(imagen) {

    imagen.onerror = () => {
        imagen.src = IMAGEN_POR_DEFECTO;
    };
}

//Función que permite llamarla para realizar solicitudes a la API de forma asincrona.
function solicitar(url) {

    /*
    return fetch(url, { method: "GET" })
        .then(res => res.json())
        .then((datosRecibidos) => {


        if (datosRecibidos.Response === "True") {......///No funciona. Hay que comprobar el array. Esta API no devuelve un campo Response.

        .catch(error => {
            console.error("Error al obtener los datos", error);
            return [];
        });

    */

    return fetch(url, { method: "GET" })
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) {
                if (data.length === 0) {
                    console.log("No hay más datos disponibles");
                    return null;
                }
                return data;
            } else {
                return data;
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
            return null;
        });

}


//Función que sirve para construir las categorias mostradas en la landing page.
function construirCategorias(datosRecibidos) {

    console.log(datosRecibidos.length);

    for (let i = 0; i < 5; i++) {

        categorias.push({
            imagen: datosRecibidos[i].image,
            nombre: datosRecibidos[i].name,
            id: datosRecibidos[i].id
        });

    }

    mostrarimagen()
    mostrardato();

}

//Función para la construccion de la maquettación de los datos recibidos de los productos.
function construirProductos(datosRecibidos) {

    let tamano;

    if (!pasoMostrar) {
        cuantosMostrar = 3

        //Ordeno por precio. Quiero mostrar una serie de productos que pueden llegar a tener un precio atractivo.
        datosRecibidos.sort((a, b) => a.price - b.price);

        //Corto el array en 3.
        tamano = Math.floor(datosRecibidos.length / 3);

    } else {
        cuantosMostrar = 10;
        tamano = Math.floor(datosRecibidos.length);
    }


    for (let i = 0; i < cuantosMostrar; i++) {

        let aleatorio = Math.floor(Math.random() * tamano);

        while (aleatorioAnterior === aleatorio) {
            aleatorio = Math.floor(Math.random() * tamano);
        }

        aleatorioAnterior = aleatorio;

        let indice = aleatorio;

        let divCard = document.createElement("div");
        divCard.classList.add("div-card");
        divCard.style.margin = "1rem";

        let nombres = document.createElement("p");
        nombres.classList.add("nombre");
        nombres.innerHTML = datosRecibidos[indice].title;

        let divImagen = document.createElement("div");
        divImagen.classList.add("imagenDiez-container");
        divImagen.id = "IdProducto";

        let imagen = document.createElement("img");
        imagen.src = datosRecibidos[indice].images[0];
        imagenProducto(imagen);

        imagen.dataSet = datosRecibidos[indice].id;

        imagen.addEventListener("click", mostrarDetalle);
        imagen.classList.add("imagenes-productos");

        divImagen.appendChild(imagen);

        let precio = document.createElement("p");
        precio.classList.add("precio");
        precio.innerHTML = datosRecibidos[indice].price + "€";

        divCard.appendChild(nombres);
        divCard.appendChild(divImagen);
        divCard.appendChild(precio);

        !paso ? document.querySelector("#producto-card").appendChild(divCard) : document.querySelector("#producto-cardeCategoria").appendChild(divCard);

    }
}


// Función para mostrar la imagen del campo imagen del array opiniones, accediendo a la propiedad src del elemento html carrusel-opiniones0, que es una imagen.
// Le pasamos la dirección desde aquí.
function mostrarimagen() {

    let carruselImagen = document.getElementById("carrusel-imagen");
    carruselImagen.style.display = "block";
    carruselImagen.classList.add("imagen-central");
    carruselImagen.src = categorias[indiceOpinionActual].imagen;
    imagenProducto(carruselImagen);

    let seleccionarCategoria = document.getElementById("carrusel-imagen");


    seleccionarCategoria.dataSet = categorias[indiceOpinionActual].id;

    seleccionarCategoria.addEventListener("click", seleccionCategoria);

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
function detenerCarrusel() {
    clearInterval(carruselAutomatico);
}

// Volvemos a generar o crear el intervalo de movimiento de 3 segundos.
function reanudarCarrusel() {
    carruselAutomatico = setInterval(avanzarOpinion, 3000);
}

function seleccionCategoria(e) {

    console.log("Categoría seleccionada: " + e.target.dataSet);

    limite = 10;

    accesoCategoria = e.target.dataSet;

    document.getElementById('carrusel').style.display = 'none';
    document.getElementById('productos').style.display = 'none';
    document.getElementById('eslogan').style.display = 'none';
    document.getElementById('muestraDiezProductos').style.display = 'block';
    document.getElementById('muestraDiezProductos').classList.add('zindex');

    window.addEventListener('scroll', scrollInfinito);

    let aumenta = document.getElementById("cargarMas");
    aumenta.style.display = "block";

    aumenta.addEventListener("click", cargarMasProductos);

    const urlProductosPorCategoria = "https://api.escuelajs.co/api/v1/categories/" + accesoCategoria + "/products?offset=0&limit=10";

    console.log("La url: " + urlProductosPorCategoria);

    solicitar(urlProductosPorCategoria).then((datosRecibidos) => {
        pasoMostrar = true;
        paso = true;
        pasoInfinito = false; // Cambiamos a false para permitir más cargas
        construirProductos(datosRecibidos);
    });

    pasoMostrar = false;
    paso = false;

}

// Función que muestra el detelle del producto cuyos datos se pueden recoger gracias al evento que se le pasa como argumento. 
// Crea un div maquetando los datos recibidos.
 
function mostrarDetalle(e) {

    console.log("Mostrar Detalle" + e.target.dataSet);

    let id = e.target.dataSet;

    const urldetalle = "https://api.escuelajs.co/api/v1/products/" + id + "";

    solicitar(urldetalle).then((datosRecibidos) => {
        producto = datosRecibidos;

        let contenedor = document.createElement("div");
        contenedor.classList.add("detalle-producto");

        let imagenDiv = document.createElement("div");
        imagenDiv.classList.add("detalle-imagen");
        let imagen = document.createElement("img");

        imagen.src = producto.images;
        imagenProducto(imagen);
        imagenDiv.appendChild(imagen);

        let infoDiv = document.createElement("div");
        infoDiv.classList.add("detalle-info");

        let nombre = document.createElement("h2");
        nombre.textContent = producto.title;

        let precio = document.createElement("p");
        precio.textContent = "$" + (producto.price / 100).toFixed(2);
        precio.classList.add("detalle-precio");

        let descripcion = document.createElement("p");
        descripcion.textContent = producto.description;


        let controlCarrito = document.createElement("div");
        controlCarrito.classList.add("control-carrito");

        let cantidadDiv = document.createElement("div");
        cantidadDiv.classList.add("cantidad-control");

        let cantidadInput = document.createElement("input");
        cantidadInput.type = "number";
        cantidadInput.value = "1";
        cantidadInput.min = "1";
        cantidadInput.classList.add("cantidad-input");

        let decrementarBtn = document.createElement("button");
        decrementarBtn.textContent = "-";
        decrementarBtn.onclick = () => {
            if (cantidadInput.value > 1) cantidadInput.value--;
        };

        let incrementarBtn = document.createElement("button");
        incrementarBtn.textContent = "+";
        incrementarBtn.onclick = () => cantidadInput.value++;

        cantidadDiv.appendChild(decrementarBtn);
        cantidadDiv.appendChild(cantidadInput);
        cantidadDiv.appendChild(incrementarBtn);

        let botonesDiv = document.createElement("div");
        botonesDiv.classList.add("botones-accion");

        let anadirBtn = document.createElement("button");
        anadirBtn.textContent = "Añadir al carrito";
        anadirBtn.onclick = () => {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            let cantidadNueva = parseInt(cantidadInput.value);

            // Buscar si el producto ya existe en el carrito
            let productoExistente = carrito.find(item => item.id === producto.id);

            if (productoExistente) {

                productoExistente.cantidad = cantidadNueva;
            } else {

                carrito.push({
                    id: producto.id,
                    nombre: producto.title,
                    precio: producto.price,
                    cantidad: cantidadNueva
                });
            }

            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarNotificacion("Carrito actualizado");
        };

        let borrarBtn = document.createElement("button");
        borrarBtn.textContent = "Borrar del carrito";
        borrarBtn.onclick = () => {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito = carrito.filter(item => item.id !== producto.id);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarNotificacion("Producto eliminado del carrito");
        };

        botonesDiv.appendChild(anadirBtn);
        botonesDiv.appendChild(borrarBtn);



        infoDiv.appendChild(nombre);
        infoDiv.appendChild(precio);
        infoDiv.appendChild(descripcion);



        controlCarrito.appendChild(cantidadDiv);
        controlCarrito.appendChild(botonesDiv);

        imagenDiv.appendChild(controlCarrito);


        let cerrarBtn = document.createElement("button");
        cerrarBtn.textContent = "X";
        cerrarBtn.classList.add("cerrar-detalle");
        cerrarBtn.onclick = () => {
            detalleDiv.innerHTML = ''; // Limpia el contenido del detalle
            document.getElementById("muestraDiezProductos").style.display = "block"; // Muestra los productos nuevamente
        };
        contenedor.appendChild(cerrarBtn);


        contenedor.appendChild(imagenDiv);
        contenedor.appendChild(infoDiv);

        document.getElementById("muestraDiezProductos").style.display = "none";

        let detalleDiv = document.getElementById("detalle");
        detalleDiv.innerHTML = ''; // Limpiar el contenido anterior
        detalleDiv.classList.add("detalle-producto");
        detalleDiv.appendChild(contenedor);


    });
}


// Función que muestra un div con una notificiación. Se cierra a los 3 segundos. Se usa en diversos lugares del codigo.
function mostrarNotificacion(mensaje) {
    const notificacion = document.getElementById('notificacion');
    const mensajeNotificacion = document.getElementById('mensaje-notificacion');
    const cerrarNotificacion = document.getElementById('cerrar-notificacion');

    mensajeNotificacion.textContent = mensaje;
    notificacion.classList.remove('oculto');

    cerrarNotificacion.onclick = () => {
        notificacion.classList.add('oculto');
    };

    setTimeout(() => {
        notificacion.classList.add('oculto');
    }, 3000);
}

//Función de scrollInfinito, según el tamaño de la ventana visible.
function scrollInfinito() {

    let scrollY = window.scrollY - 800;

    let maximoScroll = document.documentElement.scrollHeight - alturaVisible;

    if (scrollY + alturaVisible >= maximoScroll * 0.7 && !pasoInfinito) {
        //pasoInfinito = true;
        cargarMasProductos();
    }
}

//Función que carga más productos o bien gracias al scroll o bien gracias a un boton.
function cargarMasProductos() {
    if (pasoInfinito) return;

    pagina++;
    limite += 10;

    const urlProductosPorCategoria = "https://api.escuelajs.co/api/v1/categories/" + accesoCategoria + "/products?offset=" + pagina + "&limit=" + limite + "";

    mostrarNotificacion("Cargando más productos...");

    pasoInfinito = true;

    solicitar(urlProductosPorCategoria).then((datosRecibidos) => {

        if (datosRecibidos.length === 0) {
            mostrarNotificacion("No hay más productos para cargar");
            window.removeEventListener('scroll', scrollInfinito);
            document.getElementById("cargarMas").style.display = "none";
            return;
        }
        pasoMostrar = true;
        paso = true;
        construirProductos(datosRecibidos);
        pasoInfinito = false;// Permite cargar más productos
    });
}

//Función que muestra el carrito.
function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    let modalCarrito = document.createElement("div");
    modalCarrito.classList.add("modal-carrito");
    
    let contenidoCarrito = document.createElement("div");
    contenidoCarrito.classList.add("contenido-carrito");
    
    let tituloCarrito = document.createElement("h2");
    tituloCarrito.textContent = "Tu Carrito";
    contenidoCarrito.appendChild(tituloCarrito);
    
    let totalImporte = 0;

    if (carrito.length === 0) {
        let mensajeVacio = document.createElement("p");
        mensajeVacio.textContent = "Tu carrito está vacío";
        contenidoCarrito.appendChild(mensajeVacio);
    } else {
        carrito.forEach((item, index) => {
            let itemCarrito = document.createElement("div");
            itemCarrito.classList.add("item-carrito");
            
            let nombreItem = document.createElement("h3");
            nombreItem.textContent = item.nombre;
            
            let precioItem = document.createElement("p");
            let precio = (item.precio / 100).toFixed(2);
            precioItem.textContent = `Precio: $${precio}`;
            
            let cantidadItem = document.createElement("p");
            cantidadItem.textContent = `Cantidad: ${item.cantidad}`;
            
            let eliminarBtn = document.createElement("button");
            eliminarBtn.textContent = "Eliminar";
            eliminarBtn.onclick = () => {
                carrito.splice(index, 1);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                document.body.removeChild(modalCarrito);
                mostrarCarrito();
            };
            
            itemCarrito.appendChild(nombreItem);
            itemCarrito.appendChild(precioItem);
            itemCarrito.appendChild(cantidadItem);
            itemCarrito.appendChild(eliminarBtn);
            
            contenidoCarrito.appendChild(itemCarrito);
            
            totalImporte += item.precio * item.cantidad / 100;
        });
    }
    
    let totalLabel = document.createElement("p");
    totalLabel.textContent = `Total: $${totalImporte.toFixed(2)}`;
    totalLabel.classList.add("total-carrito");
    contenidoCarrito.appendChild(totalLabel);
    
    let comprarBtn = document.createElement("button");
    comprarBtn.textContent = "Comprar";
    comprarBtn.onclick = () => {
        alert("Gracias por tu compra (simulación)");
    };
    
    let cerrarBtn = document.createElement("button");
    cerrarBtn.textContent = "Cerrar";
    cerrarBtn.onclick = () => {
        document.body.removeChild(modalCarrito);
    };
    
    contenidoCarrito.appendChild(comprarBtn);
    contenidoCarrito.appendChild(cerrarBtn);
    modalCarrito.appendChild(contenidoCarrito);
    document.body.appendChild(modalCarrito);
}
