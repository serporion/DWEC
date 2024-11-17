window.onload = ()=>{   

let usuario = document.getElementById('user');
let botonEnviar = document.getElementById('enviar');

const mostrarComprobacionMinuscula = document.getElementById('minuscula');
const mostrarComprobacionMayuscula = document.getElementById('mayuscula');
const mostrarComrpobacionLongitud = document.getElementById('longitud');

usuario.addEventListener('keyup', () => {

    let dato = usuario.value;
    
    let minus = /[a-z]/.test(dato);
    let mayus = /[A-Z]/.test(dato);
    let longitud = dato.length >= 6;
    
    mostrarComprobacionMinuscula.classList.toggle('valido', minus);
    mostrarComprobacionMinuscula.classList.toggle('invalido', !minus);

    mostrarComprobacionMayuscula.classList.toggle('valido', mayus);
    mostrarComprobacionMayuscula.classList.toggle('invalido', !mayus);

    mostrarComrpobacionLongitud.classList.toggle('valido', longitud);
    mostrarComrpobacionLongitud.classList.toggle('invalido', !longitud);

    botonEnviar.disabled = !(minus && mayus && longitud);
});


}