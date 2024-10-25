/*

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }

  const car1 = new Car("Ford", "Mustang", 1969, "John Doe");

function showProps(obj, objName) {
    let result = "";
    for (const i in obj) {
      // Object.hasOwn() is used to exclude properties from the object's
      // prototype chain and only show "own properties"
      if (Object.hasOwn(obj, i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    console.log(result);
  }

  showProps(car1, "Cars");

  

  const arr = [5, 2, 3];

function red(a, b) {
    return Math.max(a, b);
}

//console.log(red(...arr));

const ano1 = arr.reduce((a,b) => Math.max(a,b));

const ano2 = Math.max.apply(null, arr);

const ano3 = arr.reduce((a, b) => a+b);


console.log(ano1);
console.log(ano2);
console.log(ano3);

//console.log(max); // 3

let dia = Date.now();

document.write("<br>" + dia);


let dia1 = new Date();

document.write("<br>" + dia1);

let dia2 = new Date().toUTCString();

document.write("<br>" + dia2);

console.log(dia1.toLocaleDateString());

if (dia1.toLocaleDateString() == "2024/10/12"){
    console.log("<br> Perfecto")
}

let diaInvento = new Date("2000/10/05");



console.log(diaInvento);


diaInvento.setDate(diaInvento.getDate() - 4);
document.write("<br>");
document.write(diaInvento);



let diaDiferencia = new Date(dia2) - new Date(diaInvento);
console.log(diaDiferencia); 
console.log(new Date(diaDiferencia));




let contador = 3;

function contadorAtras (){
  let a;
   
    document.open();
    document.write ("13:00:" + contador);
    contador--;
    document.close();
  
  
  if (contador<=0){
    clearTimeout(a);
    if (a){};
    window.open("https://www.google.es", "_blank"); 
    //window.location.href = "https://www.google.es";
    //location.assign("https://www.google.es");
  }else if (contador >= 0){
    a = setTimeout(contadorAtras,1000);
    
  }

  
}

contadorAtras();
//let a = setTimeout(contadorAtras,1000);
//let a = setInterval(contadorAtras,1000);


function factorial(n){

  if (n==1){
    return 1;
  }else {
    return n* factorial(n-1);
}

}

console.log(factorial(5));




function mostrarHora(){
let hoy = new Date();
document.open();


let horas = String(hoy.getHours()).padStart(2, '0');
let minutos = String(hoy.getMinutes()).padStart(2, '0');
let segundos = String(hoy.getSeconds()).padStart(2, '0');


document.write("<br>")
document.write("<table>")
document.write("<tr>")
  document.write("<td>")
    document.write(horas);
  document.write("</td>")
  document.write("<td>")
    document.write(minutos);
  document.write("</td>")
  document.write("<td>")
    document.write(segundos);
  document.write("</td>")

  document.write("<table>")

  document.close();

if (horas === "17" && minutos === "01" && segundos === "00"){
  clearTimeout(paro);

}

  let paro = setTimeout(mostrarHora,1000);

}

mostrarHora();
*/



document.write("<table border=1>");
    document.write("<tr>")
    document.write("<td colspan=2 bgcolor=lightblue align=center height=50 italic >");
        document.write("Objeto Navigator");
    document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6> UserAgent</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write(navigator.userAgent );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6> Language</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( navigator.language );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6> Pdf View Habilited</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( navigator.pdfViewerEnabled );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6> Geolocalion</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( navigator.geolocation );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td colspan=2 bgcolor=lightblue align=center height=50>");
        document.write("Objeto Screen");
    document.write("</td>");
    document.write("</tr>")

    document.write("<tr>")
        document.write("<td>");
            document.write("<h6>Color Depth</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( screen.colorDepth );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6>Height</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( screen.height );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6>Height</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( screen.width );
        document.write("</td>");
    document.write("</tr>")

document.write("</table>");


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
