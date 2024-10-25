document.write("<table border=1 >");

for (let i = 0; i < 10; i++) {

    document.write("<tr>");

    document.write("<td>" + i + "</td>");

    document.write("<td>" + Math.sin(i).toFixed(2) + "</td>");

    document.write("</tr>");

}

document.write("</table>");

