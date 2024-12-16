import { useEffect, useRef } from "react";

export default function Ejercicio2(){

    const miRef = useRef(0);

    function aumentaValor(){
        miRef.current = miRef.current + 1
        console.log(miRef.current)
    }

    return(
        <div>
            <button onClick={aumentaValor}>Boton aumenta</button>
            <button onClick={() => alert(miRef.current)}>Alerta</button>
        </div>
    )
}