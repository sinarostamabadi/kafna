import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCertificates } from '../../app/profile/getCertificates/getCertificatesThunkFunctions';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../app/auth/getUserInformationByJWT/getUserInfoByJWTThunkFunctions';
import avatarWomen from "../../assets/image/avatarWomen.png"
import avatarMen from "../../assets/image/avatarMen.png"

export default function LearnMorePage() {
  let dispatch=useDispatch();

  let jwt=localStorage.getItem("jwt");
    useEffect(() => {
        dispatch(getUserInfo({
            jwt
        }))
    } , []);

    let {userInfo , loading:userInfoLoading}=useSelector(state => state.getProfileSlice);
    let {full_name , gender}=userInfo.profile;
    let {info:certificates , loading:certificateLoading}=useSelector(state => state.certificateSlice);

    
    return (
      <div className='w-full min-h-screen bg-[#3A2244] py-10'>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
                <img className='w-[70%]' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
            </div>
            <div style={{direction:"rtl"}} className='text-2xl lg:text-3xl px-4 lg:px-0 text-white font-yekan mt-2 gap-1'>
                <div style={{direction:"rtl"}}>
                <div className='text-2xl flex flex-col px-4 lg:px-0'>
                  <p className='mt-6 font-yekan' href="https://alborz.irannsr.org">از اینجا میتونی بیشتر یاد بگیری</p>
                  <div className='flex flex-col mt-4'>
                    <a target='_blank' href="https://7learn.com/">
                      7learn
                    </a>
                    <a target='_blank' href="https://sabzlearn.ir/">
                      sabzlearn
                    </a>
                    <a target='_blank' href="https://codewithmosh.com/">
                      mosh hamedani
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
}
