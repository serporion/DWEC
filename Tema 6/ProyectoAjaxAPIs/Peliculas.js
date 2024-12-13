let pagina = 1;

let alturaVisible = document.documentElement.clientHeight;

let paso1 = false; // Para div Contacto.
let paso = false; // Variable de paso.


let arrayPeliculas = [];

let seleccion;

const NUMEROPELICULASINFORMES = 5;
const IMAGEN_POR_DEFECTO = "images/default.png";

window.onload = () => {


  let crea = document.getElementById("contacto");
  crea.addEventListener('click', creacion);

  let bot = document.getElementById("boton");

  bot.addEventListener('click', buscar);

  let cerrar = document.getElementById("cerrarDiv");

  cerrar.addEventListener("click", cerrarDetalles);
  document.getElementById("overlay").addEventListener("click", cerrarDetalles);

  let inputText = document.getElementById("cajaTexto");

  inputText.addEventListener("keydown", e => {
    if (e.key === "Enter") {

      e.preventDefault(); // prevent default se usa para evitar el comportamiento por defecto.

      bot.click(); // Uso habitual para simular que se está haciendo click en él.
    }

  });

  inputText.addEventListener("input", e => {

    if (e.target.value.length >= 3) {

      seleccion = document.getElementById("seleccion").value;

      buscar();
    }

  });

  window.addEventListener('scroll', scrollInfinito);
  window.addEventListener('scroll', scrollEfectoApagado);


  let peliculasValoradas = document.getElementById("peliculasValoradas");
  peliculasValoradas.addEventListener('click', () => creacionInforme("valoradas"));

  let peliculasRecaudacion = document.getElementById("peliculasRecaudacion");
  peliculasRecaudacion.addEventListener('click', () => creacionInforme("recaudacion"));

  let peliculasVotadas = document.getElementById("peliculasVotadas");
  peliculasVotadas.addEventListener('click', () => creacionInforme("votadas"));


  creaBotonArriba();

  botonArriba.addEventListener('click', () => {
    window.scrollTo
    ({
      top: 0,
      behavior: 'smooth'
    });
  });

}




/**
 * Crea el div que contiene el contacto y el botón de cierre.
 * Aparece en la parte superior de la pantalla.
 * Se muestra solo una vez por sesión hasta que se cierra.
 */
function creacion() {

  if (!paso1) {


    let divMiContacto = document.createElement('div');
    divMiContacto.id = "div_MiContacto";
    divMiContacto.style.position = "absolute";

    divMiContacto.style.left = "50%";
    divMiContacto.style.marginTop = "0.3rem";
    divMiContacto.style.transform = "translate(-50%, -50%)";
    divMiContacto.style.gap = "1rem";
    divMiContacto.style.maxWidth = "80%";
    divMiContacto.style.display = "inline-flex";


    let spanContacto = document.createElement('span');
    spanContacto.id = "spanContacto";
    spanContacto.innerHTML = "Oscar´s Creations!. oscardelgadohuertas@hotmail.com";
    spanContacto.style.color = "black";
    spanContacto.style.whiteSpace = "nowrap";

    divMiContacto.appendChild(spanContacto);


    let botonContacto = document.createElement('button');
    botonContacto.id = "cerrarContacto";
    botonContacto.addEventListener('click', cerrarContacto);
    botonContacto.innerHTML = "X";
    botonContacto.style.fontWeight = "bold";
    botonContacto.style.color = "red";
    botonContacto.style.backgroundColor = "black";
    botonContacto.style.fontSize = "15px";
    botonContacto.style.borderRadius = "50%";
    


    divMiContacto.appendChild(botonContacto);

    document.getElementById('creaContacto').appendChild(divMiContacto);

    paso1 = true;
  }

}


/**
 * Crea un botón "Volver al inicio" que inicialmente está oculto. Se muestra 
 * en la esquina inferior derecha de la pantalla. 
 */
function creaBotonArriba() {


  let botonArriba = document.createElement('button');

  botonArriba.innerHTML = '↑';
  botonArriba.id = 'botonArriba';
  botonArriba.style.position = 'fixed';
  botonArriba.style.bottom = '20px';
  botonArriba.style.right = '20px';
  botonArriba.style.display = 'none';
  botonArriba.style.padding = '15px';
  botonArriba.style.backgroundColor = 'crimson';
  botonArriba.style.color = 'blue';
  botonArriba.style.border = 'none';
  botonArriba.style.borderRadius = '50%';
  botonArriba.style.cursor = 'pointer';
  botonArriba.style.fontSize = '25px';

  document.body.appendChild(botonArriba);
}


/**
 * Cierra el div que contiene el contacto y el botón de cierre.
 * Se reinicia la variable de paso1 para que se muestre de nuevo.
 */
function cerrarContacto() {

  document.getElementById("spanContacto").remove();
  document.getElementById("cerrarContacto").remove();

  paso1 = false;

}


/**
 * Realiza una petición a la API con el tipo de búsqueda seleccionada por el
 * usuario y muestra los resultados en la pantalla.
 */
function buscar() {

  seleccion = document.getElementById("seleccion").value;


  let span = document.getElementById('cargando');
  span.classList.add("cargando");

  document.getElementById("contenedorPeliculas").innerHTML = "";

  let numeroPeliculas = document.getElementById("numPeliculas");
  numeroPeliculas.innerHTML = "";

  peticionPelisGenericas();

}

/**
 * Muestra u oculta la navegación y el botón "Volver al inicio" 
 * según la posición vertical del scroll.
 * Llama a la función verMas() cuando se acerca al final de la página
 * y crea una petición a la API para obtener más películas.
 */
function scrollInfinito() {

  let navegacion = document.getElementById("navegacion");

  let scrollY = window.scrollY;

  if (scrollY > 250) {

    navegacion.style.display = 'none';
    botonArriba.style.display = 'block';

  } else {

    navegacion.style.display = 'block';
    botonArriba.style.display = 'none';
  }


  let maximoScroll = document.documentElement.scrollHeight - alturaVisible;


  if (scrollY + alturaVisible >= maximoScroll * 0.8 && !paso) { // Controlamos la respuesta con un boolenao para no hacer la petición de nuevo en un mismo momento. No con la eliminiación del evento. Never More!!
    paso = true;
    verMas();
  }
}

/**
 * Cambia la opacidad de la imagen de fondo según la posición vertical del scroll.
 * Entre más abajo esté el scroll, más opaco se vuelve una parte del fondo seleccionada
 * asta un máximo de 22. 
 */
function scrollEfectoApagado() {

  let maximoScroll = document.documentElement.scrollHeight - alturaVisible;

  let scrollY = window.scrollY;

  let opacity = Math.min(scrollY / maximoScroll * 10, 22);  //22 es el máximo de mi opacidad
  document.querySelector('body').style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}), transparent 100%), url('./images/imagenFondo.jpg')`;

}



/**
 * Devuelve la url de la imagen de la película.
 * Si la película no tiene asignada una imagen (Poster === "N/A"),
 * devuelve una imagen por defecto.
 */
function imagenPoster(pelicula) {
  if (pelicula.Poster === "N/A") {
    return IMAGEN_POR_DEFECTO;
  } else {
    return pelicula.Poster;
  }
}

/**
 * Obtiene películas o series según la entrada del usuario y las muestra en la pantalla.
 * Si no se proporciona ninguna entrada, muestra un mensaje de error.
 * De lo contrario, realiza una solicitud API para recuperar los datos, procesa los resultados, 
 * y agrega detalles de la película al elementos HTML imagen.
 * Además, obtiene detalles adicionales para cada película y actualiza el global 
 * variedad de películas con esta información.
 * Maneja respuestas exitosas y no exitosas, actualizando la interfaz de usuario 
 * respectivamente.
 */
 function peticionPelisGenericas() {

  let pelicula = document.getElementById('cajaTexto').value

  let spanMensaje = document.getElementById('span');


  if (!pelicula) {

    spanMensaje.innerHTML = "Introduce el titulo de la pelicula o serie a buscar.";
    document.getElementById("cargando").classList.remove("cargando");
    paso = false;

  } else {

    span.innerHTML = "";

    fetch("https://www.omdbapi.com/?apikey=1a3dcaad&type=" + seleccion + "&s=" + pelicula + "&page=" + pagina, { method: "GET" })
      .then((res) => res.json())
      .then((datosRecibidos) => {


        if (datosRecibidos.Response === "True") {



          const peliculasFiltradas = datosRecibidos.Search.map(pelicula => {
            return {
              Title: pelicula.Title,
              imdbID: pelicula.imdbID
            };
          });


          arrayPeliculas.push(...peliculasFiltradas);

          const detallesPromesas = arrayPeliculas.map((pelicula, index) => {
            return detallesInforme(pelicula.imdbID)
              .then(detalles => {
                // Añadimos los datos extra al objeto de cada película
                arrayPeliculas[index] = { ...pelicula, ...detalles };
              });
          });


          Promise.all(detallesPromesas)
            .then(() => {
              
            })
                      
          document.getElementById("cargando").classList.remove("cargando");

          
          let titulo;
          let imagen;
          let img;

          if (datosRecibidos.Response === "True") {

            //window.addEventListener('scroll', scrollInfinito); NO FUNCIONA. SE DESBORDA.

            for (pelicula of datosRecibidos.Search) {

              let construirPelicula = document.createElement("div");
              construirPelicula.className = "construirPelicula";

              titulo = document.createElement("p");

              titulo.innerHTML = pelicula.Title;
              titulo.style.maxWidth = "300px";
              titulo.style.color = "white";
              titulo.style.fontWeight = "bold";
              titulo.style.fontSize = "0.9rem";


              imagen = document.createElement('div');
              imagen.classList.add("imagen");

              img = document.createElement("img");

              img.src = imagenPoster(pelicula);


              img.dataSet = pelicula.imdbID;
              img.addEventListener("click", detalles);

              let listasPeliculas = document.getElementById('contenedorPeliculas');

              imagen.appendChild(img);
              construirPelicula.appendChild(titulo);
              construirPelicula.appendChild(imagen);

              listasPeliculas.appendChild(construirPelicula);


              let numeroPeliculas = document.getElementById("numPeliculas");
              numeroPeliculas.innerHTML = "Numero de títulos: " + datosRecibidos.totalResults;
              paso = false;

            }

          } else {

            //window.removeEventListener('scroll', scrollInfinito); NO FUNCIONA. SE DESBORDA. Uso boleano paso para manejar peticiones sin haber habido respuesta.

            let span = document.getElementById('span');

            span.innerHTML = "NO HAY TÍTULOS PARA MOSTRAR (" + datosRecibidos.Error + ")";

          }

        } else {
          span.innerHTML = "EL TÍTULO NO EXISTE EN NUESTRA BASE DE DATOS";
          document.getElementById("cargando").classList.remove("cargando");
        }
      })    

  }
}

/**
 * Llama a la función peticionPelisGenericas para obtener más películas.
 * Suma uno al valor de la variable global pagina, que se utiliza para 
 * realizar la petición de paginación que nos permite la API.
 */

function verMas() {

  pagina++;

  peticionPelisGenericas();

}

/**
 * Muestra la información detallada de una película en una capa emergente
 * al hacer click en una de las películas de la lista.
 * Se manejan respuestas exitosas y no exitosas.
 */

function detalles(e) {

  document.getElementById("cargando").classList.add("cargando")

  let url = "https://www.omdbapi.com/?apikey=1a3dcaad&i=" + e.target.dataSet;

  fetch(url + "&Plot=full", { method: "GET" })
    .then((res) => res.json())
    .then((datosRecibidos) => {


      if (datosRecibidos.Response === "True") {

        document.getElementById("cargando").classList.remove("cargando")

        document.getElementById("overlay").style.display = "block";

        let PeliculaIndividual = document.getElementById("construirInformacion");

        //PeliculaIndividual.style.display = "block"; //No me deja aplicar Flex. Hago clase aparte.
        PeliculaIndividual.classList.add("mostrar");

        let imagen = document.getElementById('imagenPelicula');

        let img = document.getElementById("imagenPeliculaIndividual");

        img.src = imagenPoster(datosRecibidos);

        imagen.appendChild(img);


        PeliculaIndividual.appendChild(imagen);

        let datosPelicula = document.getElementById("datosPelicula");


        titulo = document.getElementById("tituloPelicula");
        titulo.innerHTML = datosRecibidos.Title;


        datosPelicula.appendChild(titulo);


        let datosEspecificos = document.getElementById("datosEspecificos");


        let director = document.getElementById("directorPelicula");
        director.innerHTML = "Director: " + datosRecibidos.Director;

        datosEspecificos.appendChild(director);


        let actores = document.getElementById("actoresPelicula");
        actores.innerHTML = "Actores: " + datosRecibidos.Actors;

        datosEspecificos.appendChild(actores);

        let anio = document.getElementById("anioPelicula");
        anio.innerHTML = "Año: " + datosRecibidos.Year;

        datosEspecificos.appendChild(anio);

        let duracion = document.getElementById("duracionPelicula");
        duracion.innerHTML = "Duracion: " + datosRecibidos.Runtime;

        datosEspecificos.appendChild(duracion);

        datosPelicula.appendChild(datosEspecificos);


        let resumen = document.getElementById("plotPelicula");
        resumen.innerHTML = "<span>Sinopsis: </span>" + datosRecibidos.Plot;

        datosPelicula.appendChild(resumen);


        let imdb = document.getElementById("imdb");


        let ratingimdb = document.getElementById("imdbRating");
        ratingimdb.innerHTML = "<span>Rating imdb: </span>" + datosRecibidos.imdbRating;

        let imdbVotes = document.getElementById("imdbVotes");
        imdbVotes.innerHTML = "<span>Votos imdb: </span>" + datosRecibidos.imdbVotes;

        imdb.appendChild(ratingimdb);
        imdb.appendChild(imdbVotes);

        datosPelicula.appendChild(imdb);

        let valoracionesDiv = document.getElementById("valoraciones");

        valoracionesDiv.innerHTML = "";

        datosRecibidos.Ratings.forEach((rating) => {
          let p = document.createElement("p");
          p.innerText = `${rating.Source}: ${rating.Value}`;
          valoracionesDiv.appendChild(p);
        });

        datosPelicula.appendChild(valoracionesDiv);

        PeliculaIndividual.appendChild(imagenPelicula);
        PeliculaIndividual.appendChild(datosPelicula);
        PeliculaIndividual.appendChild(cerrar);

      }
    })
}


/**
 * Cierra la capa emergente que muestra la información detallada de una película.
 * Muestra de nuevo la lista de películas y oculta el informe.
 */
function cerrarDetalles() {

  document.getElementById("overlay").style.display = "none";
  document.getElementById("construirInformacion").classList.remove("mostrar");

  document.getElementById("imagenPelicula").style.display = "block";
  document.getElementById("datosPelicula").style.display = "block";
  document.getElementById("plotPelicula").style.display = "block";
  document.getElementById("imdb").style.display = "flex";
  document.getElementById("valoraciones").style.display = "block";

  document.getElementById("imagenInforme").style.display = "none";
  document.getElementById("datosInforme").style.display = "none";
  document.getElementById("datosInforme").innerText = "";

  //document.getElementById("construirInformacion").style.display = "none"; // Oculta el div construirInformacion.classList.add("ocultar"); //Cuidado. No lo hace.

}

/**
 * Genera un informe detallado basado en la opción seleccionada y lo muestra.
 * Oculta los detalles de la película actual y muestra la información del informe en una
 * capa emergente. Filtra y ordena la matriz de películas global según la opción especificada,
 * y carga un gráfico para visualizar los datos. Si no hay películas disponibles,
 * muestra un mensaje indicando que no se puede generar ningún informe.
 */
function creacionInforme(opcion) {

  document.getElementById("imagenPelicula").style.display = "none";
  document.getElementById("datosPelicula").style.display = "none";
  document.getElementById("plotPelicula").style.display = "none";
  document.getElementById("imdb").style.display = "none";
  document.getElementById("valoraciones").style.display = "none";

  document.getElementById("imagenInforme").style.display = "block";
  document.getElementById("datosInforme").style.display = "block";

  if (arrayPeliculas.length > 0) {


    document.getElementById("overlay").style.display = "block";
    document.getElementById("construirInformacion").style.height = "80%";
    document.getElementById("imagenInforme").style.maxWidth = "40rem";
    document.getElementById("imagenInforme").style.marginRight = "1.5rem";
    document.getElementById("imagenInforme").style.flex = "3";
    document.getElementById("imagenInforme").style.padding = "10px";
    document.getElementById("datosInforme").style.width = "400px";
    document.getElementById("datosInforme").style.height = "200px";

    document.getElementById("construirInformacion").classList.add("mostrar");


    let peliculasFiltradas = [];

    if (opcion === "valoradas") {

      peliculasFiltradas = arrayPeliculas
        .filter(pelicula => pelicula.imdbRating !== "N/A")  // De cabeza!!!!
        .sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating))
        .slice(0, NUMEROPELICULASINFORMES);      

    } else if (opcion === "votadas") {

      peliculasFiltradas = arrayPeliculas
        .filter(pelicula => pelicula.imdbVotes !== "N/A")
        .sort((a, b) => parseInt(b.imdbVotes.replace(/,/g, '')) - parseInt(a.imdbVotes.replace(/,/g, '')))
        .slice(0, NUMEROPELICULASINFORMES);

    } else if (opcion === "recaudacion") {

      peliculasFiltradas = arrayPeliculas
        .filter(pelicula => pelicula.boxOffice !== "N/A")
        .sort((a, b) => parseInt(b.boxOffice.replace(/[^\d]/g, '')) - parseInt(a.boxOffice.replace(/[^\d]/g, '')))
        .slice(0, NUMEROPELICULASINFORMES);
    }


    google.charts.load('current', { 'packages': ['bar'] });

    google.charts.setOnLoadCallback(() => drawChart(peliculasFiltradas, opcion));

  } else {

    document.getElementById("span").innerHTML = "No hay películas para realizar el informe.";
  }
}


/**
 * Genera y muestra un gráfico, junto con una tabla HTML, según lo filtrado. 
 * películas y la opción seleccionada. El gráfico se dibuja utilizando Google Charts.
 
 * La función crea una tabla y un gráfico, mostrando las mejores películas según el 
 * criterios especificados. Establece títulos, subtítulos y estilos para elementos visuales, y 
 * agrega la tabla generada al DOM. También utiliza Google Charts para dibujar un 
 * gráfico de barras, basado en los datos proporcionados, dentro de un contenedor HTML específico.
 */
function drawChart(peliculasFiltradas, opcion) {

  var arrayDataTabla = [
    ['Película', 'Valor']
  ];

  let leyenda;
  let subtitulo;

  let tabla = document.createElement("table");
  tabla.id = "tablaPeliculas";
  tabla.style.border = "1px solid black";
  tabla.style.width = "100%";
  tabla.style.borderCollapse = "collapse";


  let thead = document.createElement("thead");
  let trHead = document.createElement("tr");
  let thPelicula = document.createElement("th");
  let thValor = document.createElement("th");

  thPelicula.innerHTML = "Película / Serie";
  thValor.innerHTML = opcion;
  trHead.appendChild(thPelicula);
  trHead.appendChild(thValor);
  thead.appendChild(trHead);
  tabla.appendChild(thead);


  let tbody = document.createElement("tbody");

  peliculasFiltradas.forEach(pelicula => {

    let tr = document.createElement("tr");
    let tdPelicula = document.createElement("td");
    let tdValor = document.createElement("td");
    tdPelicula.innerHTML = pelicula.Title;

    let valor;
    if (opcion === "valoradas") {
      valor = parseFloat(pelicula.imdbRating);
      leyenda = "Media de las valoraciones de Imdb";
      subtitulo = "valoración";
    } else if (opcion === "votadas") {
      valor = parseInt(pelicula.imdbVotes.replace(/,/g, ''));
      leyenda = "Miles de votos";
      subtitulo = "número de votos";
    } else if (opcion === "recaudacion") {
      valor = parseInt(pelicula.boxOffice.replace(/[^\d]/g, ''));
      leyenda = "Millones de dólares";
      subtitulo = "recaudación";
    }
    tdValor.innerHTML = valor;

    tr.appendChild(tdPelicula);
    tr.appendChild(tdValor);
    tbody.appendChild(tr);

    arrayDataTabla.push([pelicula.Title, valor]);
  });


  tabla.appendChild(tbody);

  document.getElementById("datosInforme").appendChild(tabla);

  var data = google.visualization.arrayToDataTable(arrayDataTabla);

  const options = {
    chart: {

      title: 'Top +' + NUMEROPELICULASINFORMES + ' Películas por ' + subtitulo,
      subtitle: 'Ranking basado en ' + opcion,
      bar: { groupWidth: "20%" },
      color: 'red',
      titleTextStyle: {
        fontSize: 18,
        bold: true,
        color: 'red'
      },
    },

    bars: 'vertical',

    hAxis: {
      title: "Titulo",
      textPosition: 'center',
      titleTextStyle: {
        fontSize: 15,
        color: 'yellow',
        padding: 5,
        marginLeft: 10,
      },
      textStyle: {
        title: '',
        textPosition: 'none',
        fontSize: 14,
        color: '2c2c2c'
      }
    },


    vAxis: {
      title: leyenda,
      titleTextStyle: {
        fontSize: 15,
        color: 'yellow',
        padding: 10
      },
      textStyle: {
        fontSize: 15,
        color: 'yellow'
      }
    },

    chartArea: {
      left: 60,
      top: 30,
      right: 30,
      bottom: 60,
    },

    legend: {
      position: 'right',
      textStyle: {

        color: '2c2c2c'
      }
    },


    backgroundColor: '#2c2c2c',
    series: {
      0: { color: 'green' },
      1: { color: 'blue' },
    }
  };

 
  var chart = new google.charts.Bar(document.getElementById('imagenInforme'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
 
  google.visualization.events.addListener(data, 'select', selectHandler);
}

/**
 * Maneja selecciones en el gráfico. Cuando se haga una selección, ésta será
 * llamado con el objeto de selección como argumento. El objeto de selección
 * tiene tres propiedades: `fila`, `columna` y `etiqueta`. Los valores de estos
 * las propiedades son los índices de fila y columna de la celda seleccionada, y el
 * etiqueta de texto de esa celda. Si la selección es una selección de fila, la columna
 * la propiedad será nula. Si la selección es una selección de columna, la fila
 * la propiedad será nula. Si la selección es una selección de celda, los tres
 * las propiedades no serán nulas.
 */
function selectHandler() {

  var selection = data.getSelection();

  var message = '';


  for (var i = 0; i < selection.length; i++) {
    var item = selection[i];
    if (item.row != null && item.column != null) {
      var str = data.getFormattedValue(item.row, item.column);
      message += '{row:' + item.row + ',column:' + item.column + '} = ' + str + '\n';
    } else if (item.row != null) {
      var str = data.getFormattedValue(item.row, 0);
      message += '{row:' + item.row + ', column:none}; value (col 0) = ' + str + '\n';
    } else if (item.column != null) {
      var str = data.getFormattedValue(0, item.column);
      message += '{row:none, column:' + item.column + '}; value (row 0) = ' + str + '\n';
    }
  }
  if (message == '') {
    message = 'nothing';
  }
  alert('You selected ' + message);
}


/**
 * Obtiene información detallada sobre una película de la API de OMDB utilizando el ID de IMDb proporcionado.
 * Muestra un indicador de carga mientras se obtienen datos. Devuelve un objeto que contiene
 * la calificación de IMDb, los votos de IMDb y la recaudación de taquilla de la película.
 * Si la búsqueda falla o no se encuentra la película, registra un error y devuelve un objeto vacío.
 */
function detallesInforme(id) {


  document.getElementById("cargando").classList.add("cargando");

  let url = "https://www.omdbapi.com/?apikey=1a3dcaad&i=" + id + "&Plot=full";

  return fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((datosRecibidos) => {
      if (datosRecibidos.Response === "True") {


        document.getElementById("cargando").classList.remove("cargando")

        return {
          imdbRating: datosRecibidos.imdbRating,
          imdbVotes: datosRecibidos.imdbVotes,
          boxOffice: datosRecibidos.BoxOffice || "N/A"
        };
      }
      return {};
    })
    .catch(error => {

      document.getElementById("cargando").classList.remove("cargando")

      return {};
    });
}