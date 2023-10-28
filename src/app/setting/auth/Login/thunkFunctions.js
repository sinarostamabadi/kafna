import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";


let getInformation=createAsyncThunk(actionTypes.getInformation , 
    async (params , thunkApi) => {
        let {phoneNumber}=params;

        
    }
    )