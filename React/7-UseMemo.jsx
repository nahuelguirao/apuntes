import React, { useMemo, useState } from 'react'
//Cada vez que se toca el boton show / hide se calcula nuevamente el getCalculo innecesariamente
//Por ello se puede utilizar el hook useMemo para que se memorice un proceso hasta que cambie la dependencia

export const CalculosPesados = () => {
    //En este caso memoriza el calculo y SOLO se modifica/actualiza si cambia la dependencia, en este caso la lista de números
    //Para que cada vez que se renderiza nuevamente el componente no se calcule innecesariamente
    const getCalculo = (listaNumeros) => useMemo(() => {
        return listaNumeros.reduce((a, b) => a * b)
    }, [listaNumeros])

    //Estructura del useMemo
    // const nombreFuncionaMemorizar = (parametro) => useMemo( ()=> {proceso normal de la función original}, [dependencias])

    const [show, setShow] = useState(true)
    const [lista, setLista] = useState([1, 2, 3, 4, 5])

    const agregarNumero = () => {
        setLista([...lista, lista.length + 1])
    }

    return (
        <>
            <h3>{getCalculo(lista)}</h3>
            <button onClick={() => setShow(!show)}>{show ? 'show' : 'hide'}</button>
            <button onClick={agregarNumero}>Agregar</button>
        </>
    )
}