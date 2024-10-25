let numero = prompt("Dame un numero");
let suma = 0;

if (!isNaN(numero)) {
    
    for (let i = 0; i <= numero.length -1; i++) {
        document.write("<br>" + numero[i]);
        suma += parseInt(numero[i]);
    }

    document.write("<br>La suma de los digitos del número introducido es " + suma);
} else {
    document.write("No has introducido un numero");
}