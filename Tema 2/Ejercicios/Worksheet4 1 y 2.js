
document.write("<table border=1>");
    document.write("<tr>")
    document.write("<td colspan=2 bgcolor=lightblue align=center height=50 italic >");
        document.write("Objeto Navigator");
    document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6> UserAgent</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( document.navigator.userAgent );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6> Language</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( navigator.language );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6> Pdf View Habilited</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( navigator.pdfViewerEnabled );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
    document.write("<td colspan=2 bgcolor=lightblue align=center height=50>");
        document.write("Objeto Screen");
    document.write("</td>");
    document.write("</tr>")

    document.write("<tr>")
        document.write("<td>");
            document.write("<h6>Color Depth</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( screen.colorDepth );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6>Height</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( screen.height );
        document.write("</td>");
    document.write("</tr>")
    document.write("<tr>")
        document.write("<td>");
            document.write("<h6>Height</h6>");
        document.write("</td>");
        document.write("<td>");
            document.write( screen.width );
        document.write("</td>");
    document.write("</tr>")

document.write("</table>");

