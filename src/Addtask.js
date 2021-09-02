import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from "react";

export default function Addtask() {

    const [taskname, settaskname] = useState('')

    const dispatch = useDispatch()  //object created for dispatch 

    function addtask() {

        dispatch({ type: 'ADD_TASK', payload: taskname })

    }

    return (
        <div className='Container'>
            <h1>Add task component</h1>

            <div className="row justify-content-center">

                <div className="col-md-6">
                    <div class='input-group'>
                        <input type="text" className='form-control' value={taskname} placeholder="Task Names" onChange={(e) => { settaskname(e.target.value) }} />
                        <span class='input-group-btn'>

                            <button className='btn btn-success' onClick={addtask}>Add Task</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
