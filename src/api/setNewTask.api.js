import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setNewTaskAction } from "../store/actions/getData.action";

export const setNewTask = (data) => async(dispatch ) =>{

    // adding new task to the list and also saving it into redux
    return await axios.post("http://localhost:3001/tasks" , data)
    .then(res => dispatch(setNewTaskAction(res.data)))
    .catch(err => console.log(err))
}