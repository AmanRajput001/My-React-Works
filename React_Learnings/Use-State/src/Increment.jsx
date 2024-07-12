import {useState} from 'react'

function Increment(){
    let [number, incrementer] = useState(0);

    const handler = ()=>{
        incrementer(number+1);
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={handler}>Increment</button>
        </>
    )
}

export default Increment