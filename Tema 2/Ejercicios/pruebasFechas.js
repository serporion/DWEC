let nuevaFecha = new Date();
document.write(nuevaFecha);
document.write('<br>');
document.write(nuevaFecha.getDate());
document.write('<br>');
document.write(nuevaFecha.toTimeString());
document.write('<br>');
document.write(nuevaFecha.getTime());
document.write('<br>');
document.write("El getTime es lo mismo que .now");

let nuevaFecha1Con = Date.now();
document.write('<br>');
document.write(nuevaFecha1Con);
document.write('<br>');
document.write(nuevaFecha1Con.getMonth);

let nuevaFechaConvertida = nuevaFecha1Con.getMonth;
document.write('<br>');
document.write(nuevaFechaConvertida);

fecha1 = new Date();
fecha2 = new Date();
fecha3 = new Date();

fecha2-fecha1;
resultado = new Date(fecha3-fecha1);
document.write('<br>');
document.write(resultado);