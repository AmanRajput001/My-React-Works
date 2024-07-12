/*
  Conditional Rendering = allow u to control what get render in your application.
*/

import Greeting from "./Greeting"

function App() {
  return (
    <>
      <Greeting logined={true} name="Aman"></Greeting>
      <Greeting name="Vishal"></Greeting>
      <Greeting logined={false} name="Arun"></Greeting>
      <Greeting logined={true} ></Greeting>
    </>
  )
}

export default App
