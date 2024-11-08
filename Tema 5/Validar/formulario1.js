window.onload = ()=>{ 
    
/*
    - validarMayuscula: El parámetro debe contener al menos un carácter en mayúscula
     - validarCaracteresEspeciales: El parámetro debe contener al menos uno de los siguientes caracteres: !@#$%^&
     - validarCorreo: El parámetro debe tener el formato correcto de un email
     - validarTarjetaCredito: El parámetro debe tener el formato correcto de una tarjeta de crédito
     - validarLongitud: El parámetro debe tener al menos 8 caracteres.
     - validarNumero: El parámetro debe contener al menos un dígito.

*/

        const formulario = document.getElementById("formulario");

        formulario.addEventListener('submit', (e) => {
            e.preventDefault();


        if (document.getElementById("mayuscula").value !="") {

            let cadena = document.getElementById("mayuscula");

            console.log(validarMayusculas(cadena.value));

        }
        
        if (document.getElementById("especial").value !=""){

            let cadena = document.getElementById("especial");

            console.log(validarCaracteresEspeciales(cadena.value));

        }
        
        if (document.getElementById("email").value !=""){

            let cadena = document.getElementById("email");

            console.log(validarEmail(cadena.value));

        }
        
        if (document.getElementById("tarjeta").value !=""){

            let cadena = document.getElementById("tarjeta");

            console.log(validarTarjetaCredito(cadena.value));


        }
        
        if (document.getElementById("longitud").value !=""){

            let cadena = document.getElementById("longitud");

            console.log(validarLongitud(cadena.value));
        
        }
        
        if (document.getElementById("numero").value !=""){

            let cadena = document.getElementById("numero");

            console.log(validarLongitud(cadena.value));        

        }   

    }

)}




function validarMayusculas(cadena) {

    var mayusculaValidas = /[A-Z]/;

    if (mayusculaValidas.test(cadena)) return true;

    return false;

}

function validarCaracteresEspeciales(cadena) {

    var caracteresEspecialesValidos = /[!@#$%^&]+/;

    if (caracteresEspecialesValidos.test(cadena)) return true;

    return false;

}

function validarEmail(cadena) {

    var emailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // El \. está mejor escrito que solo el . punto

    if (emailValido.test(cadena)) return true;

    return false;

}

function validarTarjetaCredito(cadena) {

    var tarjetaCrecitoValida = /[0-9]{16}/; ///^\d{16}$/

    if (tarjetaCrecitoValida.test(cadena)) return true;

    return false;

}


function validarLongitud(cadena) {

    var longitudValida = /^.{12}$/; // el punto es todo caracter excepto salto de línea.

    if (longitudValida.test(cadena)) return true;

    return false;

}

function validarNumero(cadena) {

    var numeroValido = /^.{1}$/; // valida un solo caracter, cualquier cosa que sea caracter, digito, caracter especial

    if (numeroValido.test(cadena)) return true;

    return false;

}