
window.onload = () => {

    let pulsados = document.querySelector("section");

    let div3 = document.getElementById("recorre")

    let labelCoordenadas = document.getElementById("puntos");

    //pulsados.addEventListener('click', (e) => console.log("se ha pulsado " + e.target.id ))

    let puntosRecorridos = [];


    pulsados.addEventListener("touchstart", handleStart, false);
    pulsados.addEventListener("touchmove", handleMove, false);
    pulsados.addEventListener("touchend", handleEnd, false);


    pulsados.addEventListener("touchstart", (e) => {

        switch (e.touches.length) {
            case 1:
                handle_one_touch(e);
                break;
            case 2:
                handle_two_touches(e);
                break;
            case 3:
                handle_three_touches(e);
                break;
            default:
                console.log("Not supported");
                break;
        }
    },

        false,
    );



    function handle_one_touch(e) {
        //console.log("Un solo toque detectado.");
        document.body.style.backgroundColor = "lightblue"; 
        document.getElementById("info").innerHTML = "Tocaste con un solo dedo!";

    }

    
    function handle_two_touches(e) {
        //console.log("Dos toques detectados.");
        document.body.style.backgroundColor = "lightgreen"; 
        document.getElementById("info").innerHTML = "Tocaste con dos solo dedo!";

    }

    
    function handle_three_touches(e) {
        //console.log("Tres toques detectados.");
        document.body.style.backgroundColor = "lightcoral"; 
        document.getElementById("info").textContent = "Tocaste con tres dedos!";

    }




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

        let touches = evt.changedTouches;

        //if (evt.targetTouches.length > 0) {

            //let touch = touches[0];

            for (let i = 0; i < touches.length; i++) {

                let touch = touches[i];

                let x = touch.pageX;
                let y = touch.pageY;

                let rect = div3.getBoundingClientRect();
                
                if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {

                    labelCoordenadas.innerHTML = ''; 

                    puntosRecorridos.push({ x: x, y: y });

                    //labelCoordenadas.innerHTML = puntosRecorridos.map(coord => `(${coord.x}, ${coord.y})`);
                    labelCoordenadas.innerHTML = `(${x}, ${y})`;
                }

            }
        //}
    }


    function handleEnd(evt) {
        evt.preventDefault();

        //if (logEvents) log(ev.type, ev, false);
        if (evt.targetTouches.length == 0) {

            evt.target.style.background = "blue";
            evt.target.style.outline = "1px solid black";
            document.body.style.backgroundColor = "white";
            document.getElementById("info").innerHTML = "Toca la pantalla con uno, dos o tres dedos.";
            document.getElementById("puntos").innerHTML = "Coordenadas";
            document.getElementById("parrafo").style.backgroundColor = "white";
        }

    }
}
