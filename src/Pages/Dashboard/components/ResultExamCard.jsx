import React, { useEffect } from 'react'
import { MdOutlineDone } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';
import { HiOutlineLockOpen } from "react-icons/hi";
import { getCertificates } from '../../../app/profile/getCertificates/getCertificatesThunkFunctions';
import { useDispatch, useSelector } from 'react-redux';
import { TbFaceIdError } from "react-icons/tb";
import { IoHappyOutline } from "react-icons/io5";
import { PiSmileySad } from "react-icons/pi";


export default function ResultExamCard({status}) {
    // ----------store----------
    let {info:certificates , loading:certificateLoading}=useSelector(state => state.certificateSlice);
    let {userInfo , loading:userInfoLoading}=useSelector(state => state.getProfileSlice);

    console.log(userInfo);

    // ----------hooks----------
    let dispatch=useDispatch();

    // ----------lifecycle---------
    useEffect(() => {
        dispatch(getCertificates());
    } , []);

    if(certificates && !certificates.length) {
        return null;
    }

    if(certificates && certificates.length && certificates[0].mark==="F") {
        return (
            <Card className='w-full relative'>
            <div className='w-full flex justify-center'>
                <h5 className={`text-lg font-bold tracking-tight text-gray-900 font-yekan mt-2 ${status && "line-through"}`}>
                    شما در آزمون رد شده اید
                </h5>
            </div>
            <div className='w-full flex justify-center mt-2'>
                {!status &&
                <button className='px-4 py-2 rounded-lg bg-blue-600 text-white font-yekan'>
                <Link to={"/learn-more"}>
                    برای باز آموزی اینجا کلیک کنید
                </Link>
                </button>
                 }
            </div>

            <div className={`status p-[6px] rounded-xl bg-red-600 absolute top-0 -translate-y-[50%] left-[50%] -translate-x-[50%]`}>
                <PiSmileySad className='w-7 h-7 text-white' />
            </div>
        </Card>
        )
    }

    if(certificates && certificates.length && certificates[0].mark!=="F") {
        return (
            <>
            <Card className='w-full relative'>
            <div className='w-full flex justify-center text-center'>
                <h5 className={`text-lg font-bold tracking-tight text-gray-900 font-yekan mt-2 text-center${status && "line-through"}`}>
                    تبریک شما در آزمون قبول شده اید
                </h5>
            </div>
            <div className={`status p-[6px] rounded-xl bg-done-green absolute top-0 -translate-y-[50%] left-[50%] -translate-x-[50%]`}>
                <IoHappyOutline className='w-7 h-7 text-white' />
            </div>
            </Card>

            <Card className='w-full relative'>
            <div className='w-full flex justify-center text-center'>
                <h5 className={`text-lg font-bold tracking-tight text-gray-900 font-yekan mt-2 text-center${userInfo.profile.work_as && "line-through"}`}>
                    لطفا نوع کاربری خود را انتخاب کنید
                </h5>
            </div>
            <div className='w-full flex justify-center mt-2'>
                {!userInfo.profile.work_as &&
                <button className='lg:px-4 py-2 rounded-lg bg-blue-600 text-white font-yekan'>
                <Link to={"/role"}>
                    اینجا کلیک کنید
                </Link>
                </button>
                }
            </div>

            <div className={`status p-[6px] rounded-xl ${userInfo.profile.work_as ? "bg-done-green" : "bg-text-custom-gray"} absolute top-0 -translate-y-[50%] left-[50%] -translate-x-[50%]`}>
                {userInfo.profile.work_as ?
                <MdOutlineDone className='w-7 h-7 text-white' /> :
                <HiOutlineLockOpen className='w-7 h-7 text-white' />
                }
            </div>
            </Card>

            {/* <Card className='w-full relative'>
            <div className='w-full flex justify-center text-center'>
                <h5 className={`text-lg font-bold tracking-tight text-gray-900 font-yekan mt-2 text-center${status && "line-through"}`}>
                    لطفا مدارک خود را بار گذاری کنید
                </h5>
            </div>
            <div className='w-full flex justify-center mt-2'>
                {!userInfo.profile.work_as &&
                <button className='lg:px-4 py-2 rounded-lg bg-blue-600 text-white font-yekan'>
                <Link to={"/role"}>
                    اینجا کلیک کنید
                </Link>
                </button>
                }
            </div>

            <div className={`status p-[6px] rounded-xl ${userInfo.profile.work_as ? "bg-done-green" : "bg-text-custom-gray"} absolute top-0 -translate-y-[50%] left-[50%] -translate-x-[50%]`}>
                {userInfo.profile.work_as ?
                <MdOutlineDone className='w-7 h-7 text-white' /> :
                <HiOutlineLockOpen className='w-7 h-7 text-white' />
                }
            </div>
            </Card> */}
            </>
        )
    }
}
