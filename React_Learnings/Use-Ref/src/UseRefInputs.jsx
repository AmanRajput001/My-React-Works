import { useRef } from "react"

function UseRefInputs(){
    const inputRef1 = useRef(null);    
    const inputRef2 = useRef(null);    
    const inputRef3 = useRef(null);

    function handleInput1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleInput2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleInput3(){        
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return <div>
        <input type="text" ref={inputRef1}/>
        <button onClick={handleInput1}>Click1</button>
        <br />
        
        <input type="text" ref={inputRef2}/>
        <button onClick={handleInput2}>Click2</button>
        <br />
        
        <input type="text" ref={inputRef3}/>
        <button onClick={handleInput3}>Click3</button>
        <br />
    </div>
}

export default UseRefInputs