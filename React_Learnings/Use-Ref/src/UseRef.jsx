import {useEffect, useRef} from "react"

function UseRef(){
    const count = useRef(0);

    useEffect(()=>{console.log("Component Render")},[])

    function handleCounter(){
        count.current++;
        console.log(count.current);
    }

    return <button onClick={handleCounter}>Count</button>
}

export default UseRef;