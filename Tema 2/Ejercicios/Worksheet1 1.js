let fecha = new Date();
let fechanow = Date.now();

document.write('= Date.now()');
document.write('<br>');
document.write(fechanow);
document.write('<br>');
document.write('<br>');
document.write('<br>= new Date()');
document.write('<br>');
document.write(fecha);
document.write('<br>');
document.write('<br>');
document.write("Año " + fecha.getFullYear());
document.write('<br>');
document.write("Mes " + (fecha.getMonth()+1));
document.write('<br>');
document.write("Dia " + (fecha.getDate()+1));
document.write('<br>');
document.write("Hora " + fecha.getHours());
document.write('<br>');
document.write("Minuto " + fecha.getMinutes());
document.write('<br>');
document.write("Segundo " + fecha.getSeconds());


