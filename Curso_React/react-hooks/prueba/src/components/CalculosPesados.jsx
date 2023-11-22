import React, { useMemo, useState } from 'react'

export const CalculosPesados = () => {
    const [show, setShow] = useState(true)

    const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5])

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, (listaNumeros[listaNumeros.length - 1] + 1)])
    }
    //Use memo, memoriza un proceso para no tener que repetirlo innecesariamente
    const getCalculo = (listaNumeros) => useMemo(() => {
        console.log('.....')
        return listaNumeros.reduce((a, b) => a * b)
    }, [listaNumeros]) //Solamente memoriza nuevamente si cambia la [listaNumeros]

    return (
        <>
            <h2>Calculo:</h2>

            <p>{getCalculo(listaNumeros)}</p>
            <button onClick={() => setShow(!show)}>{show ? 'show' : 'hide'}</button>
            <button onClick={() => agregarNumero()}>Agregar numero</button>
        </>
    )
}
