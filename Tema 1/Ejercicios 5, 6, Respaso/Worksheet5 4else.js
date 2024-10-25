let hermanos = parseInt(prompt("Cuantos hermanos tienes"));
let cantidad = parseInt(prompt("Dame una cantidad"))



if (isNaN(hermanos) || isNaN(cantidad))  
    document.write("Me tienes que dar un número para ambos casos");
else 

    if (hermanos > 3) {
        document.write("Descuento del 15%");
        document.write("<br>El pago será de " + (cantidad / 1.15) + " € ");
    } else if (hermanos > 0 && hermanos <= 3) {
        document.write("Descuento del 5%");
        document.write("<br>El pago será de " + (cantidad / 1.05) + " € ");
    } else {
        document.write("No hay descuento");
        document.write("<br>El pago será de " + (cantidad) + " € ");
    }

