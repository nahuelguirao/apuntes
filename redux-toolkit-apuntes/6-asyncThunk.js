import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    users: [],
    error: ''
};

//Creamos el async thunk (luego gestiona el fetchin con pending, fullfilled y rejected)
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return response.data;
    } catch (error) {
        throw error;
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    // Gestionamos el pending, fulfilled y rejected
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.error = '';
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.users = [];
                state.error = action.error.message;
            });
    },
});

export default userSlice.reducer;

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"

export function UserView() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.users)


    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h2>List of users</h2>
            {users.map(u => (
                <h5>
                    {u.email}
                </h5>
            ))}
        </div>
    )
}