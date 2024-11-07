import Form from './Form'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Todos from './Todos'
import Edit from './Edit'
uuidv4()

const Todolist = () => {
  const [todoValue, setTodoValue] = useState([]) 

  const createTodo = (todo) => {
    setTodoValue([...todoValue, {id: uuidv4(), task:todo, isEditing: false}])
  }

  const deleteTodo = id => {
     setTodoValue(todoValue.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing}:
      todo
    ))
  }

  const editTask = (task, id) => {
    setTodoValue(todoValue.map(todo=>todo.id === id ? {...todo, task, isEditing:!todo.isEditing} : todo ))
  }
  
  return (
    <div className='container  bg-gray-700 mt-20 ml-20  p-8 rounded-md'>
    <Form createTodo={createTodo}/>
    {
      todoValue.map((todo, idx) => (
        todo.isEditing ? (<Edit key = {idx} editTodo={editTask} task={todo}/>) : (
        <Todos key={idx} tasks={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>)
      ))
    }
    </div>
  )
}

export default Todolist