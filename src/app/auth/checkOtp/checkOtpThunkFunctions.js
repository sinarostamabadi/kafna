import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../../services/client/client";
import { api } from "../../../services/api/api";
import toast from "react-hot-toast";
import { actionTypes } from "./checkOtpActionFunctions";



export let checkOtp=createAsyncThunk(actionTypes.checkOtp , 
    async (params , thunkApi) => {
        let {phoneNumber , otp , navigate}=params;
        try{
            let response=await client.post(api.checkotp , {phone_number:phoneNumber , code:otp})
            if(response.status===200) {
                let jwt=response.data.jwt;
                if(jwt) {
                    navigate("/");
                    localStorage.setItem("jwt" , jwt);
                } else if(!jwt) {
                    toast.error("شما در سایت ثبت نام نکرده اید");
                }
            }
        } catch(err) {
            toast.error("کد اشتباه میباشد");
        }

    }
    )