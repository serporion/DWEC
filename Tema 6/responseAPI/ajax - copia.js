

let pagina=1;
let paso = false;
window.onload = () => {

let bot = document.getElementById("boton");
let bot1 = document.getElementById("boton1");

bot.addEventListener('click',peticionAjax);
bot1.addEventListener('click',peticionAjaxModernaPelis);
    

//setInterval(peticionAjax, 5000);

}

function peticionAjax() {


  //fetch 

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
       
      let respuesta = JSON.parse(this.responseText);

        //let lista = document.createElement("ul");
        //lista.id = "listaslist";

        
        for (nota of respuesta.notas){

            console.log(nota);
            let tituloInput = document.createElement("li");            
            tituloInput.innerHTML = nota.titulo;
            tituloInput.style.fontSize = "17px";
            tituloInput.style.textAlign = "left";
            tituloInput.style.fontWeight = "bold";


           
            document.getElementById("listaNotas").appendChild(tituloInput);
            //document.getElementById("listaslist").innerHTML = nota.id;
        }
      
      }
    
    };
    
    xhttp.open("GET", "notas.txt", true);
    xhttp.send();

    
}


function peticionAjaxModernaPelis(url){

  
  let pelicula = document.getElementById('cajaTexto').value;

  let span = document.createElement('span');
  span.classList.add("error");
  span.id = "span";
  span.innerHTML = "No has introducido una película";

  if (!pelicula){

    
    document.getElementById("error").appendChild(span);

  }else {

    if (document.getElementById("span")){
        document.getElementById("span").remove();
    }
    
    if (paso){

      fetch(url+"&plot=full", { method: "GET" } )
      paso = false;

    } else {

      

    }
    
    fetch("http://www.omdbapi.com/?apikey=1a3dcaad&s="+pelicula+"&page="+pagina, { method: "GET" })
    .then ((res)=> res.json())
    .then ((datosRecibidos)=> {

      console.log(datosRecibidos);
          
          if (datosRecibidos.Response ==="True") {
            
          for (pelicula of datosRecibidos.Search){


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

        }else {

          let span = document.createElement('span');
          span.classList.add("error");
                    
          span.innerHTML = "NO EXISTEN PELICULAS (" + datosRecibidos.Error+")";
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
    let url = "http://www.omdbapi.com/?apikey=1a3dcaad&i="+e.target.dataSet;
    console.log(url);

    if (e) {
      peticionAjaxModernaPelis(url);
      paso = true;
    }
   
  } 
