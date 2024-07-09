/* 

How To Style React Compnent With CSS ?

1. External => used for global purpose
2. Module => Used for individual component (we make module for specific component)
3. Inline => is easy, do have global naming conflicts, less maintainable

*/

// import Button from './ButtonExternal.jsx'

// import Button from './Module/ButtonModule.jsx'

import Button from './ButtonInline.jsx'

function App() {
  return (
    <Button/>
  );
}

export default App
