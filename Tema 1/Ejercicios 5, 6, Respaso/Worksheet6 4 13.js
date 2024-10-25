let columnas = prompt("Dame el numero de columnas");
let anchoColumna =  prompt("Dame el ancho de la columna");
let altoColumna = prompt("Dame el alto de la columna");
let anchoTotal = columnas * anchoColumna;

document.write("<table border = 0 cellspacing = 2 bgcolor = black width = "+anchoTotal+ ">");
document.write("<tr bgcolor = white height = " + altoColumna + ">");

while(columnas > 0) {
    document.write("<td width = " + anchoColumna + " bgcolor = white>");
    document.write("</td>");
    columnas--;
}



document.write("</tr>");
document.write("</table>");