import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const icecreamInitialState = {
    numOfIcecream: 20
};

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: icecreamInitialState,
    reducers: {
        ordered: (state, action) => {
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1
            };
        },
        restocked: (state, action) => {
            return {
                ...state,
                numOfIcecream: state.numOfIcecream + action.payload
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state, action) => {
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - 1,
            };
        });
    }
});

export default icecreamSlice.reducer;

export const { ordered, restocked } = icecreamSlice.actions;
