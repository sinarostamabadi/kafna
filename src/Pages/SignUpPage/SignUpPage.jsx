import React, { useState } from 'react'
import BasicHeader from '../../components/BasicHeader/BasicHeader'
import grayLogo from "../../assets/image/grayLogo.png"
import image1Gray from "../../assets/image/image1Gray.png"
import image2Gray from "../../assets/image/image2Gray.png"
import BasicFooter from '../../components/BasicFooter/BasicFooter'
import { useFormik } from 'formik'
import avatarWomen from "../../assets/image/avatarWomen.png"
import avatarMen from "../../assets/image/avatarMen.png"

export default function SignUpPage() {
    let [values , setValues]=useState({
        type:"",
        education:"",
        gender:""
    })

    let {type , education , gender}=values;


    function handleChange(event) {
        setValues({...values,
            [event.target.name]:event.target.value
        })
    }



  return (
    <div className='w-full h-screen bg-white'>
        <BasicHeader logoImage={grayLogo} className={"text-text-custom-gray"} />
        <div className='h-[calc(100vh-122px)] flex flex-col justify-between'>
            {/* <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-8'>
                <div className='w-full lg:w-[75%] lg:pl-24 flex justify-center lg:block'>
                    <img className='w-[70%] lg:w-auto' src={gender==="women" ? avatarWomen : avatarMen} alt="" />
                </div>
                <div className='w-full flex justify-center items-center p-6 md:pr-36 md:pl-20'>
                    <form action="" className='w-full'>
                        <div>
                            <select style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"}} value={type} onChange={handleChange} name="type" id="type"
                            className='w-full h-16 text-center text-lg lg:text-xl font-yekan bg-white rounded-3xl border-none px-1'
                            >
                                <option className='text-xl font-yekan' value="" selected disabled>نوع کاربری خود را انتخاب کنید</option>
                                <option className='text-xl font-yekan' value="intern">کارآموز</option>
                                <option className='text-xl font-yekan' value="job_seeker">کارجـو</option>
                            </select>
                        </div>
                        <div className='w-full mt-6'>
                            <div className='w-full grid grid-cols-3'>
                                <div onClick={() => setValues({...values , education:"UNI"})} 
                                className={`h-12 ${education==="UNI" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} rounded-l-3xl flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>دانشجو</p>
                                </div>
                                <div onClick={() => setValues({...values , education:"ART"})}
                                className={`h-12 ${education==="ART" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} border-x border-gray-200 flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>هنرستان</p>
                                </div>
                                <div onClick={() => setValues({...values , education:"HS"})}
                                className={`h-12 ${education==="HS" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} rounded-r-3xl flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>دبیرستان</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mt-6 px-20'>
                            <div className='w-full grid grid-cols-2'>
                                <div onClick={() => setValues({...values , gender:"men"})} 
                                className={`h-12 ${gender==="men" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} rounded-l-3xl flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>پسر</p>
                                </div>
                                <div onClick={() => setValues({...values , gender:"women"})}
                                className={`h-12 ${gender==="women" ? "bg-text-custom-gray text-white" : "bg-[#F2F2F2] text-gray-500"} rounded-r-3xl border-l border-gray-200 flex justify-center items-center cursor-pointer`}>
                                    <p className='text-lg font-yekan'>دختر</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full mt-6'>
                            <button className='w-full h-12 lg:h-14 rounded-3xl bg-[#35CB00] text-2xl text-white font-yekan'>برو مرحله بعد</button>
                        </div>
                    </form>
                </div>
            </div> */}


            <div className='w-full grid grid-cols-2 mt-8'>
                <div className='w-full px-36 flex flex-col justify-start items-center'>
                    <img className='w-[80%]' src={gender==="women" ? avatarWomen : avatarMen} alt="" />
                    <div className='w-[60%] mt-6'>
                        <button className='w-full h-14 rounded-3xl bg-[#35CB00] text-2xl text-white font-yekan'>برو مرحله بعد</button>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center pr-custom-padding-x'>
                    <form style={{direction:"rtl"}} action="" className='w-full h-full grid grid-cols-2 grid-rows-5 gap-x-4 gap-y-1'>
                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">نام و نام خانوادگی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">رشته تحصیلی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">ایمیل</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">کد دانشجویی/ دانش آموزی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">کد ملی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">شماره تماس والدین</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">تاریخ تولد</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">نام موسسه ی آموزشی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">آخرین مقطع تحصیلی</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <label className='text-base font-yekan' htmlFor="">رمز ورود</label>
                            <input style={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}} type="text" 
                            className='w-full h-full rounded-3xl bg-white px-2 text-base font-yekan'
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-fit flex justify-start p-4'>
            <div>
                <img src={image1Gray} alt="" />
            </div>
            <div>
                <img src={image2Gray} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}