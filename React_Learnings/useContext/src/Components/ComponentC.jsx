import ComponentD from "./ComponentD.jsx";

function componentC(){
    return <>
        <div className=" m-5 border border-2 border-dark p-2">
            <p className="fw-bold">ComponentC</p>
            <ComponentD/>
        </div>
    </>
}

export default componentC;