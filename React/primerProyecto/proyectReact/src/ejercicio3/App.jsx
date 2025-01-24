import './App.css'

function Buttons (indice){

  function alerta(numero){
    numero = indice;
      alert("Clicked the button " + numero);
    
  }

  return (
    <>
      <button onClick={alerta}>Click me Button {indice}</button>
    </>
  )
}


function App() {

  var boton1 = Buttons(1);
  var boton2 = Buttons(2);
  var boton3 = Buttons(3);

  return (
    <div className="eje3">
      {boton1}
      {boton2}
      {boton3}
    </div>
  )
}
  
  export default App