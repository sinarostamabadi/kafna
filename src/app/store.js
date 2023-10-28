import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

export let store=configureStore({
    reducer:reducer
});