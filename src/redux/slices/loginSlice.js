import axios from "axios"

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const login = createAsyncThunk("login",async({user,cb})=>{
    const response = await axios.post("https://reqres.in/api/login",user);
    return {token:response.data.token,cb}
})

const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: null,
        pending: "idle"
    },
    extraReducers:{
        [login.pending]:(state,action)=>{
            state.pending = "pending";
        },
        [login.fulfilled]:(state,action)=>{
            console.log(action.payload)
            state.token = action.payload.token;
            state.pending = "success";
            action.payload.cb()
        },
        [login.rejected]:(state,action)=>{
            state.pending = "failed";
        }
    },
})

export const {checkToken} = loginSlice.actions;


export default loginSlice.reducer;