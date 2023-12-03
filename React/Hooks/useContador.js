import { useState } from "react"

export const useContador = (valor) => {
    const [contador, setContador] = useState(0)
    
    const sumar = () => {
        setContador(contador + valor)
    }
    const reset = () => {
        setContador(0)
    }
    const restar = () => {
        if (contador < 1) return
        setContador(contador - valor)
    }
    return{
        contador,
        sumar,
        reset,
        restar
    }
}
