import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './slices/usersSlice';
import postsReducer from './slices/postsSlice';
import productsReducer from "./slices/productsSlice";

export const store = configureStore({
    // En el reducer se almacenan todas las variables/slices que va a tener nuestro store
    reducer: {
        users: usersReducer,
        posts: postsReducer,
        products: productsReducer,
    },
});

