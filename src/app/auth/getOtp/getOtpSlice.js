import { createReducer } from "@reduxjs/toolkit";
import { getOtp } from "./getOtpThunkFunctions";

let initialState={
    loading:false
}

export let getOtpSlice=createReducer(initialState , (builder) => {
    builder
    .addCase(getOtp.pending , (state , action) => {
        state.loading=true;
    })
    .addCase(getOtp.fulfilled , (state , action) => {
        state.loading=false;
    })
})