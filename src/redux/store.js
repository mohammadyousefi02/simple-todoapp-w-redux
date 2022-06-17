import {configureStore} from '@reduxjs/toolkit';

import usersSlice from './slices/usersSlice';

import userSlice from './slices/userSlice';

import loginSlice from './slices/loginSlice';

import todosSlice from './slices/todosSlice';


export default configureStore({
    reducer: {
        users: usersSlice,
        user: userSlice,
        todos: todosSlice,
        login: loginSlice
    }
})