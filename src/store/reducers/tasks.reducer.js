import { CHANGE_STATUS } from "../actions/changeStatus.action"
import { GET_DATA , SET_NEW_TASK } from "../actions/getData.action"

const tasksReducer = (state =[] , action ) => {
    switch (action.type) {
        case GET_DATA:
            
           return [...action.payload]
        case SET_NEW_TASK:
            
           return [...state , action.payload]
        case CHANGE_STATUS:
            let newArray =  state.filter(item => item.id != action.payload.id)

            
            return [...newArray , action.payload]
        default:
            return state
    }
}


export default tasksReducer