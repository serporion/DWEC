

window.onload = () => {

    let form = document.getElementById('formulario');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (validarFormulario(formularioCorrecto)) {
            console.log("Formulario enviado correctamente");
            //form.submit(); // esto envía el formulario. Aun no lo hemos dado en javascript
        } else {
            console.log("Formulario no enviado");
        }
    });

        
    //Habría que incluir en la función validarFormulario un switch pasando por parámetro el campo. Lo dejo tal cual
    //está en la función que creé.
    

    /*
    let inputs = document.querySelectorAll("input");

    inputs.forEach(element => 
        doc.getElementById(element.id).addEventListener("blur", (e) => validarNombre(e.target)));
  
    */


    let formularioCorrecto = true;

    document.getElementById("nombre").addEventListener("blur", (e) => formularioCorrecto && validarNombre(e.target));
    document.getElementById("apellidos").addEventListener("blur", (e) => formularioCorrecto && validarApellidos(e.target));
    document.getElementById("telefono").addEventListener("blur", (e) => formularioCorrecto && validarTelefono(e.target));
    document.getElementById("email").addEventListener("blur", (e) => formularioCorrecto && validarEmail(e.target));
    document.getElementById("password").addEventListener("blur", (e) => formularioCorrecto && validarPassword(e.target));
    document.getElementById("repitePassword").addEventListener("blur", (e) => formularioCorrecto && validaIdentico(e.target));

    

}



function validarFormulario(formularioCorrecto) {

    let hayCamposVacios = false;   
    
    let inputs = document.querySelectorAll("input");

    inputs.forEach(element => { if (vacio(element)) { hayCamposVacios = true; } });

    if (!hayCamposVacios) {
        console.log("No hay campos vacíos");

        if (formularioCorrecto) {
            console.log("Formulario correcto");
            alert('Formulario enviado correctamente.');
            this.submit();            
            
        }
        return false;

    }else {
        console.log("Segue habiendo campos vacíos");
    
    }

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

    e.style.backgroundColor = "white";

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

