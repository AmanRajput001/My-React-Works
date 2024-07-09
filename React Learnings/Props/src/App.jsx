// props:- read only properties that are shared between components. 
//         A Parent componet can send data to a child component.
//         <component key=value />

// propTypes:- a mechanism that ensure that the passed value is of the correct datatype.
//             age: PropTypes.number 

// defaultProps:- default values for props in case they are not passed from the parent component 
//                name: "Guest"

import Student from './StudentModule/Student.jsx'

function App() {
 return (
  <>
    <Student name="Songebob" age={30} isStudent= {false}/>
    <Student name="Patrick" age={10} isStudent= {true}/>
    <Student name="Squidward" age={40} isStudent= {false}/>
    <Student name="Sandy" age={15} isStudent= {true}/>
    <Student/>
  </>
 )
}

export default App
