//No funciona porque se llama primero al Script y luego carga el HTML
document.write("La página tiene " + document.images.length + " imagenes");
document.title = "Mi primera pagina web";


  
for (let i of document.images){
    console.log(i.id);
  }
  
  
  for (let i in document.location){
    console.log(i);
  }
  
  
  document.write(document.location + "<br>");
  document.write(document.URL + "<br>");
  document.write("esta es" + document.referrer);
  
  console.log(document.title);
  
  for (let i in navigator){
    console.log(i);
  }

  document.title = "AHORA ES ESTE";

  console.log(document.title);

  console.log(document.location);

//Nos dice hacia donde está referenciado el objeto url. Si lo ejecutas en el navegador pinchando en el index, 
//y yendo a inspeccionar, nos muestra la información porque accede al objeto Location que contiene información sobre la URL actual del documento.


const anchor = document.location.anchor.length;

console.log(anchor);
//const result = anchor.href; 

//window.open(result);