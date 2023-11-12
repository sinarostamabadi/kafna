import { createReducer } from "@reduxjs/toolkit";
import { getCertificates } from "./getCertificatesThunkFunctions";

let initialState={
    info:{},
    loading:false
}



export let certificateSlice=createReducer(initialState , (builder) => {
    builder
    .addCase(getCertificates.pending , (state , action) => {
        state.loading=true;
    })
    .addCase(getCertificates.fulfilled , (state , action) => {
        let { certificates }=action.payload;

        state.info=certificates;
        state.loading=false;
    })
})