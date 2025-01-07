import { useEffect, useRef, useState } from "react";

export default function Ejercicio7(){

    const historyRef = useRef([]);
    const [value,setValue] = useState("")

    function handleChange(e){
        historyRef.current.push(e.target.value)
        setValue(e.target.value)
    }

    function back(){
        if(historyRef.current.length > 1) {
            historyRef.current.pop()
            setValue(historyRef.current[historyRef.current.length - 1])
        }
    }
 
    
    return(
        <div>
            <input type="text" value={value} onChange={handleChange}></input>
            <button onClick={back}>Retroceder</button>
        </div>
    )

}