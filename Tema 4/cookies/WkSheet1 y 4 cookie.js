window.onload = () => {

    document.getElementById('cerrar').addEventListener('click', (e) => {
        e.preventDefault();
        cerrar();
    });

    mostrarCookieUsuario("ñoño")
    //crearCookieUsuario('nombre', 'jacinto', 5);
    crearCookieUsuario('ñoño', 'ñoño');
    //borrarCookie('nombre');
    saludar()

}

function mostrarCookieUsuario(nombreABuscar) {
    let nombreCookies = decodeURIComponent(document.cookie);
    //let nombreCookies = formatoCookie.split('; ');

    nombreCookies = document.cookie
        .split("; ")
        .find((row) => row.startsWith(""+decodeURIComponent(nombreABuscar)+"="))
        ?.split("=")[1];


    if (nombreCookies) {
        console.log("La cookie de usuario con valor " + nombreCookies + " existe");

        //return true;
        return nombreCookies;

    } else {
        console.log("La cookie " +nombreABuscar+" no existe. Creala primero");
        //console.log("No existe");

        return false;
    }
}


function crearCookieUsuario(nombre, valor, tiempo) {
    let expiraEn = new Date();

    expiraEn.setTime(expiraEn.getTime() + (tiempo * 60 * 1000));

    document.cookie = `${nombre}=${encodeURIComponent(valor)};expires=${expiraEn.toUTCString()}`;
}



function borrarCookie(nombre) {

    document.cookie = " "+nombre +"=;expires=Thu, 01 Jan 1970 00:00:00 UTC";

}


function saludar() {

    let nombre = mostrarCookieUsuario("nombre");

    if (nombre) {

        document.getElementById('saludo').innerText = "Hola, " + nombre;
        document.getElementById('cerrar').style.display = 'inline';

    } else {

        nombre = prompt("Por favor, ingresa tu nombre:");

        if (nombre) {

            crearCookieUsuario('nombre', nombre, 5);
            document.getElementById('saludo').innerText =  "Hola, " + nombre;
            document.getElementById('cerrar').style.display = 'inline';

        } else {
            document.getElementById('saludo').innerText = "Por favor ingrese un nombre";
        }
    }
}


function cerrar() {
    borrarCookie('nombre');
    //location.reload();  //Si la recargo vuelve a comprobar que no existe el nombre al borrar la cookie
}





