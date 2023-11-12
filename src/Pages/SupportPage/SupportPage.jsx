import React from 'react'
import support from "../../assets/image/support.png"
import BasicHeader from '../../components/BasicHeader/BasicHeader'
import grayLogo from "../../assets/image/grayLogo.png"
import BasicFooter from '../../components/BasicFooter/BasicFooter'
import image1Gray from "../../assets/image/image1Gray.png"
import image2Gray from "../../assets/image/image2Gray.png"
import { useFormik } from 'formik'

export default function SupportPage() {




    let {values , handleChange , handleSubmit , errors , handleBlur , touched}=useFormik({
        initialValues:{
            message:"",
            name:"",
            email:"",
            phoneNumber:""
        }
    })


    let {message , name , email , phoneNumber}=values;


  return (
    <div style={{backgroundImage:`url(${support})`}} className='w-full h-screen bg-cover bg-no-repeat'>
        <BasicHeader logoImage={grayLogo} className={"text-text-custom-gray"} />
        <div className='w-full flex px-4 sm:px-0'>
            <div className='w-full sm:w-1/2 px-6 py-6 sm:py-0 mt-10 bg-white shadow-lg sm:shadow-none bg-opacity-40 rounded-xl sm:bg-inherit sm:rounded-none sm:bg-opacity-0 sm:mt-0 sm:pl-custom-padding-x sm:pr-20'>
                <form style={{direction:"rtl"}} action="" className='w-full'>
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="message" className='text-sm sm:text-base font-yekan'>
                        متن پیام پشتیبانی
                        </label>
                        <textarea value={message} onChange={handleChange} onBlur={handleBlur}
                        className='rounded-xl outline-none text-base font-yekan p-1 border-none'
                         name="message" id="message" cols="30" rows="6" placeholder='نوشتن پیام . . .'
                         >

                         </textarea>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-2 mt-2'>
                        <div className='w-auto flex flex-col'>
                            <label htmlFor="name" className='text-sm sm:text-base font-yekan'>
                            نام و نام خانوادگی
                            </label>
                            <input value={name} onChange={handleChange} onBlur={handleBlur} 
                            className='h-10 bg-white rounded-xl border-none'
                            type="text" name="name" id="name" />
                        </div>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="email" className='text-sm sm:text-base font-yekan'>
                            ایمیل
                            </label>
                            <input value={email} onChange={handleChange} onBlur={handleBlur}
                            className='h-10 bg-white rounded-xl border-none'
                            type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-2 gap-2 mt-2'>
                        <div className='w-full flex flex-col'>
                            <label htmlFor="phoneNumber" className='text-sm sm:text-base font-yekan'>
                                شماره تلفن
                            </label>
                            <input value={phoneNumber} onChange={handleChange} onBlur={handleBlur} 
                            className='h-10 bg-white rounded-xl border-none'
                            type="tel" name="phoneNumber" id="phoneNumber" />
                        </div>
                        <div className='w-full mt-6'>
                            <button className='w-full h-10 bg-[#35CB00] text-lg text-white font-yekan rounded-xl' type='submit'>ارسال پیام</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <BasicFooter image1={image1Gray} image2={image2Gray} />
    </div>
  )
}
