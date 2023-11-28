import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../app/auth/getUserInformationByJWT/getUserInfoByJWTThunkFunctions';
import avatarWomen from "../../assets/image/avatarWomen.png"
import avatarMen from "../../assets/image/avatarMen.png"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getSkills } from '../../app/auth/getSkills/getSkillsThunkFunctions';
import BasicHeader from '../../components/BasicHeader/BasicHeader';
import grayLogo from "../../assets/image/grayLogo.png"
import BasicFooter from '../../components/BasicFooter/BasicFooter';
import image1Gray from "../../assets/image/image1Gray.png"
import image2Gray from "../../assets/image/image2Gray.png"
import { client } from '../../services/client/client';
import { api } from '../../services/api/api';
import { Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../../app/profile/getProfile/getProfileThunkFunctions';
import { getCertificates } from '../../app/profile/getCertificates/getCertificatesThunkFunctions';

export default function ChooseSkillPage() {
    const [submitLoading , setSubmitLoading]=useState(false);
    let jwt=localStorage.getItem("jwt");
    let dispatch=useDispatch();
    let navigate=useNavigate();

    useEffect(() => {
        dispatch(getSkills({jwt}));
        dispatch(getUserInfo({jwt}));
        dispatch(getProfile());
        dispatch(getCertificates());
    } , [])

    let {skills , loading}=useSelector(state => state.getSkillsSlice);
    let {userInfo , loading:userInfoLoading}=useSelector(state => state.getProfileSlice);
    let {info:profile , loading:profileLoading}=useSelector(state => state.profileSlice);
    let {info:certificates , loading:certificateLoading}=useSelector(state => state.certificateSlice);
    let {full_name , gender}=userInfo;

    console.log(certificates);


    let {values , handleChange , handleSubmit , errors , handleBlur , touched}=useFormik({
        initialValues:{
            skill:""
        },
        validationSchema:Yup.object().shape({
            skill:Yup.string().required("لطفا مهارت خود را انتخاب کنید")
        }),
        onSubmit:(values) => {
            setSubmitLoading(true);
            let id=skills.find((skill) => {
                return skill.name===values.skill
            }).id
            navigate(`/quiz/${id}`);
        }
    })


  return (
    <div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-8'>
                    <div className='w-full lg:w-[75%] lg:pl-24 flex justify-center lg:block'>
                        <img className='w-[70%] lg:w-auto' src={userInfo && userInfo.profile.gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
                    </div>
                    <div className='w-full p-6 md:pr-36 md:pl-20'>
                        <div>
                            <div style={{direction:"rtl"}} className='w-full p-4 border-b border-gray-200'>
                                <p className='text-2xl font-yekan'>مهارت های من</p>
                            </div>
                            {certificates.length &&certificates.map((cer) => {
                                return <div style={{direction:"rtl"}} className='w-full flex justify-between font-yekan py-6 border-b border-gray-200'>
                                            <div>
                                                {cer.skill.name}
                                            </div>
                                            <div>
                                                نمره:{cer.percentage}
                                            </div>
                                            <div>
                                                وضعیت:{cer.mark}
                                            </div>
                                        </div>
                            })}
                        </div>
                        <form action="" className='w-full mt-10' onSubmit={handleSubmit}>
                            <div>
                                <select style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}} id='skill' name='skill' value={values.skill} onChange={handleChange} onBlur={handleBlur}
                                className='w-full h-16 text-center text-lg lg:text-xl font-yekan bg-white rounded-3xl border-none px-1'
                                >
                                    <option value="" selected disabled>مهارت خود را انتخاب کنید</option>
                                    {skills.map((skill) => {
                                        return <option value={skill.name}>{skill.name}</option>
                                    })}
                                </select>
                                <div style={{direction:"rtl"}} className={`text-sm text-red-500 font-yekan ${errors.skill ? "opacity-100" : "opacity-0"}`}>{errors.skill ? errors.skill : "error"}</div>
                            </div>
                            <div className='w-full flex justify-center'>
                                <button type='submit' className='w-[60%] py-3 rounded-3xl bg-[#35CB00] text-2xl text-white font-yekan mt-2'>
                                    {
                                        submitLoading ? 
                                        <div className='w-full h-full flex justify-center items-center'>
                                            <Spinner className='w-7 h-7' />
                                        </div>
                                        :
                                        <p>
                                            بریم مرحله ی بعد
                                        </p>
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
        </div>
    </div>
  )
}
