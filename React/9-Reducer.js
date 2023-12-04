// ¿Que es un reducer? 
const initialState = [{
    id: 1,
    tarea: 'Tarea 1',
    realizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'Tarea 2',
    realizada: false
}

//PUEDEN SER MUCHAS ACCIONES agregarTarea, eliminarTarea...
const agregarTarea = {
    type: 'TAREAS / Agregar Tarea',
    payload: nuevaTarea
}

//Un reducer recibe un estado inicial y una acción
const tareaReducer = (state = initialState, action = {}) => {
    if (action.type === 'TAREAS / Agregar Tarea') {
        //Retorna las tareas que ya estaban + el action.payload (que es la nueva tarea)
        return [...state, action.payload]
    }
    //Sino se encuentra una acción que corresponda se retorna el estado original
    return state
}

console.log(tareaReducer(initialState, agregarTarea))