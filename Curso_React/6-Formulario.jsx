import React, { useState } from 'react'

export const AgregarTarea = () => {
    const [valorInput, setValorInput] = useState('')

    const cambioDelInput = (e) => {
        //Cada vez que se escribe algo actualiza el estado del input con el hook
        setValorInput(e.target.value)
    }

    const noActualizar = (e) => {
        e.preventDefault() //Escucha el evento onSubmit y evita que se actualice la página
    }

    return (
        //Los atributos HTML de un input en REACT se llama properties (Ya que es JSX y no HTML)
        <form onSubmit={noActualizar}>
            <input
                type='text'
                placeholder='Ingrese una tarea...'
                value={valorInput} //El valor queda estático (por ello hay que utilizar el evento onChange)
                onChange={cambioDelInput} //Cada vez que se escribe algo en el input lo escucha
            />
        </form>
    )
}