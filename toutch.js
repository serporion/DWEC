
window.onload = () =>{

    let pulsados = document.querySelector("body");

    //pulsados.addEventListener('click', (e) => console.log("se ha pulsado " + e.target.id ))


    pulsados.addEventListener(("touchstart", handleStart, false));
    pulsados.addEventListener(("touchmove", handleMove, false));
    pulsados.addEventListener(("touchend", handleEnd, false));




    /*<button id="log" onclick="enableLog(event);">
        Start/Stop event logging
    </button>
    <button id="clearlog" onclick="clearLog(event);">Clear the log</button>
    */

}