import { createReducer } from "@reduxjs/toolkit";
import { getQuestion } from "./getQuestionThunkFunctions";

let initialState={
    info:{},
    loading:false
}


export let questionSlice=createReducer(initialState , (builder) => {
    builder
    .addCase(getQuestion.pending , (state , action) => {
        state.loading=true;
    })
    .addCase(getQuestion.fulfilled , (state , action) => {
        let {questions}=action.payload;

        state.info=questions;
        state.loading=false;
    })
})