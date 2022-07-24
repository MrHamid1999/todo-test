import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDataAction } from "../store/actions/getData.action";

export const getData = () => async(dispatch) =>{

    // getting data from server using axios and saving it into redux
    return await axios.get("http://localhost:3001/tasks")
    .then(res => dispatch(getDataAction(res.data)))
    .catch(err => console.log(err))
}