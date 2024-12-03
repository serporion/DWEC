window.onload = () => {

let bot = document.getElementById("boton");
let bot1 = document.getElementById("boton1");

bot.addEventListener('click',peticionAjax);
bot1.addEventListener('click',peticionAjaxModerna);
    

setInterval(peticionAjax, 5000);

}

function peticionAjax() {


  fetch 

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
       
      let respuesta = JSON.parse(this.responseText);

        let lista = document.createElement("ul");
        lista.id = "listaslist";

        
        for (nota of respuesta.notas){

            console.log(nota);
            let tituloInput = document.createElement("li");
            tituloInput.style.width = "80%";
            tituloInput.style.padding = "100px";
            tituloInput.innerHTML = nota.id;
            tituloInput.style.fontSize = "25px";
            tituloInput.style.textAlign = "center";
            tituloInput.style.fontWeight = "bold";


            tituloInput.innerHTML = nota.id;
            //document.getElementsById("listaslist").appendChild(tituloInput);
            document.getElementById("listaslist").innerHTML = nota.id;
        }
      
      }
    
    };
    
    xhttp.open("GET", "notas.txt", true);
    xhttp.send();

    
}

function peticionAjaxModerna() {

  // The URL we will fetch from.
  fetch("/usuarios", {method: "GET"})

  //.then(res)=>res.json())
  //.then(json=>console.log(json));

  /*
  fetch(url)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    return response.text();
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then((text) => {
    poemDisplay.textContent = text;
  })
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => {
    poemDisplay.textContent = `Could not fetch verse: ${error}`;
  });
  */


    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

      
    
    };
    
    xhttp.open("GET", "notas.txt", true);
    xhttp.send();

    
}