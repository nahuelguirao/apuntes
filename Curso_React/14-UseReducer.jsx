import { useForm } from '../hooks/useForm'
import { useReducer } from 'react'

const initialState = [{
    id: 1,
    tarea: 'Tarea 1',
    realizada: false
}]

//Ejemplo de reducer (para luego pasarlo como parametro en el useReducer hook)
const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ('TAREAS / Agregar Tarea'):
            return [...state, action.payload]
        case ('TAREAS / Editar Tarea'):
            console.log('editando')
        case ('TAREAS / Eliminar Tarea'):
            console.log('eliminando')
        case ('TAREAS / Borrar Tareas'):
            return []
        default:
            return state
    }
}

export const ListaTareas = () => {
    //UseReducer(primero se pasa el reducer, luego el estado inicial)
    //En este caso tareas = al initial state (y a medida que cambie se actualiza similar a useState)
    const [tareas, dispatch] = useReducer(tareaReducer, initialState)
    //Dispatch se utiliza para ejecutar acciones en tareas (o lo que se el estado inicial)

    //Importo el hook personalizado useForm
    const { formState, onInputChange } = useForm({ tarea: '' })

    const agregarTarea = (e) => {
        e.preventDefault()
        //Si el input esta vacío no agrega la tarea
        if (formState.tarea < 1) return
        //Armo el objeto para enviar con los datos de la nueva tarea
        const tareaEntrante = {
            id: tareas.length + 1,
            tarea: formState.tarea,
            realizada: false
        }
        //Determino la acción type y le envio los datos de la nueva tarea
        const action = {
            type: 'TAREAS / Agregar Tarea',
            payload: tareaEntrante
        }
        //Ejecuto la accion con el dispatch del useReducer
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        name="tarea"
                        placeholder="ingresar tarea..."
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Agregar tarea</button>
            </form>

            <hr />
            <ul>
                {tareas.map(tarea => <li key={tarea.id}>{tarea.tarea}</li>)}
            </ul>
        </>
    )
}
