import React from 'react'

import {useSelector , useDispatch} from "react-redux"

import { v4 as uuidv4 } from 'uuid'

import {addTodo,updateTodo} from "./redux/slices/todosSlice"
import Todo from './Todo'

function Todos() {

    const {todos,isEditing} = useSelector(state => state.todos)

    const dispatch = useDispatch()

    const [todoTitle,setTodoTitle] = React.useState('')

    const addTodoHandler = () => {
        const newTodo = {id:uuidv4(),title:todoTitle}
        dispatch(addTodo(newTodo))
        setTodoTitle("")
    }

    const updateTodoHandler = () => {
        dispatch(updateTodo(todoTitle))
        setTodoTitle("")
    }

  return (
    <div>
        <div>
            <span>{isEditing}</span>
            <input value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)} type="text" placeholder='title'/>
            <button onClick={isEditing ? updateTodoHandler : addTodoHandler}>{isEditing ? "update" : "add"}</button>
        </div>
        <div>
            {todos.map(todo=>(
                <Todo key={todo.id} id={todo.id} title={todo.title} setTodoTitle={setTodoTitle}/>
            ))}
        </div>
    </div>
  )
}

export default Todos