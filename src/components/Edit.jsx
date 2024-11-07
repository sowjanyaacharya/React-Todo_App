import React, { useState } from 'react'
const Edit = ({editTodo, task}) => {
  const [value, setValue] = useState('')

const handleSubmit = (e) => {
  //page doesnot reload  
  e.preventDefault()
  editTodo(value, task.id)
  setValue('');
}  
  return (
    <>
    <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transparent  border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300' placeholder='Update the selected Task?' onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2'>Update Task</button>
        </form>
        </>
  )
}

export default Edit