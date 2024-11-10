
window.onload = () => {
    document.getElementById('cerrar').addEventListener('click', (e) => {
        e.preventDefault();
        cerrar();
    });

    document.getElementById('guardarPreferencias').addEventListener('click', () => {
        guardarPreferencias();
    });

    
    saludar();
    aplicarPreferencias();
}



function saludar() {

    let nombre = comprueboCookieUsuario("nombre");

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
            document.getElementById('saludo').innerText = "Por favor ingrese un nombre cuando recargue la página.";
        }
    }
}

function comprueboCookieUsuario(nombreABuscar) {
    
    let nombreCookies = document.cookie
        .split("; ")
        .find((row) => row.startsWith(""+nombreABuscar+"="))
        ?.split("=")[1];


    if (nombreCookies) {
        console.log("La cookie de usuario con valor " + nombreCookies + " existe");

        //return true;
        return nombreCookies;

    } else {
        console.log("No existe");

        return false;
    }
}



function crearCookieUsuario(nombre, valor, tiempo) {
    let expiraEn = new Date();

    expiraEn.setTime(expiraEn.getTime() + (tiempo * 60 * 1000));

    document.cookie = `${nombre}=${encodeURIComponent(valor)};expires=${expiraEn.toUTCString()}`;
}



function guardarPreferencias() {

    let colorFondo = document.getElementById("colorFondo").value;
    let colorParrafo = document.getElementById("colorParrafo").value;
    let tamanoLetra = document.getElementById("tamanoLetra").value;


    //Decofico el valor que me devuelve el campo. 
    //No vale hacer aquí, no guarda el símbolo # en la propia coockie.
    //colorFondo = decodeURIComponent(colorFondo); 
    //colorParrafo = decodeURIComponent(colorParrafo);

    crearCookieUsuario("colorFondo", colorFondo, 5);
    crearCookieUsuario("colorParrafo", colorParrafo, 5);
    crearCookieUsuario("tamanoLetra", tamanoLetra, 5);

    aplicarPreferencias();
}


function aplicarPreferencias() {

    let colorFondo = mostrarCookieUsuario("colorFondo");
    let colorParrafo = mostrarCookieUsuario("colorParrafo");
    let tamanoLetra = mostrarCookieUsuario("tamanoLetra");

    //Hay que decofificar aquí directamente, ya quese guarda como coockie con codifiicación %23y el color en hexadecimal. La coockie qukere guardar el símbolo #.
    ///if (colorFondo) document.body.style.backgroundColor = colorFondo;
    if (colorFondo) document.body.style.backgroundColor = decodeURIComponent(colorFondo);
    if (colorParrafo) document.getElementById("saludo").style.color = decodeURIComponent(colorParrafo);
    if (tamanoLetra) document.getElementById("saludo").style.fontSize = tamanoLetra + "px";


}


function cerrar() {

    borrarCookie("nombre");
    borrarCookie("colorFondo");
    borrarCookie("colorParrafo");
    borrarCookie("tamanoLetra");
    
}


function mostrarCookieUsuario(nombreABuscar) {
    //let formatoCookie = decodeURIComponent(document.cookie);
    //let nombreCookies = formatoCookie.split('; ');

    let nombreCookies = document.cookie
        .split("; ")
        .find((row) => row.startsWith(""+nombreABuscar+"="))
        ?.split("=")[1];


    if (nombreCookies) {
        console.log("La cookie +" +nombreABuscar+" de usuario con valor " + nombreCookies + " existe");

        //return true;
        return nombreCookies;

    } else {

        console.log("La cookie " +nombreABuscar+" no existe. Creala primero");
        //console.log("No existe");

        return false;
    }
}



function borrarCookie(identificador) {
    document.cookie = " "+identificador +"=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
}
