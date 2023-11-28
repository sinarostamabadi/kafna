import React, { useEffect } from 'react'
import DashboardHeader from './components/DashboardHeader';
import UserInfoCard from './components/UserInfoCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../app/auth/getProfile/getProfileThunkFunctions';
import { Button, Spinner } from 'flowbite-react';
import { getCertificates } from '../../app/profile/getCertificates/getCertificatesThunkFunctions';
import ResultExamCard from './components/ResultExamCard';
import { Banner } from 'flowbite-react';
import whiteLogo from "../../assets/image/whiteLogo.png"
import { Link } from 'react-router-dom';
import UserExamCard from './components/UserExamCard';

export default function Dashboard() {
    // ----------store----------
    let {userInfo , loading:userInfoLoading}=useSelector(state => state.getProfileSlice);
    let {info:certificates , loading:certificateLoading}=useSelector(state => state.certificateSlice);
    console.log(certificates);
    
    // ----------hooks----------
    let dispatch=useDispatch();

    // ----------lifecycle----------
    useEffect(() => {
        dispatch(getProfile());
        dispatch(getCertificates());
    } , [])


    if(userInfoLoading) {
        return <div className='w-full h-screen flex justify-center items-center'>
            <Spinner />
        </div>
    }
  return (
    <div>
        <DashboardHeader profile={userInfo.profile} />
        {/* <Banner>
            <div className='w-full p-4 flex flex-col md:flex-row-reverse justify-between items-center shadow-sm bg-text-custom-gray'>
                <div className='flex flex-row-reverse items-center gap-4 font-yekan text-center'>
                    <img className='w-12 h-12' src={whiteLogo} alt="" />
                    <p className='text-lg text-white'>
                        یه فروشگاه میخوای که کالا های دیجیتالی و که میخوای از اونجا بخری ؟
                    </p>
                </div>
                <div>
                    <button className='px-4 py-2 bg-white text-text-custom-gray font-yekan rounded-lg mt-4 md:mt-0'>
                        <Link to={"/shop"}>
                            ورود به فروشگاه کافنا
                        </Link> 
                    </button>
                </div>
            </div>
        </Banner> */}
        <div className='px-6 py-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10'>
            <UserInfoCard status={userInfo.profile} />
            <UserExamCard disabled={!userInfo.profile} status={certificates.length} certificates={certificates} />
            <ResultExamCard />
        </div>
    </div>
  )
}