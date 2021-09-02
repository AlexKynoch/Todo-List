const initialData = {

    taskitems: []
}

function taskReducer(state = initialData, action) {

    switch (action.type) {

        case 'ADD_TASK': return {

            ...state,  //this function should not effect any other variables 
            taskitems: [...state.taskitems, action.payload]  // update the array add action.payload(new taskname) to taskitems array
        }

    }

    return state
}

export default taskReducer