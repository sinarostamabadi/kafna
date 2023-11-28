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
  if(certificates.length && certificates[0].mark!=="F") {
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
                  <Link>
                    <p className='text-xl lg:text-2xl mt-6 font-yekan'>
                      آپلود کارت ملی
                    </p>
                  </Link>
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
      <div className='w-full min-h-screen bg-[#3A2244] py-10'>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
                <img className='w-[70%]' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
            </div>
            <div style={{direction:"rtl"}} className='text-2xl lg:text-3xl px-4 lg:px-0 text-white font-yekan mt-2 gap-1'>
                <p className='flex gap-1'>
                    <p>
                    {full_name + " "}
                      شما در آزمون رد شده اید
                    </p>
                </p>
                <div style={{direction:"rtl"}}>
                <div className='text-xl flex flex-col px-4 lg:px-0'>
                  <p className='mt-6 font-yekan' href="https://alborz.irannsr.org">از اینجا میتونی بیشتر یاد بگیری</p>
                  <div className='w-full flex justify-center mt-6'>
                    <Link to={"/learn-more"}>
                      <p className='text-2xl px-6 py-3 text-text-custom-gray bg-green-400 rounded-2xl'>
                        سایت های باز آموزی
                      </p>
                    </Link>
                  </div>
                  <div className='w-full flex justify-center'>
                    <Link to={"/choose-skill"}>
                      <p className='px-6 py-2 text-text-custom-gray bg-white rounded-2xl mt-10 text-3xl font-yekan'>
                        برگشت به صفحه ی مهارت ها
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
  }
}
