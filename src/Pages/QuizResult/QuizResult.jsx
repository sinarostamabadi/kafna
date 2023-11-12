import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCertificates } from '../../app/profile/getCertificates/getCertificatesThunkFunctions';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../app/auth/getUserInformationByJWT/getUserInfoByJWTThunkFunctions';
import avatarWomen from "../../assets/image/avatarWomen.png"
import avatarMen from "../../assets/image/avatarMen.png"

export default function QuizResult() {
  let dispatch=useDispatch();

  let jwt=localStorage.getItem("jwt");
    useEffect(() => {
        dispatch(getUserInfo({
            jwt
        }))
    } , []);

    let { loading , userInfo }=useSelector(state => state.getUserInfoByJWTSlice);
    let {full_name , gender}=userInfo;
    let {info:certificates , loading:certificateLoading}=useSelector(state => state.certificateSlice);

  useEffect(() => {
    dispatch(getCertificates());
  } , [])
  if(certificates.length && certificates[0].mark==="F") {
    return (
      <div className='w-full min-h-screen bg-[#3A2244] py-6'>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
                <img className='w-[75%]' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
            </div>
            <div style={{direction:"rtl"}} className='text-2xl lg:text-3xl text-white font-yekan mt-2 gap-1'>
                <p className='flex gap-1 items-center'>
                    <p>
                    {full_name}
                    </p>
                    <p>شما در آزمون قبول شده اید</p>
                </p>
                <div style={{direction:"rtl"}}>
                <div className='flex flex-col text-xl lg:text-2xl px-4 lg:px-0'>
                  <a target='_blank' className='mt-6 font-yekan' href="https://alborz.irannsr.org">سامانه نظام صنفی رایانه</a>
                  <a target='_blank' className='block font-yekan mt-6' href="https://mojavez.ir">درگاه ملی مجوز</a>
                  <div className='w-full flex justify-center mt-10'>
                    <Link to={"/shop"}>
                        <p className='bg-white text-text-custom-gray px-4 py-2 rounded-2xl'>
                            فروشگاه لوازم دیجیتال کافنا
                        </p>
                    </Link>
                  </div>
                  <div className='w-full flex justify-center mt-4'>
                      <Link to={"/role"}>
                          <button className='px-10 py-2 rounded-3xl bg-[#35CB00] text-2xl text-white font-yekan mt-2'>ادامه</button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
  } else {
    return (
      <div className='w-full bg-[#3A2244] py-10'>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
                <img className='w-[90%]' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
            </div>
            <div style={{direction:"rtl"}} className='text-3xl text-white font-yekan mt-2 gap-1'>
                <p className='flex gap-1 items-center'>
                    <p>
                    {full_name}
                    </p>
                    <p>شما در آزمون رد شده اید</p>
                </p>
                <div style={{direction:"rtl"}}>
                <div className='flex flex-col'>
                  <p className='mt-6 font-yekan' href="https://alborz.irannsr.org">از اینجا میتونی بیشتر یاد بگیری</p>
                  <div>
                    <a href="https://7learn.com/">
                      7learn
                    </a>
                    <a href="https://sabzlearn.ir/">
                      sabzlearn
                    </a>
                    <a href="https://codewithmosh.com/">
                      mosh hamedani
                    </a>
                  </div>
                  <Link to={"/choose-skill"}>
                    <p className='mt-10 text-3xl font-yekan'>
                      برگشت به صفحه ی مهارت ها
                    </p>
                  </Link>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
  }
}
