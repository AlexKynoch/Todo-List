import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

export default function Addtask() {

    const [taskname, settaskname] = useState('')

    const taskobject = useSelector(store => store)

    const dispatch = useDispatch()  //object created for dispatch 

    function addtask() {


        dispatch({ type: 'ADD_TASK', payload: taskname })
        console.log(taskobject.taskitems)


    }

    return (
        <div className='Container'>


            <div className="row justify-content-center">

                <div className="col-md-6 p-3" style={{ backgroundColor: '#8FBC8F', borderRadius: '10px' }}>
                    <h3>Add a task here</h3>
                    <div className='input-group'>
                        <input type="text" className='form-control' onfocus="this.value=''" value={taskname} placeholder="Task Names" onChange={(e) => { settaskname(e.target.value) }} />
                        <span className='input-group-btn'>

                            <button className='btn btn-success m-1' onClick={addtask}>Add Task</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}
