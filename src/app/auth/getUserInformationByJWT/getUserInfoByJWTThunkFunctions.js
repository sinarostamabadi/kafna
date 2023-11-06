import { createAsyncThunk } from "@reduxjs/toolkit"
import { actionTypes } from "./getUserInfoByJWTActionTypes"
import { client } from "../../../services/client/client";
import { api } from "../../../services/api/api";



export let getUserInfo=createAsyncThunk(actionTypes.getUserInfo , 
    async (params , thunkApi) => {
        let {jwt}=params;

        let response=await client.get(api.getUserInfo , {
            headers:`Authorization: Bearer ${jwt}`
        })

        if(response.status===200) {
            return {
                profile:response.data
            }
        }
    }
    )