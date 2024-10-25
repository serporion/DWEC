
/*

//1

if (navigator.geolocation) {
   document.write("La geolocalización está disponible<br>");

   navigator.geolocation.getCurrentPosition(
      muestraPosicion,
      manejarError // Función para manejar errores
   );

   function muestraPosicion(posicion) {
      console.log("Latitud: " + posicion.coords.latitude);
      console.log("Longitud: " + posicion.coords.longitude);
   }

   function manejarError(error) {
      // Aquí se verifica el código de error
      if (error.code === error.PERMISSION_DENIED) {
         document.write("El usuario no ha permitido la geolocalización<br>");
      } else {
         document.write("Error al obtener la geolocalización: " + error.message + "<br>");
      }
   }
} else {
   document.write("La geolocalización NO está disponible<br>");
}

*/


//4. Improve your code so you show the position continuously (although the user could be moving, so it could change)
   
//let latitud = 37.192329;
//let longitud = -3.6175196;
var latitud = 0;
var longitud = 0;
let latitud1 = 37.192329;
let longitud1 = -3.6175196;

let arrayPosiciones = [];

navigator.geolocation.watchPosition(muestraPosicion);
//navigator.geolocation.getCurrentPosition(muestraPosicion);

function muestraPosicion(posicion) {
   console.log("De muestraPosicion" + posicion.coords.latitude);
   console.log("De muestraPosicion" + posicion.coords.longitude);

   arrayPosiciones.push({
      latitude: posicion.coords.latitude,
      longitude: posicion.coords.longitude
  });

   latitud = posicion.coords.latitude;
   longitud = posicion.coords.longitude;
  
}

//setInterval(miFuncion1, 1000);

function miFuncion1() {
   for (posicion of arrayPosiciones) {
      //console.log(posicion.latitude, posicion.longitude);
      document.write(posicion.latitude, posicion.longitude);
      latitud = posicion.latitude;
      longitud = posicion.longitude;
   }

   document.write("Las posicioens son: " + arrayPosiciones.length);
   
}





/*
function getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2, unit = 'kilometers') {
   let theta = longitude1 - longitude2;
   let distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
       Math.sin(latitude1 * (Math.PI/180)) * Math.sin(latitude2 * (Math.PI/180)) + 
       Math.cos(latitude1 * (Math.PI/180)) * Math.cos(latitude2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
   );
   if (unit == 'miles') {
       return Math.round(distance, 2);
   } else if (unit == 'kilometers') {
       return Math.round(distance * 0.1609344, 2);
   }
}

*/

function getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2, unit = 'kilometers') {

   document.write(latitud1, longitud1, latitud, longitud);

   const R = 6371; // Radio de la Tierra en kilómetros
   const dLat = (latitude2 - latitude1) * (Math.PI / 180);
   const dLon = (longitude2 - longitude1) * (Math.PI / 180);
   
   const a = 
       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
       Math.cos(latitude1 * (Math.PI / 180)) * Math.cos(latitude2 * (Math.PI / 180)) *
       Math.sin(dLon / 2) * Math.sin(dLon / 2);
   
   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   
   const distance = R * c; // Distancia en kilómetros

   if (unit === 'miles') {
       return parseFloat((distance * 0.621371).toFixed(2)); // Convierte a millas
   } else if (unit === 'kilometers') {
       return parseFloat(distance.toFixed(2)); // Distancia en km
   }

  
   
}
document.write("<br>La distancia entre las coordenadas es: " + getDistanceBetweenPoints(latitud1, longitud1, latitud, longitud, 'kilometers'));







/*
let cambioPosicion = (posicion) => {
   arrayPosiciones.push(posicion);
}

cambioPosicion(navigator.geolocation.watchPosition(muestraPosicion));
*/





//5. Find the way to meassure the distance traveled.

//5. Improve your code so you can show the position only when the user



var latitu = 0;
var longitu = 0;

navigator.geolocation.getCurrentPosition(muestraPosicion);


function muestraPosicion(posicion) {
   latitu = posicion.coords.latitude;
   longitu = posicion.coords.longitude;
   console.log(latitu);
   console.log(longitu);

   var map = L.map('mapon').setView([latitu, longitu], 13);


   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(map);

   var marker = L.marker([latitu, longitu]).addTo(map);
}



//EJERCICIO 2.
/*
Let's try to use the geolocation information with the API of Here Maps.
   1. Use a map to show your location
   2. Draw a marker in your location
   3. Design a way to calculate and draw the route from my current location to a given place.
   4. Find a way to know the address of your location (reverse geocoding).


      //1.

*/










