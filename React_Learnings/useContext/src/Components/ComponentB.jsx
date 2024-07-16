import ComponentC from "./ComponentC.jsx";

function componentB(){
    return <>
        <div className="m-5 border border-2 border-dark p-2">
            <p className="fw-bold">ComponentB</p>
            <ComponentC/>
        </div>
    </>
}

export default componentB;