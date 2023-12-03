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

//Recibe un estado (Se le tiene que pasar el intitial state) y una acción (por defecto una acción vacía para que no tire error)
const tareaReducer = (state = initialState, action = {}) => {
    //Verifico que tipo de acción quiere realizar
    if (action.type === 'TAREAS / Agregar Tarea') {
        //Retorna las tareas que ya estaban + el action.payload (que es la nueva tarea)
        return [...state, action.payload]
    }
    //Sino se encuentra uan acción que corresponda se retorna el estado original
    return state
}

console.log(tareaReducer(initialState, agregarTarea))