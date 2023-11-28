import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./signUpActionTypes";
import { client } from './../../../services/client/client';
import { api } from './../../../services/api/api';
import toast from "react-hot-toast";
import { getUserInfo } from "../getUserInformationByJWT/getUserInfoByJWTThunkFunctions";



export let signUp=createAsyncThunk(actionTypes.signUp , 
    async (params , thunkApi) => {
        let {values , navigate}=params;
        let response=await client.post(api.profile , values , {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        });

        if(response.status===201) {
            thunkApi.dispatch(getUserInfo({jwt:response.data.jwt}))
            navigate("/dashboard");
        }
    }
    )