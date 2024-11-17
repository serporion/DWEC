
window.onload = () => {

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', deviceOrientationHandler, false);
        document.getElementById('soportado').value = 'Supported!';
        
    } else {
        document.getElementById('soportado').value = 'Not supported!';
    }



    function deviceOrientationHandler(eventData) {

        

        let alpha = eventData.alpha;
        let beta = eventData.beta;
        let gamma = eventData.gamma;

        document.getElementById('rotacion').innerHTML = `Alpha: ${alpha}, Beta: ${beta}, Gamma: ${gamma}`;
        
    }

}
