import React from 'react'
import Todo from './Todo'

type todo = {
  id: string;
  name: string;
}

const ToDoList = ({todos}) => {
  return (
    todos.map((todo) => <Todo todo={todo} key={todo}/>)
  )
}

export default ToDoList