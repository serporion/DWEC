
let mes = prompt("Dame un mes");

mes = mes.toLowerCase();

document.write(mes);

switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
      document.write("<p>Este mes tiene 31 dias");
      break;
    case "abril":
    case "junio":
    case "septiembre": 
    case "noviembre": 
      document.write("<p>Este mes tiene 30 dias");
      break;
    case "febrero":
      document.write("<p>Este mes tiene 28 o 29 dias");
      break;
    default:
      document.write("<p>No me has indicado bien el mes");
}
