import { SET_FALSE, SET_TRUE } from "../actions/newTaskAction";


const newTaskReducer = (state =false , action ) => {
    switch (action.type) {
        case SET_TRUE:
           return state = true
        case SET_FALSE :
            return state = false
        default:
            return state
    }
}

export default newTaskReducer