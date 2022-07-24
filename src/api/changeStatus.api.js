import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeStatusAction } from "../store/actions/changeStatus.action";

export const changeStatus = (id ,status)=> async(dispatch) => {
   

    return await axios.patch(`http://localhost:3001/tasks/${id}` , {done : status})
    .then(res => dispatch(changeStatusAction(res.data)))
    .catch(err => console.log(err))
}