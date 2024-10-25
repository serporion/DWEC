let numero = parseInt(prompt("Dame un número y te diré si es múltiplo de 2, de 3 y/o de 5"));
let opcion;
let paso = false;

if (numero%2 == 0) {
    opcion = 1;
} else if (numero%3 == 0) {
    opcion = 2;
} else if (numero%5 == 0) {
    opcion = 3;
}

switch (opcion) {
    case 1:
        document.write("<br>El número es múltiplo de 2");

        if (numero%5 == 0){
            document.write("<br>El número también es múltiplo de 5");
        }
        break;
    case 2:
        document.write("<br>El número es múltiplo de 3");

        if (numero%5 == 0){
            document.write("<br>El número también es múltiplo de 5");
        }

        break;
    case 3:
        document.write("<br>El número es múltiplo de 5");

        if (numero%5 == 0){
            document.write("<br>El número también es múltiplo de 5");
        }
        break;
    default:
        document.write("<br>El número no es múltiplo de ninguno");
  }

