import { useEffect, useRef } from "react";

export default function Ejercicio1(){

    const miRef = useRef();

    useEffect(() => {
        miRef.current.focus();
    },[miRef]);

    return(
        <input ref={miRef} type="text" placeholder="Escribe algo" />
    )
}