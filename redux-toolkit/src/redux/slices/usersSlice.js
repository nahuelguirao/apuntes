import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: [],
    //Lista de acciones para ejecutar sobre el slice
    reducers: {
        fetchUsers: (state, action) => {
            return action.payload;
        },
    },
});

export const { fetchUsers } = usersSlice.actions;

export default usersSlice.reducer;
