import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        readProducts: (state, action) => {
            return action.payload;
        },
        createProduct: (state, action) => {
            return [...state, action.payload]
        },
        updateProduct: (state, action) => {
            return state.map(p => p.id == action.payload ? { ...p, done: !p.done } : p)
        },
        deleteProduct: (state, action) => {
            return state.filter(p => p.id != action.payload)
        },
    },
});

export const {
    readProducts,
    readOneProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
