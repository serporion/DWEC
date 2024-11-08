

window.onload = () => {

    let form = document.getElementById('formulario');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validarFormulario()) {
            console.log("Formulario enviado correctamente");
            form.submit(); // esto envía el formulario. Aun no lo hemos dado en javascript
        } else {
            console.log("Formulario no enviado");
        }
    });

        
    //Habría que incluir en la función validarFormulario un switch pasando por parámetro el campo. Lo dejo tal cual
    //está en la función que creé.
    //Al final tengo que hacer el switch si quiero hacer la validación también antes del envio del formulario. Más completo.


    /*
    let inputs = document.querySelectorAll("input");

    inputs.forEach(element => 
        doc.getElementById(element.id).addEventListener("blur", (e) => validarNombre(e.target)));
  
    */


    document.getElementById("nombre").addEventListener("blur", (e) => validarNombre(e.target));
    document.getElementById("apellidos").addEventListener("blur", (e) => validarApellidos(e.target));
    document.getElementById("telefono").addEventListener("blur", (e) => validarTelefono(e.target));
    document.getElementById("email").addEventListener("blur", (e) => validarEmail(e.target));
    document.getElementById("password").addEventListener("blur", (e) => validarPassword(e.target));
    document.getElementById("repitePassword").addEventListener("blur", (e) => validaIdentico(e.target));

}



function validarFormulario() {

    let hayCamposVacios = false;

    let inputs = document.querySelectorAll("input");

    //inputs.forEach(element => { if (vacio(element)) { hayCamposVacios = true; } });

    //let esFormularioValido = true;

    //if (!hayCamposVacios) {
      //  console.log("No hay campos vacíos");

      //  return false;

    //}else {

        inputs.forEach(element => {
            
            if (!vacio(element)) {

                let esValido = true;
    
                switch (element.id) {
                    case "nombre":
                        esValido = validarNombre(element);
                        break;
                    case "apellidos":
                        esValido = validarApellidos(element);
                        break;
                    case "telefono":
                        esValido = validarTelefono(element);
                        break;
                    case "email":
                        esValido = validarEmail(element);
                        break;
                    case "password":
                        esValido = validarPassword(element);
                        break;
                    case "repitePassword":
                        esValido = validaIdentico(element);
                        break;
                }
    
                if (!esValido) {
                    esFormularioValido = false;
                }

            } else {
                esFormularioValido = false;
            }
        });
    
        return esFormularioValido;

    //}

}


function vacio(element) {

    if (element.value == "") {

        element.placeholder = "Debe rellenar el campo";
        element.style.backgroundColor = "rgb(242, 176, 142)";
        element.style.border = '1px solid red';

        return true;

    }

    return false;
};


function validarNombre(e) {

    e.style.backgroundColor = "white";

    if (e.value != '' && !/^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/.test(e.value)) {
        e.value = '';
        e.placeholder = 'Solo permitido letras';
        e.style.border = '1px solid red';
        e.classList.add('error');

        return false;

    } else if (e.value != '') {
        e.style.border = '1px solid green';
    }

    return true;
}


function validarApellidos(e) {

    e.style.backgroundColor = "white";

    if (e.value != '' && !/^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/.test(e.value)) {
        e.value = '';
        e.placeholder = 'Solo permitido letras';
        e.style.border = '1px solid red';
        e.classList.add('error');

        return false;

    } else if (e.value != '') {
        e.style.border = '1px solid green';
    }

    return true;
}

function validarTelefono(e) {

    e.style.backgroundColor = "white";

    if (e.value != '' && !/^\d{9}$/.test(e.value)) {
        e.value = '';
        e.placeholder = 'Formato correcto:   123456789';
        e.style.border = '1px solid red'
        e.classList.add('error');

        return false;

    } else if (e.value != '') {
        e.style.border = '1px solid green';
    }
    return true;
}

function validarEmail(e) {

    e.style.backgroundColor = "white";

    if (e.value != '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value)) {
        e.value = '';
        e.placeholder = 'Email invalido';
        e.style.border = '1px solid red'
        e.classList.add('error');

        return false;

    } else if (e.value != '') {
        e.style.border = '1px solid green';
    }

    return true;
}


function validarPassword(e) {

    e.style.backgroundColor = "white";

    if (e.value != '' && !/^(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(e.value)) {
        e.value = '';
        e.placeholder = 'No cumple con los requisitos';
        e.style.border = '1px solid red'
        e.classList.add('error');

        return false;

    } else if (e.value != '') {
        e.style.border = '1px solid green';
    }

    return true;

}


function validaIdentico(e) {

    if (document.getElementById('password').value != e.value) {
        e.value = '';
        e.placeholder = 'No coincidente';
        e.style.border = '1px solid red'
        e.classList.add('error');

        return false;

    } else if (e.value != '') {
        e.style.border = '1px solid green';
    }

    return true;
}

