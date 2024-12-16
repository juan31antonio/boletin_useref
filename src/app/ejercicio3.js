import { useEffect, useRef, useState } from "react";

export default function Ejercicio3(){

    const [contador,setContador] = useState(0)
    const miRef = useRef(null);

    useEffect(() => {
        return(
            clearInterval(miRef.current)
        )
    },[]);

    function startTemp(){
        miRef.current = setInterval(() => {
            setContador(contador => contador + 1)
        }, 1000);
    }

    function stopTemp(){
        clearInterval(miRef.current)
            miRef.current = null
    }

    return(
        <div>
            El valor del contador es:{contador}<br/>
            <button onClick={startTemp}>Iniciar</button>
            <button onClick={stopTemp}>Detener</button>
        </div>
    )
}