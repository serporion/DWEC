let filas = prompt("Dame el numero de filas");
let columnas = prompt("Dame el numero de columnas");
let anchoColumna =  prompt("Dame el ancho de la columna");
let altoColumna = prompt("Dame el alto de la columna");
let anchoTotal = columnas * anchoColumna;

document.write("<table border = 0 cellspacing = 2 bgcolor = black width = "+anchoTotal+ ">");


for (let i = 1; i <= filas; i++) {

    document.write("<tr bgcolor = white height = " + altoColumna + ">");

    for (let j = 1; j <= columnas; j++) {


        if (i % 2 == 1) {

            if (j % 2 == 1) {
                document.write("<td width = " + anchoColumna + " bgcolor = black>");
            } else {
                document.write("<td width = " + anchoColumna + " bgcolor = white>");
            }

        } else {
            
            if (j % 2 == 0) {
                document.write("<td width = " + anchoColumna + " bgcolor = black>");
            } else {
                document.write("<td width = " + anchoColumna + " bgcolor = white>");
            }
            
        }

        document.write("</td>");
    }

    document.write("</tr>");
}

document.write("</table>");    