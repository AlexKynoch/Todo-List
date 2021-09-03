//need to add task as props to function todoitem
//write task in h1 return
//onclick for delete button (goto deletetask function)
//to delete have to call the delete task function in the taskreducer with a parameter of task by sending the task name as payload (data)
// delete task function will check the task name in task items array when matching index in array it will be deleted
//need to import useDispatch so can use function that is present in in taskReducer
//need to write functin in taskreducer before can call it 

import { useState } from 'react'
import { useDispatch } from 'react-redux'



export default function Todoitem({ task }) {



    const dispatch = useDispatch()

    const [show, setshow] = useState('none')

    const [newtask, setnewtask] = useState('')

    function deletetask(task) {

        dispatch({ type: 'DELETE_TASK', payload: task })

    }

    function edittask() {

        setshow('inline')

    }

    function finaledit(task) {

        dispatch({ type: 'EDIT_TASK', payload: { oldtask: task, newtask: newtask } })
        setshow('none')

    }

    return (
        <div>
            <div className="row justify content left">

                <div className="col-md-9">
                    <h2>{task}</h2>
                </div>
                <div className="col-md-1">
                    <button className='btn btn-secondary btn-sm m-1 ' onClick={edittask}>Edit</button>
                </div>
                <div className="col-md-1">
                    <button className='btn btn-danger btn-sm m-1 ' onClick={() => deletetask(task)}>Delete</button>
                </div>

                <input type="text" style={{ display: show }} value={newtask} onChange={(e) => { setnewtask(e.target.value) }} />
                <button style={{ display: show }} className='btn btn-success m-1' onClick={() => { finaledit(task) }}>Final Edit</button>
                <hr />
            </div>
        </div>
    )
}
