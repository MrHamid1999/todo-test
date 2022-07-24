export const  CHANGE_STATUS = "CHANGE STATUS" 


export const changeStatusAction = (data) => {
    return {
        type : CHANGE_STATUS , 
        payload : data
    }
}


