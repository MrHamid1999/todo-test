import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const deleteTask = (id)=> async() => {
   

    return await axios.delete(`http://localhost:3001/tasks/${id}`)
    .catch(err => console.log(err))
}