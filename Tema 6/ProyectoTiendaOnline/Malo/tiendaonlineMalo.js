window.onload = () => {


  url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";

solicitar(url);


  
}


function solicitar(url){

  fetch(url, { method: "GET" })
  .then((res) => res.json())
  .then((datosRecibidos) => {

      construir(datosRecibidos);
    
  })    


}


function construir(datosRecibidos){

  let card = document.getElementById("container");
  

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
        imagen.style.width = "100%";
        imagen.style.height = "100%";
        imagen.style.objectFit = "cover";

        divImagen.appendChild(imagen);

        let precio = document.createElement("p");
        precio.id = "precio";
        precio.innerHTML = datosRecibidos[i].price;
        precio.style.color = "red";

        divCard.appendChild(nombres);
        divCard.appendChild(divImagen);
        divCard.appendChild(precio);
        
        card.appendChild(divCard);
        

        //document.getElementById("conteiner").appendChild(card);
      

      }

}