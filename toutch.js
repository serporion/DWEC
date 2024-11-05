
window.onload = () => {

    let pulsados = document.querySelector("section");

    let div3 = document.getElementById("3")

    let input = document.getElementById("puntos");

    //pulsados.addEventListener('click', (e) => console.log("se ha pulsado " + e.target.id ))

    let puntosRecorridos = [];


    pulsados.addEventListener("touchstart", handleStart, false);
    pulsados.addEventListener("touchmove", handleMove, false);
    pulsados.addEventListener("touchend", handleEnd, false);



    function handleStart(evt) {

        evt.preventDefault(); //Esto evita que el navegador aplique cosas que no queremos.

        let el = evt.target;

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

        }

        var x = touch.pageX;
        var y = touch.pageY;

        let rect = div3.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {

            puntosRecorridos.push({ x: x, y: y });

            input.value = puntosRecorridos.map(coord => `(${coord.x}, ${coord.y})`).join(" -> ");
        }
    }

    function handleEnd(evt) {
        evt.preventDefault();

        /*
        var el = evt.target; 
        el.style.backgroundColor = "blue"; 
        */


        //if (logEvents) log(ev.type, ev, false);
        if (evt.targetTouches.length == 0) {

            evt.target.style.background = "blue";
            evt.target.style.outline = "1px solid black";
        }

    }
}
