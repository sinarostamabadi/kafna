import { createReducer } from "@reduxjs/toolkit";
import { getOtp } from "../getOtp/getOtpThunkFunctions";


let initialState={
    loading:false
}


export let signUpSlice=createReducer(initialState , (builder) => {
    builder
    .addCase(getOtp.pending , (state , action) => {
        state.loading=true;
    })
    .addCase(getOtp.fulfilled , (state , action) => {
        state.loading=false;
    })
})