import { useState } from "react";
import Button from "./Button.jsx"

function Counter() {
    let [inital, modify] = useState(0);

    const increment = () => { modify(inital + 1) };
    const decrement = () => { modify(inital - 1) };
    const reset = () => { modify(0) };

    return (
        <>
            <div className="d-flex justify-content-center mt-5">
            <div className="card w-50 m-5 shadow shadow-3">
            <h1 className="text-dark fw-bold text-center">{inital}</h1>
            <div className="d-flex p-2 justify-content-center">
                <Button handler={increment} text={"Increment"}></Button>
                <Button handler={decrement} text={"Decrement"}></Button>
                <Button handler={reset} text={"Reset"}></Button>
            </div>
            </div>
            </div>
        </>
    )
}

export default Counter