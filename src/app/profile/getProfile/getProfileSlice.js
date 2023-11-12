import { createReducer } from "@reduxjs/toolkit";
import { getProfile } from "./getProfileThunkFunctions";


let initialState={
    info:{},
    loading:false
}





export let profileSlice=createReducer(initialState , (builder) => {
    builder
    .addCase(getProfile.pending , (state , action) => {
        state.loading=true;
    })
    .addCase(getProfile.fulfilled , (state , action) => {
        let {profile}=action.payload;

        state.info=profile;
        state.loading=false;
    })
})