let tabla = parseInt(prompt("Dame un número y te doy su tabla de multiplicar hasta el 10"));

document.write("<table border = 0 cellspacing = 2 bgcolor = black>");


for (let i = 0; i <=10; i++) {
    document.write("<tr>" + tabla + " * " + i + " = " + tabla*i);
    document.write("</tr>");
}

document.write("</table>");