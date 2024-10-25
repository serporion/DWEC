//const btn = document.querySelector("button");
//const btn1 = document.querySelector("button");


function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function cambiarColor() {
  document.body.style.backgroundColor = "red";
}

function saltarAlerta(e) {
    console.log(e);
    alert("Hello World");
}


function saltarAlertas() {
  alert("Hello World");
}


/*

const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});



const btn1 = document.getElementById("btn1")

btn1.addEventListener("click", () => console.log("Hello World"));

*/


const btn2 = document.getElementsByTagName("button");

console.log(btn2.length);

btn2[0].addEventListener("click", () => console.log("Hello World"));

btn2[1].addEventListener("mouseover", cambiarColor);
btn2[1].addEventListener("mouseout", ()=>document.body.style.backgroundColor = "blue");

btn2[0].addEventListener("click", saltarAlertas);
btn2[1].addEventListener("click", ()=> btn2[0].removeEventListener("click", saltarAlertas));





const cajatexto = document.getElementById("cajaTexto");

cajatexto.addEventListener("keydown", (e)=>console.log("has escrito en la caja la letra " + e.key));









