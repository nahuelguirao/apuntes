import React from 'react'
import { useContador } from '../hooks/useContador'

export const Contador = () => {
    const { contador, sumar, reset, restar } = useContador(1)

    return (
        <>
            <h2>Contador : {contador}</h2>
            <button onClick={sumar}>+1</button>
            <button onClick={reset}>RESET</button>
            <button onClick={restar}>-1</button>
        </>
    )
}
