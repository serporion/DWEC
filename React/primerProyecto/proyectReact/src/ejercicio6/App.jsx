import './App.css';
import { Lista } from './Lista';

function App() {
    
  const animales = [
    { name: 'dog 🐶', image: 'https://via.placeholder.com/100x100?text=Dog' },
    { name: 'cat 🐱', image: 'https://via.placeholder.com/100x100?text=Cat' },
    { name: 'chicken 🐔', image: 'https://via.placeholder.com/100x100?text=Chicken' },
    { name: 'cow 🐄', image: 'https://via.placeholder.com/100x100?text=Cow' },
    { name: 'sheep 🐑', image: 'https://via.placeholder.com/100x100?text=Sheep' },
    { name: 'horse 🐴', image: 'https://via.placeholder.com/100x100?text=Horse' }
  ];


    return (
      <div className='eje6'>
        
        <Lista animales={animales}></Lista>
        
      </div>
    )
  }
  
  export default App