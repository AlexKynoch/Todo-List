import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const taskobject = useSelector(store => store)
    return (
        <div style={{ backgroundColor: '#8FBC8F', borderRadius: '10px' }} className='m-5'>
            <h1>Todo List </h1>
            <h3>Tasks left to do: {taskobject.taskitems.length}</h3>
        </div>
    )
}


