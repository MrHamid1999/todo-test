import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks.reducer";
import newTaskReducer from "./newTask.reducer";
import selectedTaskReducer from "./selectedtask.reducer";

const store = configureStore({
    reducer : {
        tasks : tasksReducer , 
        newTask : newTaskReducer , 
        selectedTask : selectedTaskReducer
    }
})

export default store