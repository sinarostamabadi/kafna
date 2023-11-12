import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./getCertificatesActionTypes";
import { client } from "../../../services/client/client";
import { api } from "../../../services/api/api";



export let getCertificates=createAsyncThunk(actionTypes.getCertificates , 
    async (params , thunkApi) => {
        let response=await client.get(api.getCertificates , {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })

        if(response.status===200) {
            return {
                certificates:response.data
            }
        }
    }
    )