   

    document.addEventListener("DOMContentLoaded", (e) => {

        //const form = document.getElementById("formulario");

        
       
        
        document.getElementById("nombre").addEventListener("blur", (e) => validarCampo(e.target, "errorNombre"));

        document.getElementById("apellidos").addEventListener("blur", (e) =>  validarCampo(e.target, "errorApellidos"));

        document.getElementById("dni").addEventListener("blur", (e) => validarCampo(e.target, "errorDNI"));
        
        document.getElementById("telefono").addEventListener("blur", (e) => validarCampo(e.target, "errorTelefono"));
            
        document.getElementById("email").addEventListener("blur", (e) => validarCampo(e.target, "errorEmail"));            

        document.getElementById("usuario").addEventListener("blur", (e) => validarCampo(e.target, "errorUsuario"));



        
        
    });

//LO SAQUE AFUERA. LUEGO NO LO PROBÉ. TAMBIEN COMENTÉ EL const form. NO LO PROBÉ
    function validarCampo(campo, errorId) {
        const errorSpan = document.getElementById(errorId);
        if (!campo.checkValidity()) {
            errorSpan.innerHTML = campo.validationMessage; // Muestra el mensaje de validación
        } else {
            errorSpan.innerHTML = ""; 
        }
    }