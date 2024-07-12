function ClickMe({name}) {
    const handler = (name, e)=>{
        console.log(e)
        {e.target.textContent = name}
    }

    const handlerMsg = () => {
        alert("Stay! Happy😊");
    }

    return (
        <>
            <div>
                <button onClick = {(e)=>handler(name, e)}>Click To Reveal The Name</button>
                <button onDoubleClick = {()=>handlerMsg()}>Double Click To See msg</button>
            </div>
        </>
    )
}

export default ClickMe