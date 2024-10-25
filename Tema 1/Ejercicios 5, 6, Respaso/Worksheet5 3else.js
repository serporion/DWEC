let edadescuela = prompt("Dame tu edad y vemos en que nivel educativo debe de estar");

if (edadescuela <= 5) {
    document.write("<br>Debe estar en jardín de infancia");
} else if (edadescuela >= 6 && edadescuela <= 11) {
    document.write("<br>Debe estar en primaria");
} else if (edadescuela >= 12 && edadescuela <= 16) {
    document.write("<br>Debe estar en la ESO");
} else if (edadescuela >= 17 && edadescuela <= 21) {
    document.write("<br>Debe estar en la Bachillerato o Ciclos superiores");
} else {
    document.write("<br>Debe estar en la Universidad");
}