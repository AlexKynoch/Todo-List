
//filter accepts the object name as parameter (task)
//return the tasklist by removing the payload (the data from the todolist component)
//task!=action.payload tells compiler dont include if task is equal to one recieved from todolist when you show the remaining tasks (when delete called) 
//need to write function for edit task 
const initialData = {

    taskitems: []
}

function taskReducer(state = initialData, action) {

    switch (action.type) {

        case 'ADD_TASK': return {

            ...state,  //this function should not effect any other variables 
            taskitems: [...state.taskitems, action.payload]  // update the array add action.payload(new taskname) to taskitems array
        }
        case 'DELETE_TASK': return {

            ...state,
            taskitems: state.taskitems.filter((task) => task != action.payload)
        }
        case 'EDIT_TASK': return {

            ...state,
            taskitems: state.taskitems.map((task) => {  //look through map till find old task variable

                if (task == action.payload.oldtask) { //if task is equal to old task update it with new task
                    task = action.payload.newtask

                    return task
                }

            })

        }

    }

    return state
}

export default taskReducer