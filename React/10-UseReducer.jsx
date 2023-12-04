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
    //UseReducer recibe 2 parametros 1 reducer y un estado inicial, el reducer a su vez recibe una action conjunto al estado inicial
    //luego devuelve el estado actual (al principio = al estado inicial) y un dispatch para poder ejecutar las acciones
    const [tareas, dispatch] = useReducer(tareaReducer, initialState)

    const { formState, onInputChange } = useForm({ tarea: '' })

    const agregarTarea = (e) => {
        e.preventDefault()
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
