let numeros = prompt("Dame un numero");

if (numeros > 100) {

    document.write("<hr>" + "No puedes meter un numero mayor de 100");
}else

for (var i = numeros; i <=100;i++) {

    document.write("<hr>" + i);
}