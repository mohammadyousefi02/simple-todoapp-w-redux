import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';



export const fetchUserData = createAsyncThunk('userSlice/fetchUserData', async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    return data;
})



const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        status: 'idle',
    },
    extraReducers:{
        [fetchUserData.pending] : (state , action) => {
            state.status = 'loading';
        },
        [fetchUserData.fulfilled] : (state , action) => {
            state.status = 'success';
            state.user = action.payload;
        },
        [fetchUserData.rejected] : (state , action) => {
            state.status = 'error';
        }
    }
})

export default userSlice.reducer