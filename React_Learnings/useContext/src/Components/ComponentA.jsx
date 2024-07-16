import { useState, createContext } from "react";
import ComponentB from "./ComponentB.jsx";

export const myContext = createContext();

function ComponentA() {
    const [user, setUser] = useState("Aman");

    return (
        <>
            <div className="w-50 m-5 border border-2 border-dark p-2">
                <p className="fw-bold">ComponentA - <i>{user}</i></p>
                <myContext.Provider value={user}>
                    <ComponentB />
                </myContext.Provider>
            </div>
        </>
    );
}

export default ComponentA;
