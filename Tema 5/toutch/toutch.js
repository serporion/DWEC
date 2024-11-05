
window.onload = () => {

    let pulsados = document.querySelector("section");

    let div3 = document.querySelectorId("3")

    let input = document.querySelectorId("puntos");

    //pulsados.addEventListener('click', (e) => console.log("se ha pulsado " + e.target.id ))

    let puntosRecorridos = [];


    pulsados.addEventListener("touchstart", handleStart, false);
    pulsados.addEventListener("touchmove", handleMove, false);
    pulsados.addEventListener("touchend", handleEnd, false);



    function handleStart(evt) {

        evt.preventDefault(); //Esto evita que el navegador aplique cosas que no queremos.

        var el = evt.target;

        el.style.backgroundColor = "yellow";

        /*
        var ctx = el.getContext("2d");
        var touches = evt.changedTouches;
      
        for (var i = 0; i < touches.length; i++) {
          ongoingTouches.push(touches[i]);
          var color = colorForTouch(touches[i]);
          ctx.fillStyle = color;
          ctx.fillRect(touches[i].pageX - 2, touches[i].pageY - 2, 4, 4);
        }
        */



    }


    function handleMove(evt) {
        evt.preventDefault();

        var touches = evt.changedTouches;

        for (var i = 0; i < touches.length; i++) {

            var touch = touches[i];
            
            ctx.beginPath();
            ctx.moveTo(touch.pageX, touch.pageY); // Posición inicial
            ctx.lineTo(touch.pageX, touch.pageY); // Posición final (si es solo un toque, el punto no se moverá)
            ctx.strokeStyle = "red"; // Línea roja
            ctx.lineWidth = 5; // Grosor de la línea
            ctx.stroke();
        }

        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
            
            coordinates.push({ x: x, y: y });
    
            input.value = puntosRecorridos.map(coord => `(${coord.x}, ${coord.y})`).join(" -> ");
        } 
    }

    function handleEnd(evt) {
        evt.preventDefault(); // Evitar el comportamiento por defecto al terminar el toque

        var el = evt.target; // El elemento que estaba siendo tocado
        el.style.backgroundColor = "blue"; // Cambiar a azul cuando el toque termine
    }
}