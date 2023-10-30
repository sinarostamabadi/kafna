import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./getOtpActionTypes";
import { client } from "../../../services/client/client";
import { api } from "../../../services/api/api";
import toast from "react-hot-toast";



export let getOtp=createAsyncThunk(actionTypes.getOtp , 
    async (params , thunkApi) => {
        let { phoneNumber }=params;
        let response=await client.post(api.getOtp , {phone_number:phoneNumber});

        if(response.status===200) {
            toast.success("کد تایید برای شما ارسال شد")
            localStorage.setItem("phoneNumber" , phoneNumber);
        } else {
            toast.error("مشکلی به وجود آمده است")
        }
    }
    )