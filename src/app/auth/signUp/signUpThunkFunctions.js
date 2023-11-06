import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./signUpActionTypes";
import { client } from './../../../services/client/client';
import { api } from './../../../services/api/api';
import toast from "react-hot-toast";
import { getUserInfo } from "../getUserInformationByJWT/getUserInfoByJWTThunkFunctions";



export let signUp=createAsyncThunk(actionTypes.signUp , 
    async (params , thunkApi) => {
        let {values , navigate}=params;
        let response=await client.post(api.signup , values);

        if(response.status===201) {
            localStorage.setItem("jwt" , response.data.jwt);
            thunkApi.dispatch(getUserInfo({jwt:response.data.jwt}))
            navigate("/welcome");
        }
    }
    )