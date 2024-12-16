import { useEffect, useRef, useState } from "react";

export default function Ejercicio5(){

    const prevValueRef = useRef(0);
    const [value,setValue] = useState(0)
 
    useEffect(() => {
        prevValueRef.current = value; 
    }, [value]);
        
        

    return(
        <div>
            {prevValueRef.current}<br/>
            {value}<br/>
            <button onClick={() => setValue(value => value + 1)}>Boton aumentar</button>
        </div>
    )
}