import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataAction } from "../store/actions/getData.action";

export const changeTasks = (data) => async(dispatch) =>{

    //changing the order of data and getting it again
    return await axios.put(`http://localhost:3001/tasks/${data}`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}