
export function Lista({animales}) {
    
/*
  {animales.map((animal, index) => (
    <li key={index}>
      <img src={animal.image} alt={animal.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
      {animal.name}
    </li>
  ))}
*/
    return (
      <>
        
        {animales.map((animal, index) => (
          <li key={index}>
            <img src={animal.image} alt={animal.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
            {animal.name}
          </li>
        ))}
        
      </>
    )
  }
