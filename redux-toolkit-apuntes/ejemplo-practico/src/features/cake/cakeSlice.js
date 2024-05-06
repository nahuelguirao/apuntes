import { createSlice } from "@reduxjs/toolkit";

const cakeInitialState = {
    numOfCakes: 10,
}

//Cada slice alberga la lógica del estado de una parte de la app en este caso 'las cakes'
const cakeSlice = createSlice({
    //Nombre para identificar el slice
    name: 'cake',
    //Estado inicial
    initialState: cakeInitialState,
    //Reducers (acciones para ejecutar sobre el estado del slice)
    reducers: {
        ordered: (state, action) => {
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        },
        restocked: (state, action) => {
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        }
    }
})

//Exportamos el reducer
export default cakeSlice.reducer

//En el caso de las actions primero desestructuramos y luego exportamos
export const { ordered, restocked } = cakeSlice.actions 