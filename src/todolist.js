//get data from  reducer and map thorough all task items in array and show in page
//need to import useSelector to get data from taskReducer.js
//need to create an object for useSelector to get data (taskobject)
// need to create an object to access the array called taskitems 
//use map to look through the array elements and return the HTML content
//the object name is task
//for every task in the task list we have to return one conpmonent todoitem.js <Todoitem/>
//need to pass task as data as going to put all data into the Todoitem component
//need to add taskitems in the div so every task item will be added in the next line as we iterate through the taskitem with map
//need to add todolist component in App.js

import React from 'react'
import { useSelector } from 'react-redux'
import Todoitem from './Todoitem'

export default function Todolist() {

    const taskobject = useSelector(store => store)

    const taskitems = taskobject.taskitems.map((task) => {

        return (
            <Todoitem task={task} />
        )

    })

    return (
        <div className='row justify-content-center mt-5'>
            <div className="col-md-10 " style={{ backgroundColor: '#8FBC8F', borderRadius: '10px' }}>
                {taskitems}
            </div>
        </div>
    )
}
