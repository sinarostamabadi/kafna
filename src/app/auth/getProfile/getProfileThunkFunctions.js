import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './getProfileActionTypes';
import { client } from '../../../services/client/client';
import { api } from '../../../services/api/api';


export let getProfile=createAsyncThunk(actionTypes.getProfile , 
    async(params , thunkApi) => {
        let response=await client.get(api.profile , {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        });

        if(response.status===200) {
            return {
                profile:response.data
            }
        }
    }
    )