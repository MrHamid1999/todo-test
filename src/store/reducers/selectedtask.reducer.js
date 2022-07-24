import { SELECT_TASK , CLOSE_TASK, DRAGGING_TASK } from "../actions/selectedTask.action"

const selectedTaskReducer = (state ={isOpen :false , task : {}} , action) => {
    switch (action.type) {
        case SELECT_TASK:
            return {
                ...state , 
                isOpen : true , 
                task : action.payload
            }
        case CLOSE_TASK : 
            return {
                ...state , 
                isOpen : false
            } 
        case DRAGGING_TASK:
            return {
                ...state , 
                task : action.payload
            }
           
    
        default:
            return state
            break;
    }
}

export default selectedTaskReducer