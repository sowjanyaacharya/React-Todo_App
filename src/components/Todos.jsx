import React from 'react'
import {AiFillEdit} from 'react-icons/ai'
import {BsTrashFill} from 'react-icons/bs'

const Todos = ({tasks, deleteTodo, editTodo}) => {
  return (
    <div className='flex justify-between items-center bg-violet-500 text-white py-3 px-3 rounded-md mb-10 cursor-pointer'>
    <p className='font-primary'>{tasks.task}</p>
    <div className='flex items-center gap-x-4'>
    <AiFillEdit className='text/xl' onClick={()=> editTodo(tasks.id)}/>
    <BsTrashFill className='text/xl' onClick={()=> deleteTodo(tasks.id)}/>
    </div>
    </div>
  )
}

export default Todos