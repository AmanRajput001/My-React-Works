import React, { useState, useEffect } from "react"

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    let hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    useEffect(() => {
        setInterval(() => { setTime(new Date()) }, 1000);
    }, []);

    function praseZero(item) {
        return (item >= 10 ? "" : "0") + item;
    }

    return (
        <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
            <span className="card bg-dark border border-3 border-light shadow shadow-light shadow-3 blur bg-opacity-75">
                <span className="card-body display-3 fw-bold text-light">
                    {praseZero(hours)}:{praseZero(mins)}:{praseZero(secs)} {hours % 12 < 12 ? "AM" : "PM"}
                </span>
            </span>
        </div>
    )
}

export default DigitalClock