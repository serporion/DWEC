
window.onload = () => {

const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let paso = {
        value: false,
        valor: 0
    };
    
    if (document.getElementById("nombre").value != "") {
        let cadena = document.getElementById("nombre");
    
        // console.log(validarNombre(cadena.value));
        paso.value = validarNombre(cadena.value);

        if (paso.value == false) {
            paso.valor++;
        }
    }
    
    if (document.getElementById("apellidos").value != "") {
        let cadena = document.getElementById("apellidos");
    
        // console.log(validarApellidos(cadena.value));
        paso.value = validarApellidos(cadena.value);

        if (paso.value == false) {
            paso.valor++;
        }
    }
    
    if (document.getElementById("dni").value != "") {
        let cadena = document.getElementById("dni");
    
        // console.log(validarDNI(cadena.value));
        paso.value = validarDNI(cadena.value);

        if (paso.value == false) {
            paso.valor++;
        }
    }
    
    if (document.getElementById("telefono").value != "") {
        let cadena = document.getElementById("telefono");
    
        // console.log(validarTelefono(cadena.value));
        paso.value = validarTelefono(cadena.value);

        if (paso.value == false) {
            paso.valor++;
        }
    }
    
    if (document.getElementById("email").value != "") {
        let cadena = document.getElementById("email");
    
        // console.log(validarEmail(cadena.value));
        paso.value = validarEmail(cadena.value); 
    
        if (paso.value == false) {
            paso.valor++;
        }
    }
            
    if (document.getElementById("usuario").value !=""){

        let cadena = document.getElementById("usuario");

        //console.log(validarNombreUsuario(cadena.value));        
        paso.value = validarNombreUsuario(cadena.value);

        if (paso.value == false) {
            paso.valor++;
        }

    }   

 
    if (paso.valor == 0) {

        document.getElementById('nombre').value ="";
        document.getElementById('apellidos').value ="";
        document.getElementById('dni').value ="";
        document.getElementById('email').value ="";
        document.getElementById('telefono').value ="";
        document.getElementById('usuario').value ="";

        document.getElementById('registro').innerHTML ="Formulario enviado con exito.";
    }

 
});

}

    
function validarNombre(nombre) {
    
    const errorNombre = document.getElementById('errorNombre');

    errorNombre.innerHTML = ''; 

    if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/.test(nombre)) {
        errorNombre.innerHTML = 'El nombre solo puede contener letras.';
        return false;
    }
    return true;
}


function validarApellidos(apellidos) {
    
    const errorApellidos = document.getElementById('errorApellidos');

    errorApellidos.innerHTML = ''; 

    if (!/^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/.test(apellidos)) {
        errorApellidos.innerHTML = 'Los apellidos solo pueden contener letras.';
        return false;
    }
    return true;
}


function validarDNI(dni) {
    
    const errorDNI = document.getElementById('errorDNI');

    errorDNI.innerHTML = ''; 

    if (!/^\d{8}[A-Za-z]$/.test(dni)) {
        errorDNI.innerHTML = 'DNI inválido. Formato: 12345678A';
        return false;
    }
    return true;
}


function validarTelefono(telefono) {
    
    const errorTelefono = document.getElementById('errorTelefono');
    errorTelefono.innerHTML = ''; 

    if (!/^\d{9}$/.test(telefono)) {
        errorTelefono.innerHTML = 'Teléfono inválido. Formato: 123456789';
        return false;
    }
    return true;
}


function validarEmail(email) {
    
    const errorEmail = document.getElementById('errorEmail');

    errorEmail.innerHTML = ''; 

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorEmail.innerHTML = 'Email inválido.';
        return false;
    }
    return true;
}


function validarNombreUsuario(usuario) {
    
    const errorUsuario = document.getElementById('errorUsuario');

    errorUsuario.innerHTML = ''; 

    if (!/^(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(usuario)) {
        errorUsuario.innerHTML = 'El nombre de usuario debe tener al menos 8 caracteres, con al menos un número y un signo de puntuación.';
        return false;
    }
    return true;
}

