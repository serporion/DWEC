export function Login(){

    var jose="flipado";
    var contenido;
    var estaLogueado = false;

    if(estaLogueado){
      contenido = <h1>Nombre del usuario</h1>;
    }else{
      contenido = <button>Inicio Sesion</button>;
    }
  
    return (
      <>
        <h1>Este es el componente</h1>
        <button type="button" onClick={tratarEVento => console.log(jose)}>Click</button>
        {contenido}
        
      </>
    )
  }