import { createReducer } from "@reduxjs/toolkit";
import { getUserInfo } from "./getUserInfoByJWTThunkFunctions";


let initialState={
    userInfo:{},
    loading:false
}


export let getUserInfoByJWTSlice=createReducer(initialState , (builder) => {
    builder.addCase(getUserInfo.pending , (state , action) => {
        state.loading=true;
    })
    .addCase(getUserInfo.fulfilled , (state , action) => {
        let {profile}=action.payload;

        state.userInfo=profile;
        state.loading=false;
    })
})