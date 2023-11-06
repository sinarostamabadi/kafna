import { getOtpSlice } from "./auth/getOtp/getOtpSlice"
import { signUpSlice } from './auth/signUp/signUpSlice';
import { getUserInfoByJWTSlice } from './auth/getUserInformationByJWT/getUserInfoByJWTSlice';
import { getSkillsSlice } from './auth/getSkills/getSkillsSlice';

export let reducer={
    getOtpSlice,
    signUpSlice,
    getUserInfoByJWTSlice,
    getSkillsSlice
}