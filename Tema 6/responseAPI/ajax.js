

let pagina = 1;

let cajaTexto;
window.onload = () => {

  let bot = document.getElementById("boton");
  let bot1 = document.getElementById("boton1");

  bot.addEventListener('click', peticionAjax);
  bot1.addEventListener('click', peticionAjaxModernaPelis);


  //setInterval(peticionAjax, 5000);

}

function peticionAjax() {


  //fetch 

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

      let respuesta = JSON.parse(this.responseText);


      for (nota of respuesta.notas) {

        console.log(nota);
        let tituloInput = document.createElement("li");
        tituloInput.innerHTML = nota.titulo;
        tituloInput.style.fontSize = "17px";
        tituloInput.style.textAlign = "left";
        tituloInput.style.fontWeight = "bold";


        document.getElementById("listaNotas").appendChild(tituloInput);

      }

    }

  };

  xhttp.open("GET", "notas.txt", true);
  xhttp.send();

}


function peticionAjaxModernaPelis() {


  if (cajaTexto != document.getElementById('cajaTexto').value) {

    document.getElementById("peliculas").innerHTML = "";

  }

  pelicula = document.getElementById('cajaTexto').value
  cajaTexto = pelicula;


  let span = document.createElement('span');
  span.classList.add("error");
  span.id = "span";
  span.innerHTML = "No has introducido una película";

  if (!pelicula) {


    document.getElementById("error").appendChild(span);

  } else {

    if (document.getElementById("span")) {

      let numSpan = document.querySelectorAll("span");

      Array.from(numSpan).forEach(e => e.remove());

      //document.getElementById("span").remove();
    }



    fetch("http://www.omdbapi.com/?apikey=1a3dcaad&s=" + pelicula + "&page=" + pagina, { method: "GET" })
      .then((res) => res.json())
      .then((datosRecibidos) => {

        console.log(datosRecibidos);

        if (datosRecibidos.Response === "True") {

          for (pelicula of datosRecibidos.Search) {


            let listaPeliculas = document.createElement('div');
            listaPeliculas.classList.add("contenedorPeliculas");

            console.log(listaPeliculas);
            let titulo = document.createElement("p");

            titulo.innerHTML = pelicula.Title;

            let imagen = document.createElement('div');
            imagen.classList.add("imagen");

            let img = document.createElement("img");
            img.src = pelicula.Poster;
            img.dataSet = pelicula.imdbID;

            img.addEventListener("click", detalles);

            imagen.appendChild(img);
            listaPeliculas.appendChild(titulo);
            listaPeliculas.appendChild(imagen);

            document.getElementById("peliculas").appendChild(listaPeliculas);

          }

          let numeroPeliculas = document.getElementById("numPeliculas");
          numeroPeliculas.innerHTML = "Numero de peliculas: " + datosRecibidos.totalResults;

          let aumenta = document.getElementById("Siguiente Pagina");

          aumenta.addEventListener("click", verMas);


        } else {

          let span = document.createElement('span');
          span.classList.add("error");

          span.innerHTML = "NO EXISTEN PELICULAS (" + datosRecibidos.Error + ")";
          document.getElementById("error").appendChild(span);
        }

      })
  }
}

function verMas() {

  pagina++;

  peticionAjaxModernaPelis();

}

function detalles(e) {
  console.log(e.target.dataSet);
  let url = "http://www.omdbapi.com/?apikey=1a3dcaad&i=" + e.target.dataSet;
  console.log(url);


  
  fetch(url+"&Plot=full", { method: "GET" })
  .then((res) => res.json())
  .then((datosRecibidos) => {

    //console.log(datosRecibidos);

    if (datosRecibidos.Response === "True") {

      //for (pelicula of datosRecibidos.Search) {


        let listaPeliculas = document.createElement('div');
        listaPeliculas.classList.add("contenedorPeliculas");

        console.log(listaPeliculas);
        let titulo = document.createElement("p");

        titulo.innerHTML = datosRecibidos.Title;

        let imagen = document.createElement('div');
        imagen.classList.add("imagen");

        let img = document.createElement("img");
        img.src = datosRecibidos.Poster;
        //img.dataSet = pelicula.imdbID;
        imagen.appendChild(img);

        //img.addEventListener("click", detalles);


        let resumen = document.createElement('div');
        resumen.innerHTML = datosRecibidos.Plot;

        
        listaPeliculas.appendChild(titulo);
        listaPeliculas.appendChild(imagen);
        listaPeliculas.appendChild(resumen);

        crearPagina(listaPeliculas);
        

        //document.getElementById("peliculas").appendChild(listaPeliculas);

      //}

      let numeroPeliculas = document.getElementById("numPeliculas");
      numeroPeliculas.innerHTML = "Numero de peliculas: " + datosRecibidos.totalResults;

      let aumenta = document.getElementById("Siguiente Pagina");

      aumenta.addEventListener("click", verMas);


    } else {

      let span = document.createElement('span');
      span.classList.add("error");

      span.innerHTML = "NO EXISTEN PELICULAS (" + datosRecibidos.Error + ")";
      document.getElementById("error").appendChild(span);
    }

  })


  function crearPagina(pelicula) {

    document.getElementById("peliculas").innerHTML = "";

    document.getElementById("peliculas").appendChild(pelicula);
  }

} 
