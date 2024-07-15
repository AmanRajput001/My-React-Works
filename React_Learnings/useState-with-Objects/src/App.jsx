import { useState } from 'react'


function App() {
  const [carModel, setCar] = useState({
    name: "Honda Civic",
    model: "Civic",
    year: 2015
  });

  // const updateCarYear = (e) => { setCar({...carModel, year:e.target.value}) }
  const updateCarYear = (e) => { setCar((c)=>({...c, year:e.target.value})) }

  return (
    <>
      <div>
        <p>{carModel.name}</p>
        <p>{carModel.model}</p>
        <p>{carModel.year}</p>

        <input type="number" onChange={updateCarYear} placeholder='Enter Actual Year of Model'/>
      </div>
    </>
  )
}

export default App
