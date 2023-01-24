import {useRef, useState } from 'react'
import ToDoList from './ToDoList'

const Todo = () => {
  const [todos, setTodos] = useState([{ id: "", name: "" }])
  const todoNameRef = useRef<HTMLInputElement>(null!)

  const handleAddTodo = () => {
    const name = todoNameRef.current?.value
    setTodos((prevTodos) => {
      return [...prevTodos, {id: name, name: name}]
    })
    todoNameRef.current.value = ""
  }

  return (
    <div>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <ToDoList todos={todos} />
    </div>
  )
}

export default Todo