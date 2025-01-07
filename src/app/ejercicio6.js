import { useEffect, useRef, useState } from "react";

export default function Ejercicio6(){

    const containerRef = useRef(null);
    const [value,setValue] = useState(0)
 
    function handleChange(e){
        setValue(e.target.value)
        containerRef.current.style.backgroundColor = `rgb(${value}, 100, 100)`;
    }
        
        

    return(
        <div ref={containerRef}>
            <input type="range" value={value} onChange={handleChange}></input>
        </div>
    )


    
}