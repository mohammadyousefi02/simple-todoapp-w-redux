import React from 'react'

import {useDispatch} from "react-redux"

import {removeTodo,editTodo} from "./redux/slices/todosSlice"

function Todo({title,id,setTodoTitle}) {
    const editTodoHandler = () => {
        setTodoTitle(title)
        dispatch(editTodo(id))
    }
 
    const dispatch = useDispatch()
  return (
    <div>
        <span>{title}</span>
        <div>
            <button onClick={()=>dispatch(removeTodo(id))}>delete</button>
            <button onClick={editTodoHandler}>edit</button>
        </div>
    </div>
  )
}

export default Todo