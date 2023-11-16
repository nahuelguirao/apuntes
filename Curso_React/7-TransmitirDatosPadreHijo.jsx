//EN EL COMPONENTE PADRE
import React, { useState } from 'react'
import { AgregarTarea } from './components/AgregarTarea'

const Items = ({ nombre, realizado }) => {
    return (
        <li>{nombre} {realizado ? '✔️' : '❌'}</li>
    )
}

export const ListarTareas = () => {
    let listaTareas = [
        { id: 1, nombre: 'HTML', realizado: true },
        { id: 2, nombre: 'CSS', realizado: true },
        { id: 3, nombre: 'JS', realizado: false },
    ]

    const [array, setArray] = useState(listaTareas)

    const onAgregarTarea = (valor) => {
        const nuevaTarea = {
            id: array.length + 1,
            nombre: valor,
            realizado: false,
        }
        setArray([...array, nuevaTarea])
    }

    return (
        <>
            <h1>Temas:</h1>
            {/* Se pasa al fragmento hijo la función de onAgregarTarea como pasarInfo*/}
            <AgregarTarea pasarInfo={onAgregarTarea}></AgregarTarea>
            <ol>
                {array.map(tema => <Items key={tema.id} nombre={tema.nombre} realizado={tema.realizado} ></Items>)}
            </ol>
        </>
    )
}


//EN EL COMPONENTE HIJO (AgregarTarea)

import React, { useState } from 'react'

export const AgregarTarea = ({ pasarInfo }) => {
    const [valorInput, setValorInput] = useState('')

    const cambioInput = (e) => {
        setValorInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        //El pasarInfo que se establece en el padre es utilizado para enviarle el valor del input
        pasarInfo(valorInput)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Ingrese una tarea...'
                value={valorInput}
                onChange={cambioInput}
            />
        </form>
    )
}
