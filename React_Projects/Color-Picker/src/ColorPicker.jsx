import {useState} from 'react'

function ColorPicker(){
    const [color, setColor] = useState("#1c0637");

    const handleColorChange = (e) =>{
        setColor(e.target.value);
    }
    
    return (
        <>
            <div className="d-flex justify-content-center">
            <div className="card m-5 p-3 d-flex justify-content-center bg-white w-50">
                <div className="card-title text-center display-5">Color Selector 😊</div>
                <hr />
                <div className="container rounded rounded-2 shadow shadow-light" style={{backgroundColor: color, width: "150px", height: "150px"}}>
                    
                </div>

                <div className='d-flex align-items-center flex-column m-4'>
                <b>Color Code: {color}</b>
                    <label>Select Color</label>
                    <input type="color" value={color} onChange={handleColorChange}/>
                </div>
            </div>
            </div>
        </>
    )
}

export default ColorPicker