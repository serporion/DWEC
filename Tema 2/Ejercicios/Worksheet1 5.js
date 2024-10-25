function mostrarReloj() {
    
    let ahora = new Date();

    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    let tiempo = horas + ":" + minutos + ":" + segundos;

    document.open(); // Abrir el documento para escritura
    document.write(tiempo); // Escribir el tiempo
    document.close(); // Cerrar el documento

    setTimeout(mostrarReloj, 1000);
}

mostrarReloj();
