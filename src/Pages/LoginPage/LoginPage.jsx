import React, { useCallback, useEffect, useId, useState } from 'react'
import loginBg1 from "../../assets/image/loginBg1.png"
import { Link, useNavigate } from 'react-router-dom'
import grayLogo from "../../assets/image/grayLogo.png"
import { useFormik } from 'formik'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha'
import BasicHeader from '../../components/BasicHeader/BasicHeader'
import BasicFooter from '../../components/BasicFooter/BasicFooter'
import image1White from "../../assets/image/image1White.png"
import image2White from "../../assets/image/image2White.png"
import { useDispatch, useSelector } from 'react-redux'
import { getOtp } from '../../app/auth/getOtp/getOtpThunkFunctions'
import { Spinner } from '@chakra-ui/react'
import { checkOtp } from '../../app/auth/checkOtp/checkOtpThunkFunctions'
import { Toaster } from 'react-hot-toast'
import { Card } from 'flowbite-react';



export default function LoginPage() {

    const reg = new RegExp('^[0-9]+$');
    const [receiveCode , setReceiveCode]=useState(false);

    let dispatch=useDispatch();
    let navigate=useNavigate();

    let {loading}=useSelector(state => state.getOtpSlice);

    let {values , handleChange , handleSubmit , errors , handleBlur , touched}=useFormik({
        initialValues:{
            phone_number:"",
            confirmCode:"",
            code:""
        },
        validate:(values) => {
            let errors={};
            if(!reg.test(values.phone_number) || values.phone_number.length<=10) {
                errors.phone_number="شماره تلفن باید 11 رقم و فقط شامل عدد باشد"
            }
            if(!values.phone_number) {
                errors.phone_number="شماره تلفن را وارد کنید"
            }
            // if(!validateCaptcha(values.confirmCode)) {
            //     errors.confirmCode="کد تایید را به درستی وارد کنید"
            // }

            if(!values.code && receiveCode) {
                errors.code="کد تایید را وارد کنید"
            }

            return errors;
        }
        ,onSubmit:(values) => {
            setReceiveCode(true);
            dispatch(checkOtp({
            phoneNumber:values.phone_number,
            otp:values.code,
            navigate
        }))
        }
    })

    let {phone_number , confirmCode , code}=values;


    function getOtpFunc(phoneNumber) {
        if(!errors.phone_number && values.phone_number) {
            dispatch(getOtp({phoneNumber}))
        }
    }


  return (
    <div>
        <div style={{backgroundImage:`url(${loginBg1})`}} className='w-full h-screen bg-right bg-no-repeat bg-cover'>
            <div className='min-h-screen flex flex-col justify-between'>
            <div>
            <BasicHeader logoImage={grayLogo} className="text-text-custom-gray" />
            <div className='w-full flex mt-8 p-6 sm:p-0'>
                <div style={{direction:"rtl"}} className='w-full bg-white bg-opacity-60 rounded-lg sm:rounded-none sm:bg-inherit p-6 sm:p-0 justify-center sm:block sm:w-1/2'>
                    <form action="" onSubmit={handleSubmit} className='w-full flex flex-col items-center sm:block'>
                        <div className='w-full sm:w-[370px] h-auto'>
                            <input value={phone_number} type="tel" placeholder='شماره تلفن خود را وارد کنید' name="phone_number" onChange={handleChange} onBlur={handleBlur}
                            className='w-full h-14 text-center rounded-2xl bg-white border-0 outline-none text-base placeholder:font-yekan placeholder:text-base'
                             />
                             <div style={{direction:"rtl"}} className={`text-sm text-red-500 font-yekan ${errors.phone_number && touched.phone_number ? "" : "opacity-0"}`}>{errors.phone_number ? errors.phone_number : "error"}</div>
                        </div>
                        {/* <div className='w-full sm:w-auto'>
                        <div className='w-full sm:w-[370px] h-14 flex bg-white rounded-2xl overflow-hidden'>
                            <input name='confirmCode' value={confirmCode} onChange={handleChange} onBlur={handleBlur} type="text" className='w-full sm:w-auto px-2 border-none outline-none focus:outline-none focus:border-none ring-offset-0 focus:ring-offset-0 text-base placeholder:font-yekan placeholder:text-base' placeholder='کد تایید' />
                            <div className='w-full sm:w-full h-full flex justify-center items-center p-1'>
                                <LoadCanvasTemplateNoReload />
                            </div>
                        </div>
                        <div style={{direction:"rtl"}} className={`text-sm text-red-500 font-yekan ${errors.confirmCode && touched.confirmCode ? "" : "opacity-0"}`}>{errors.confirmCode ? errors.confirmCode : "error"}</div>
                        </div> */}
                        <div className='w-full sm:w-auto'>
                        <div className='w-full sm:w-[370px] h-14 flex bg-white rounded-2xl overflow-hidden'>
                            <input name="code" onChange={handleChange} onBlur={handleBlur} value={code} type="text" className='w-3/5 px-2 border-none outline-none focus:outline-none focus:border-none ring-offset-0 focus:ring-offset-0 text-base placeholder:font-yekan placeholder:text-base' placeholder='کد تایید' />
                            <div className='w-2/5 h-full flex justify-center items-center'>
                                <div onClick={() => getOtpFunc(phone_number)} className='w-full h-full flex justify-center items-center text-white text-lg font-yekan bg-[#70e000] cursor-pointer' disabled={loading}>
                                    <p>
                                    {loading ? <div className='flex justify-center items-center'><Spinner className='w-6 h-6' /></div> : "دریافت رمز"}
                                    </p>
                                    </div>
                            </div>
                        </div>
                        <div style={{direction:"rtl"}} className={`text-sm text-red-500 font-yekan ${errors.code && touched.code ? "" : "opacity-0"}`}>{errors.code ? errors.code : "error"}</div>
                        </div>
                        <div className='w-full sm:w-[370px] h-14 rounded-2xl overflow-hidden'>
                            <button type='submit' className='w-full h-full text-white text-xl font-yekan bg-[#707070]' disabled={loading}>بزن بریم</button>
                        </div>
                    </form>            
                </div>
            </div>
            </div>
            <BasicFooter image1={image1White} image2={image2White} />
            </div>
        </div>
        <Toaster />
    </div>
  )
}
