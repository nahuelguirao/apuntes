import { useState } from "react"

export const useContador = (valor = 1) => {
    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + valor)
    }

    const reset = () => {
        setContador(0)
    }

    const restar = () => {
        if (contador - valor < 0) return
        setContador(contador - valor)
    }

    return {
    contador,
    sumar,
    reset,
    restar
  }
}
