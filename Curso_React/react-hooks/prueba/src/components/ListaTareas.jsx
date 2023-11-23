import React from 'react'
import { useForm } from '../hooks/useForm'
import { useReducer } from 'react'


const initialState = [{
    id: 1,
    tarea: 'Tarea 1',
    finalizada: false
},
]

const nuevaTarea = {
    id: 2,
    tarea: 'Tarea 2',
    finalizada: false
}


const editarTarea = {
    type: '[TAREAS] Editar Tarea',
    payload: nuevaTarea
}

const eliminarTarea = {
    type: '[TAREAS] Eliminar Tarea',
    payload: nuevaTarea
}

const borrarTareas = {
    type: '[TAREAS] Borrar Tareas',
    payload: nuevaTarea
}

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Editar Tarea':
            console.log('editar')
        case '[TAREAS] Eliminar Tarea':
            console.log('eliminar')
        case '[TAREAS] Borrar Todo':
            console.log('eliminar tareas')
        default:
            return state
    }
}



export const ListaTareas = () => {

    const [tareaState, dispatch] = useReducer(tareaReducer, initialState)

    const agregarTarea = (e) => {
        e.preventDefault()

        if (formState.tarea == '') return

        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }

        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: tarea
        }
        dispatch(action)
    }

    const { tarea, formState, onInputChange } = useForm({ tarea: '' })

    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        name='tarea'
                        placeholder='ingresar tarea...'
                        onChange={onInputChange}
                        value={tarea}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <hr />
            <ul>
                {tareaState.map(item => (
                    <li key={item.id}>{item.tarea}</li>
                ))}
            </ul>
        </>
    )
}
