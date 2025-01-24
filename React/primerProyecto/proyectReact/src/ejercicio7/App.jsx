import './App.css';
import { useState } from 'react';


function App() {
    
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  function alerta (nombre, apellidos){
    alert("Hello " + nombre + " " + apellidos);
  }

    return (
      <div className='eje7'>
        
        <input type="text" name="nombre" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>

        <input type="text" name="apellidos" id="apellidos" value={apellido} onChange={e => setApellido(e.target.value)}/>
        
        <button onClick={() => alerta(nombre, apellido)}>Submit</button>
        
      </div>
    )
  }
  
  export default App
  