import { useState } from 'react';
import './App.css';
import { Login } from './Login.jsx'; 

import { Recordatorio } from './Recordatorio.jsx';


function App() {
  
  var titulo ="Titulo del componente";
  var textoBoton ="Boton1";

  //var [numero, setnumero] = ()

  var datos = [
    {
      nombre: "jose",
      edad: "21"
    },
    {
      nombre: "marta",
      edad: "30"
    }
  ]

  }

  var listaNombre = datos.map((dato) => {
    return <li>{dato.nombre} tiene {dato.edad}</li>
  })
  

  return (
    
    <>
      <h3>Titulo del Recordatorio</h3>
      <h4></h4>
      <img src = { imageSrc } />

      <ul>
        {listaNombre}
      </ul>

      <Recordatorio valor></Recordatorio>
      <Login></Login>


    </>

  
  )
}

export default App
