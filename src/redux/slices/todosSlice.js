import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        isEditing: false,
        currentTodoIndex: null
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        editTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload);
            state.currentTodoIndex = index
            state.isEditing = true;
        },
        updateTodo: (state, action) => {
            state.todos[state.currentTodoIndex].title = action.payload;
            state.isEditing = false;
        }
    }
})

export const {addTodo, removeTodo, editTodo, updateTodo} = todosSlice.actions;

export default todosSlice.reducer;