import { useState } from "react"
import Swal from "sweetalert2";

export const useFormulario = (initialState = {})=>{
    const [inputs, setInpust] = useState(initialState);
    const handlerChange = (e) =>{
        const {name, value, checked, type } = e.target;
        setInpust((old)=> ({
            ...old, [name]: type === "checkbox" ? checked : value,
        }));
    }

    const reset = () =>{
        setInpust(initialState);
    };

    return[inputs, handlerChange, reset];
}