import React, { useState } from 'react'
import { AgregarTarea } from './AgregarTarea'

const Item = ({ nombre, realizado }) => {
    return (
        <li>
            {nombre}
            {realizado ? '✅' : '❌'}
        </li>
    )
}

export const ListaTareas = () => {
    const listaTemas = [
        { id: 1, nombre: 'Curso HTML', realizado: true },
        { id: 2, nombre: 'Curso CSS', realizado: true },
        { id: 3, nombre: 'Curso JS', realizado: true },
        { id: 4, nombre: 'Curso REACT', realizado: false },
    ]

    const [array, setArray] = useState(listaTemas)
    //Con los datos que envia el hijo (nuevaTarea) creo un objeto y desde acá mismo en el padre lo agrego a la lista de Temas (NO lo delegó a que lo haga el componente hijo)
    const onAgregarTarea = (nuevaTarea) => {
        if (nuevaTarea < 1) return
        const nuevoTema =
        {
            id: array.length + 1,
            nombre: nuevaTarea,
            realizado: false
        }
        setArray([...array, nuevoTema])
    }

    return (
        <>
            {/*Envio al componente hjo onAgregarTarea */}
            <AgregarTarea modificarListaTemas={onAgregarTarea} array={array}></AgregarTarea>
            <h1>Lista tareas</h1>
            <ul>
                {array.map(item => <Item key={item.id} nombre={item.nombre} realizado={item.realizado}></Item>)}
            </ul>
        </>
    )
}


//EN EL COMPONENTE HIJO (AgregarTarea)

import React, { useState } from 'react'
//Desestructuro el modificarListaTemas (es el onAgregarTarea)
export const AgregarTarea = ({ modificarListaTemas }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        //Utilizo modificarListaTemas para enviarle los valores ingresados en el input al padre
        modificarListaTemas(inputValue)
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='ingresar tarea...'
                value={inputValue}
                onChange={onInputChange}
            />
            <button>Agregar</button>
        </form>
    )
}

