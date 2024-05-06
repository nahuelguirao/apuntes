import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const icecreamInitialState = {
    numOfIcecream: 10
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: icecreamInitialState,
    reducers: {
        ordered: (state, action) => {
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1
            }
        },
        restocked: (state, action) => {
            return {
                ...state,
                numOfIcecream: state.numOfIcecream + action.payload
            }
        }
    },
    //Para ejecutar cambios en un slice cuando se ejecuta un action de otro slice
    //utilizamos los extra reducers
    extraReducers: (builder) => {
        //Agregamos un caso al builder primero pasando el action del otro slice y luego gestionamos normalmente
        builder.addCase(cakeOrdered, (state, action) => {
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1,
            };
        });
    }
})


export default icecreamSlice.reducer

export const { ordered, restocked } = icecreamSlice.actions