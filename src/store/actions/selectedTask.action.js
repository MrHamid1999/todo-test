export const SELECT_TASK = "SELECT TASK"
export const CLOSE_TASK = "CLOSE TASK"
export const DRAGGING_TASK =  "DRAGGING TASK"
export const selectTask = (data) => {
    return {
        type: SELECT_TASK , 
        payload : data
    }
}
export const closeTask = (data) => {
    return {
        type: CLOSE_TASK
        
    }
}


export const draggingTask = (data) => {
    return {
        type : DRAGGING_TASK , 
        payload : data
    }
}
