let fechaHoy = new Date();
document.write("<br>");
//document.write(fechaHoy.getTime());
document.write("<br>");
document.write(fechaHoy);

let fecha85 = new Date(fechaHoy.getTime() + (85 * 24 * 60 * 60 * 1000));

let fecha85a = new Date();

fecha85a.setDate(fechaHoy.getDate() + 85);

document.write("<br>");
document.write(fecha85);
document.write("<br>");
document.write(fecha85a);


let fecha187 = new Date();

fecha187.setDate(fechaHoy.getDate() - 187);
document.write("<br>");
document.write(fecha187);

let fecha85b = new Date();

fecha85b = fecha85;

fecha85b.setFullYear(fecha85.getFullYear() + 2);
document.write("<br>");
document.write(fecha85b);
document.write("<br>");

fecha187.setHours(fecha187.getHours() - 2);
document.write(fecha187);

let fechaResto = new Date();

fechaResto.setTime(fecha85.getTime() - fecha187.getTime());
document.write("<br>");
document.write(fechaResto);
document.write("<br> La resta da 2 años, con lo que marca 1972");