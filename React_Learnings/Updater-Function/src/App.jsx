import { useState } from 'react'

// Updater Function = setState(arrowFunction) asynchronously 
//                   Used for multiple state changes together, React batch simpler type of state changer together
//                   Updates as: NextState become Current State

function App() {
  const [count, setCount] = useState(0);

  const increment = ()=>{
    /*
      setCount(count+1);
      setCount(count+1);
      setCount(count+1);
      // => Expected Ouput to increment counter by 3 but in acutal this approach incremnet counter by 1 only.
    */

      // Updater Function
      setCount(c => c+1); // c denotes previous state
      setCount(c => c+1);
      setCount(c => c+1);

  };

  return (
    <>
      <button onClick={increment}>Increment</button>
      <p>{count}</p>
    </>
  )
}

export default App
