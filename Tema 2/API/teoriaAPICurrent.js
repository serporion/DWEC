//CALL BACK
/*navigator.geolocation.getCurrentPosition(muestraPosicion);

function muestraPosicion(posicion) {
    console.log(posicion.coords.latitude);
    console.log(posicion.coords.longitude);
}
*/



if (navigator.geolocation) {
    document.write("La geolocalización está disponible<br>");

    navigator.geolocation.getCurrentPosition(muestraPosicion, manejarError);


    function muestraPosicion(posicion) {
        console.log("Latitud: " + posicion.coords.latitude);
        let latitud = posicion.coords.latitude;
        console.log("Longitud: " + posicion.coords.longitude);
        let longitud = posicion.coords.longitude;

        pasarcoordenadas(latitud, longitud);
    }

    function manejarError(error) {

        if (error.code === error.PERMISSION_DENIED) {
            document.write("El usuario no ha permitido la geolocalización<br>");
        } else {
            document.write("Error al obtener la geolocalización: " + error.message + "<br>");
        }
    }
} else {
    document.write("La geolocalización NO está disponible<br>");
}


function pasarcoordenadas(latitud, longitud) {

    var map = L.map('map').setView([latitud, longitud], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([latitud, longitud]).addTo(map);
    var circle = L.circle([latitud, longitud], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(map);



}

//document.write("Latitud: " + latitud + "<br>");
//document.write("Longitud: " + longitud + "<br>");