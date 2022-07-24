export const GET_DATA = "GET DATA" ;
export const SET_NEW_TASK = "SET NEW TASK"


export  const getDataAction = (data) => {

    return {
        type : GET_DATA , 
        payload : data
    }
}


export const setNewTaskAction = (data) => {

    return {
        type : SET_NEW_TASK , 
        payload : data
    }
}