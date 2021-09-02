import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const taskobject = useSelector(store => store)
    return (
        <div>
            <h1>Todo List Tasks Remaining: {taskobject.taskitems.length}</h1>
        </div>
    )
}


