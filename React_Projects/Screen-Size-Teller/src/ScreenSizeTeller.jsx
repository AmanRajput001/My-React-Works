import {useState, UseEffect, useEffect} from "react"

function ScreenSizeTeller(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        const handlResize = ()=>{
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener("resize", handlResize);

        return ()=>{
            window.removeEventListener("resize", handlResize);
        }
    },[])

    return <>
        <div className="d-flex justify-content-center vw-100 vh-100 align-items-center bg-dark">
            <p className="display-3 text-light">
                {width}px X {height}px
            </p>
        </div>
    </>
}

export default ScreenSizeTeller