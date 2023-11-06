import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./getSkillsActionTypes";
import { client } from "../../../services/client/client";
import { api } from "../../../services/api/api";



export let getSkills=createAsyncThunk(actionTypes.getSkills , 
    async (params , thunkApi) => {
        let {jwt}=params;
        let response=await client.get(api.getSkills , {
            headers:`Authorization: Bearer ${jwt}`
        });

        if(response.status===200) {
            return {
                skills:response.data
            }
        }
    }
    )