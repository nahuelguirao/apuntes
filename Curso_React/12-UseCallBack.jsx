//Componente PADRE

import React, { useCallback, useState } from 'react'
import { Incrementar } from './Incrementar'
//UseCallBack es similar a useMemo pero se utiliza para memorizar funciones
export const CallbackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback((val) => {
        setCounter(contador => contador + val) //Se pone contador => contador + val porque setCounter ya tiene el valor incorporado de counter (sino da problemas)
    }, [])

    return (
        <>
            <h1>Contador : {counter}</h1>
            <Incrementar incrementar={incrementarPadre}></Incrementar>
        </>
    )
}


//Componente HIJO
import React from 'react'
//Para que no se redibuje los datos que ingresan se usa React.memo()
export const Incrementar = React.memo(({ incrementar }) => {

    console.log('redibujando...')

    return (
        <button onClick={() => incrementar(1)}>CLICK</button>
    )
}
)
