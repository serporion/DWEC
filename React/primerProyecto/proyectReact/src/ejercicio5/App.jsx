import './App.css';

function App() {
    
  var animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  const listAnimals = animals.map(animal =>
    <li key={animal}>
      {animal}
    </li>
  )

    return (
      <>
        
        {listAnimals}
        
      </>
    )
  }
  
  export default App