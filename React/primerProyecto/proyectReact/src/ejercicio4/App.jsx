import './App.css';
import { useState } from 'react';

function App() {

    const [contador, setContador] = useState(0);
    function sumar(){

      setContador(contador + 1)
      
    }

    return (
      <div className='eje4'>
        <p>The button has been clicked { contador } times</p>
        <button onClick={sumar}>Click me Button</button>
      </div>
    )
  }
  
  export default App
  