import { getOtpSlice } from "./auth/getOtp/getOtpSlice"
import { signUpSlice } from './auth/signUp/signUpSlice';
import { getUserInfoByJWTSlice } from './auth/getUserInformationByJWT/getUserInfoByJWTSlice';
import { getSkillsSlice } from './auth/getSkills/getSkillsSlice';
import { questionSlice } from './quiz/getQuestion/getQuestionSlice';
import { profileSlice } from './profile/getProfile/getProfileSlice';
import { certificateSlice } from './profile/getCertificates/getCertificatesSlice';
import { getProfileSlice } from './auth/getProfile/getProfileSlice';

export let reducer={
    getOtpSlice,
    signUpSlice,
    getUserInfoByJWTSlice,
    getSkillsSlice,
    questionSlice,
    profileSlice,
    certificateSlice,
    getProfileSlice
}