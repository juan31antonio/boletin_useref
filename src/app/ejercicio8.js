import { useEffect, useRef, useState } from "react";

export default function Ejercicio8(){

    const validatorRef = useRef();
    const [message,setMessage] = useState("")

    function handleBlur(){
        const email = validatorRef.current.value;
        if(!email.includes("@gmail.com")){
            setMessage("El correo debe contener '@gmail.com'.")
        }
        else{
            setMessage("")
        }
    }
  
    return(
        <div>
           <input ref={validatorRef} type="email" onBlur={handleBlur} />
           {message}
        </div>
    )

}