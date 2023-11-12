import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./getQuestionActionTypes";
import { client } from "../../../services/client/client";
import { api } from "../../../services/api/api";


export let getQuestion=createAsyncThunk(actionTypes.getQuestion , 
    async (params , thunkApi) => {
        let {skillId}=params;
        let response=await client.post(api.getQuestion + skillId + "/" , {} , {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        });

        return {
            questions:response.data
        }
    }
    )