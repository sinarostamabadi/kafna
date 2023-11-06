import { createReducer } from "@reduxjs/toolkit";
import { getSkills } from "./getSkillsThunkFunctions";


let initialState={
    skills:[],
    loading:false
}


export let getSkillsSlice=createReducer(initialState , (builder) => {
    builder
    .addCase(getSkills.pending , (state , action) => {
        state.loading=false;
    })
    .addCase(getSkills.fulfilled , (state , action) => {
        let { skills }=action.payload;

        state.skills=skills;
        state.loading=false;
    })
})