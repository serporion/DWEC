let edadMayor25 = parseInt(prompt("Dame tu edad "));
let localidad = prompt("Dame tu localidad");

localidad = localidad.toLocaleLowerCase();


if (edadMayor25 >25 && localidad == "madrid")
{
        document.write("<br>Enhorabuena");

}
