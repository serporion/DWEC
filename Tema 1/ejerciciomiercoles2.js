
let num1 = parseInt(prompt("Dame un número y si es par te lo digo"));

if (num1%2 == 0) {
    document.write("<br>El número es par");
}


let edad = parseInt(prompt("Dame tu edad y te digo si eres mayor de edad"));

if (edad => 18) {
    document.write("<br>Eres mayor de edad");
}


let edadMayor25 = parseInt(prompt("Dame tu edad "));
let localidad = prompt("Dame tu localidad");

localidad = localidad.toLocaleLowerCase();


if (edadMayor25 >25)
{
    if (localidad == "madrid") 
    {
            document.write("<br>Enhorabuena");
    }
}


let descuento = prompt("Dame un numero y le aplico un descuento del quince y te lo muestro, pero si es mayor de 100");

if (descuento > 100) {
    document.write("<br>El precio con descuento es de " + descuento / 1.15);
}


    switch (fruitType) {
        case "Oranges":
          console.log("Oranges are $0.59 a pound.");
          break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    case "Bananas":
      console.log("Bananas are $0.48 a pound.");
      break;
    case "Cherries":
      console.log("Cherries are $3.00 a pound.");
      break;
    case "Mangoes":
      console.log("Mangoes are $0.56 a pound.");
      break;
    case "Papayas":
      console.log("Mangoes and papayas are $2.79 a pound.");
      break;
    default:
      console.log(`Sorry, we are out of ${fruitType}.`);
  }
  console.log("Is there anything else you'd like?");
  