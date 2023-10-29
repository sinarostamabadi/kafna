import React, { useEffect, useId } from 'react'
import loginBg from "../../assets/image/loginBg.png"
import { Link } from 'react-router-dom'
import grayLogo from "../../assets/image/grayLogo.png"
import { useFormik } from 'formik'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha'
import BasicHeader from '../../components/BasicHeader/BasicHeader'
import BasicFooter from '../../components/BasicFooter/BasicFooter'
import image1White from "../../assets/image/image1White.png"
import image2White from "../../assets/image/image2White.png"

export default function LoginPage() {
    useEffect(() => {
        loadCaptchaEnginge(6)
    } , [])


    let {values , handleChange , handleSubmit , errors , handleBlur , touched}=useFormik({
        initialValues:{
            phoneNumber:"",
            confirmCode:"",
            otpCode:""
        }
    })

    let {phoneNumber , confirmCode , otpCode}=values;



  return (
    <div>
        <div style={{backgroundImage:`url(${loginBg})`}} className='w-full h-screen bg-top bg-no-repeat bg-cover'>
            <BasicHeader logoImage={grayLogo} className="text-text-custom-gray" />
            <div className='w-full flex mt-8 p-6 sm:p-0'>
                <div style={{direction:"rtl"}} className='w-full bg-white bg-opacity-60 rounded-lg sm:rounded-none sm:bg-inherit p-6 sm:p-0 flex justify-center sm:block sm:w-1/2'>
                    <form action="" className='w-full flex flex-col items-center sm:block'>
                        <div className='w-full sm:w-[370px] h-auto'>
                            <input value={phoneNumber} type="tel" placeholder='شماره تلفن خود را وارد کنید' name='phoneNumber' onChange={handleChange} onBlur={handleBlur}
                            className='w-full h-14 text-center rounded-2xl bg-white border-0 outline-none text-base placeholder:font-yekan placeholder:text-base'
                             />
                             <div style={{direction:"rtl"}} className={`text-sm text-red-700 font-yekan ${errors.phoneNumber ? "" : "opacity-0"}`}>{errors.phoneNumber ? errors.phoneNumber : "error"}</div>
                        </div>
                        <div className='w-full sm:w-auto'>
                        <div className='w-full sm:w-[370px] h-14 flex bg-white rounded-2xl overflow-hidden'>
                            <input type="text" className='w-full sm:w-auto px-2 border-none outline-none focus:outline-none focus:border-none ring-offset-0 focus:ring-offset-0 text-base placeholder:font-yekan placeholder:text-base' placeholder='کد تایید' />
                            <div className='w-full sm:w-full h-full flex justify-center items-center p-1'>
                                <LoadCanvasTemplateNoReload />
                            </div>
                        </div>
                        <div style={{direction:"rtl"}} className={`text-sm text-red-700 font-yekan ${errors.phoneNumber ? "" : "opacity-0"}`}>{errors.phoneNumber ? errors.phoneNumber : "error"}</div>
                        </div>
                        <div className='w-full sm:w-auto'>
                        <div className='w-full sm:w-[370px] h-14 flex bg-white rounded-2xl overflow-hidden'>
                            <input type="text" className='w-3/5 px-2 border-none outline-none focus:outline-none focus:border-none ring-offset-0 focus:ring-offset-0 text-base placeholder:font-yekan placeholder:text-base' placeholder='کد تایید' />
                            <div className='w-2/5 h-full flex justify-center items-center'>
                                <button className='w-full h-full text-white text-lg font-yekan bg-[#70e000]'>دریافت رمز</button>
                            </div>
                        </div>
                        <div style={{direction:"rtl"}} className={`text-sm text-red-700 font-yekan ${errors.phoneNumber ? "" : "opacity-0"}`}>{errors.phoneNumber ? errors.phoneNumber : "error"}</div>
                        </div>
                        <div className='w-full sm:w-[370px] h-14 rounded-2xl overflow-hidden'>
                            <button className='w-full h-full text-white text-xl font-yekan bg-[#707070]'>بزن بریم</button>
                        </div>
                    </form>
                </div>
            </div>
            <BasicFooter image1={image1White} image2={image2White} />
        </div>
    </div>
  )
}
