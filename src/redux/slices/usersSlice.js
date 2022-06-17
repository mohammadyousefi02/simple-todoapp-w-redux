import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUsersList = createAsyncThunk('userSlice/fetchUsersList', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
})



const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle',
    },
    extraReducers:{
        [fetchUsersList.pending] : (state , action) => {
            state.status = 'loading';
        },
        [fetchUsersList.fulfilled] : (state , action) => {
            state.status = 'success';
            state.users = action.payload;
        },
        [fetchUsersList.rejected] : (state , action) => {
            state.status = 'error';
        }
    }
})


export default userSlice.reducer;








