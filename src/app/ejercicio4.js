import { useEffect, useRef, useState } from "react";

export default function Ejercicio4(){

    const miRef = useRef(0);
    const [render,setRender] = useState(0)
 
    useEffect(() => {
        miRef.current++
    });

    return(
        <div>
            {miRef.current}<br/>
            <button onClick={() => setRender(render => render + 1)}>Boton aumentar</button>
        </div>
    )
}