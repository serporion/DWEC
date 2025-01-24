export function Login(){

    var jose="flipado";
    var contenido;
    var estaLogueado = true;

    if(estaLogueado){
      contenido = <h1>Nombre del usuario</h1>;
    }else{
      contenido = <button>Inicio Sesion</button>;
    }
  
    return (
      <>
        <h1>ESte es el componente</h1>
        <button type="button" onClick={() => console.log(jose)}>Click</button>
        {contenido}
      </>
    )
  }