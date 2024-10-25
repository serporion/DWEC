//CALL BACK
/*navigator.geolocation.getCurrentPosition(muestraPosicion);

function muestraPosicion(posicion) {
    console.log(posicion.coords.latitude);
    console.log(posicion.coords.longitude);
}
*/

let map;
let marker;  
let circle; 
let arrayPosiciones = [];


let arrayPosicionesPintar = [];
let polyline;

let ultimaPosicionLatitud;
let ultimaPosicionLongitud;

let totalDistancia = 0;


if (navigator.geolocation) {
    document.write("La geolocalización está disponible<br>");

    navigator.geolocation.watchPosition(muestraPosicion, manejarError);


    function muestraPosicion(posicion) {
        console.log("Latitud: " + posicion.coords.latitude);
        let latitud = posicion.coords.latitude;
        console.log("Longitud: " + posicion.coords.longitude);
        let longitud = posicion.coords.longitude;

        pintaCoodenadas(latitud, longitud);
        pasaCoordenadas(latitud, longitud);

        let altitude = posicion.coords.altitude;
        let horaPosicion = new Date(posicion.timestamp);

        

        if (altitude !== null) {
            console.log("Altitud: " + altitude + " metros");
        } else {
            console.log("No se ha proporcionado la altitud en este navegador/dispositivo.");
        }

        if (horaPosicion !== null) {
            console.log("Hora Posicion: " + horaPosicion.toLocaleTimeString());
        } else {
            console.log("No se ha proporcionado la hora de la respuesta a las coordenadas en este navegador/dispositivo.");
        }


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

                                                                    function onMapClick(e) {
                                                                        alert("You clicked the map at " + e.latlng);
                                                                    }



function pintaCoodenadas(latitud, longitud) {

    if (!map) {
        // Crear el mapa solo si no está creado
        map = L.map('map').setView([latitud, longitud], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

                                                                    map.on('click', onMapClick);


                                                                    

    }

    if (!marker) {
        // Crear el marcador solo si no está creado
        marker = L.marker([latitud, longitud]).addTo(map);
    } else {
        // Actualizar la posición del marcador
        marker.setLatLng([latitud, longitud]);
    }

    if (!circle) {
        // Crear el círculo solo si no está creado
        circle = L.circle([latitud, longitud], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 100
        }).addTo(map);
    } else {
        // Actualizar la posición del círculo
        circle.setLatLng([latitud, longitud]);
    }

    var popup = L.popup()
    .setLatLng([latitud, longitud])
    .setContent("I am a standalone popup.")
    .openOn(map);
    // Centrar el mapa en la nueva posición
    map.setView([latitud, longitud], 13);
}

function pasaCoordenadas(latitud, longitud) {

    if(!ultimaPosicionLatitud || !ultimaPosicionLongitud){

        ultimaPosicionLatitud = latitud;
        ultimaPosicionLongitud = longitud;

    }else{

        totalDistancia += getDistanceBetweenPoints(ultimaPosicionLatitud, ultimaPosicionLongitud, latitud, longitud, 'kilometers');

        ultimaPosicionLatitud = latitud;
        ultimaPosicionLongitud = longitud;

        console.log("Total distancia: " + totalDistancia + " km");
    }


    if (arrayPosiciones.length == 0 )
        {
        console.log("No hay posiciones");

        arrayPosiciones.push({
            latitude: latitud,
            longitude: longitud
        });


        /* Para pintar de estar manera, hay que usar map y sacar del objeto 
        y de sus propiedades o atributos los valores para que setView funcione.

        
        

        let latlongsDeArrayObjetos = arrayPosiciones.map(pos => [pos.latitude, pos.longitude]);

        polyline.setLatLngs(latlongsDeArrayObjetos);

        */
       

        console.log("Insertadas las primeras posiciones");
    }else{
        arrayPosiciones.push({
            latitude: latitud,
            longitude: longitud
        });


        //Otra forma de insertar en un array para que sea leía directamente.

        polyline = L.polyline([], {color: 'blue'}).addTo(map);

        arrayPosicionesPintar.push([latitud, longitud]);

        polyline.setLatLngs(arrayPosicionesPintar);

        map.setView([latitud, longitud], 13);





    }

}



function getDistanceBetweenPoints(ultimaPosicionLatitud, ultimaPosicionLongitud, latitude2, longitude2, unit = 'kilometers') {

    //document.write(latitud1, longitud1, latitud, longitud);
 
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = (latitude2 - ultimaPosicionLatitud) * (Math.PI / 180);
    const dLon = (longitude2 - ultimaPosicionLongitud) * (Math.PI / 180);
    
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(ultimaPosicionLatitud * (Math.PI / 180)) * Math.cos(latitude2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    const distance = R * c; // Distancia en kilómetros
 
    if (unit === 'miles') {
        return parseFloat((distance * 0.621371).toFixed(2)); // Convierte a millas
    } else if (unit === 'kilometers') {
        return parseFloat(distance.toFixed(2)); // Distancia en km
    }
 
   
    
 }
 




function leerArrayPosiciones(arrayPosiciones){

    for (let i of arrayPosiciones){
        console.log("Latitud: " + i.latitude + ", Longitud: " + i.longitude + "<br>");
    }

    console.log("Las posiciones son: " + arrayPosiciones.length + "<br>");

}

//setInterval(leerArrayPosiciones(arrayPosiciones), 10000); //NO VALE. SE LLAMA INMEDIATAMENTE.
setInterval(() => leerArrayPosiciones(arrayPosiciones), 10000);


