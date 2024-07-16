import {myContext} from "./ComponentA.jsx";
import { useContext } from "react";

function componentD(){  
    const user = useContext(myContext);
    return <>
        <div className="m-5 border border-2 border-dark p-2">
            <p className="fw-bold">ComponentD - {user}</p>
        </div>
    </>
}

export default componentD;