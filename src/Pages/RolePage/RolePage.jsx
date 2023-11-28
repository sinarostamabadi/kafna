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
import { baseUrl } from '../../services/baseUrl';

export default function RolePage() {
    const [submitLoading , setSubmitLoading]=useState(false);
    let jwt=localStorage.getItem("jwt");
    let dispatch=useDispatch();
    let navigate=useNavigate();
    const [loading , setLoading]=useState(false);

    useEffect(() => {
        dispatch(getSkills({jwt}));
        dispatch(getUserInfo({jwt}));
        dispatch(getProfile());
        dispatch(getCertificates());
    } , [])

    let {userInfo}=useSelector(state => state.getUserInfoByJWTSlice);
    let {info:profile , loading:profileLoading}=useSelector(state => state.profileSlice);
    let {info:certificates , loading:certificateLoading}=useSelector(state => state.certificateSlice);
    let {full_name , gender}=userInfo;

    console.log(certificates);


    let {values , handleChange , handleSubmit , errors , handleBlur , touched}=useFormik({
        initialValues:{
            work_as:""
        },
        validationSchema:Yup.object().shape({
            work_as:Yup.string().required("نوع کاربری خود را انتخاب کنید")
        }),
        onSubmit:async (values) => {
            setLoading(true);
            let response=await client.post(baseUrl+"/api/core/workas/" , {work_as:values.work_as} , {
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("jwt")}`
                }
            } );

            if(response.status===201) {
                navigate("/dashboard");
            }
        }
    })


  return (
    <div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-8'>
                    <div className='w-full lg:w-[75%] lg:pl-24 flex justify-center lg:block'>
                        <img className='w-[70%] lg:w-auto' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
                    </div>
                    <div className='w-full p-6 md:pr-36 md:pl-20'>
                        <form action="" className='w-full mt-10' onSubmit={handleSubmit}>
                            <div>
                                <select style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}} id='work_as' name='work_as' value={values.work_as} onChange={handleChange} onBlur={handleBlur}
                                className='w-full h-16 text-center text-lg lg:text-xl font-yekan bg-white rounded-3xl border-none px-1'
                                >
                                    <option value="" selected disabled>نوع کاری خود را انتخاب کنید</option>
                                    <option value="EMPLOYEE">می خواهم استخدام شوم</option>
                                    <option value="FREELANCER">می خواهم به عنوان آزاد کار فعالیت کنم</option>
                                </select>
                                <div style={{direction:"rtl"}} className={`text-sm text-red-500 font-yekan ${errors.work_as ? "opacity-100" : "opacity-0"}`}>{errors.work_as ? errors.work_as : "error"}</div>
                            </div>
                            <div className='w-full flex justify-center'>
                                <button type='submit' className='w-[60%] py-3 rounded-3xl bg-[#35CB00] text-2xl text-white font-yekan mt-2'>
                                    {
                                        loading ? 
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
