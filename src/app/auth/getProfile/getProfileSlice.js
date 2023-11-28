import { createReducer } from '@reduxjs/toolkit';
import { getProfile } from './getProfileThunkFunctions';

let initialState={
    userInfo:{},
    loading:false
}



export let getProfileSlice=createReducer(initialState , (builder) => {
    builder
    .addCase(getProfile.pending , (state , action) => {
        state.loading=true;
    })
    .addCase(getProfile.fulfilled , (state , action) => {
        let {profile}=action.payload;

        state.userInfo=profile;
        state.loading=false;
    })
})