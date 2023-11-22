import React, { useCallback, useState } from 'react'
import { Incrementar } from './Incrementar'

export const ComponentCallBack = () => {
    const [counter, setCounter] = useState(0)
    //USE CALLBACK memoriza FUNCIONES
    const incrementarPadre = useCallback((valor) => {
        setCounter(contador => contador + valor) //Se hace contador => contador + valor porque trae la información de setCounter
    }, [])

    return (
        <>
            <h1>Contador : {counter} </h1>
            <Incrementar incrementar={incrementarPadre} />
        </>
    )
}
