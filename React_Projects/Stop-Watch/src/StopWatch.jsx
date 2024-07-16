import {useState, useRef, useEffect} from "react"

function StopWatch(){
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const StartTimeRef =  useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalRef.current = setInterval(()=>{
                setElapsedTime(Date.now() - StartTimeRef.current);
                console.log(elapsedTime);
            }, 10)
        }

        return ()=>{
            clearInterval(intervalRef.current);
        }
    },[isRunning])

    function start(){
        setIsRunning(true);
        StartTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }

    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000*60*60));
        let mins = Math.floor(elapsedTime / (1000*60) % 60);
        let secs = Math.floor(elapsedTime / (1000) % 60);
        // let milliseconds = Math.floor(elapsedTime % (1000) / 10);

        hours = String(hours).padStart(2,"0");
        mins = String(mins).padStart(2,"0");
        secs = String(secs).padStart(2,"0");

        return `${hours}:${mins}:${secs}`;
    }


    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="flex-column align-items-center mt-5 shadow-light bg-dark text-light rounded-5 border border-3 border-light">
            <div className="display-3 p-5 pb-2">
                {formatTime()}
            </div>
            <div className="display-4 p-5 pt-2">
                <button className="btn btn-success m-2" onClick={start}>Start</button>
                <button className="btn btn-danger m-2" onClick={stop}>Stop</button>
                <button className="btn btn-primary m-2" onClick={reset}>Reset</button>
            </div>
            </div>
        </div>
    )
}

export default StopWatch