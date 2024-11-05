
window.onload = () =>{

    let pulsados = document.querySelector("section");

    //pulsados.addEventListener('click', (e) => console.log("se ha pulsado " + e.target.id ))


    pulsados.addEventListener("touchstart", handleStart, false);
    pulsados.addEventListener("touchmove", handleMove, false);
    pulsados.addEventListener("touchend", handleEnd, false);



    function handleStart(evt) {

        evt.preventDefault(); //Esto evita que el navegador aplique cosas que no queremos.

        
        // var el = document.getElementsByTagName("div"); Me da problemas porque devuelve todos los elementos. 
                                                          //Con target, tenemos el elemento tocado y no hace falta pedir que lo localice.

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
        // Aquí puedes agregar lógica para cuando se mueve el toque (opcional)
        // Actualmente no estamos haciendo nada con el evento touchmove.
    }

    function handleEnd(evt) {
        // Aquí puedes agregar lógica para cuando se termina el toque (opcional)
        // Actualmente no estamos haciendo nada con el evento touchend.
    }
}