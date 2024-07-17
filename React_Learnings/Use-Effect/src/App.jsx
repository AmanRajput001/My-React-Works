import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component Rerender");
  }, [count])

  const handleCount = (e) => {
    setCount(c => c + 1);
    
    if ((count+1) % 2 == 0) {
      e.target.style.backgroundColor = "red";
    }else{
      e.target.style.backgroundColor = "green";
    }
  };

  return (
    <>
      <button onClick={(e)=>handleCount(e)} style={{color: "white", backgroundColor:"black"}}>Count {count}</button>
    </>
  )
}

export default App
