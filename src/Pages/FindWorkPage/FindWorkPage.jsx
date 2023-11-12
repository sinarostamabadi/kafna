import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCertificates } from '../../app/profile/getCertificates/getCertificatesThunkFunctions';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../app/auth/getUserInformationByJWT/getUserInfoByJWTThunkFunctions';
import avatarWomen from "../../assets/image/avatarWomen.png"
import avatarMen from "../../assets/image/avatarMen.png"


export default function FindWork() {
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
    return (
      <div className='w-full h-screen bg-[#3A2244] py-10'>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
                <img className='w-[70%]' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
            </div>
            <div style={{direction:"rtl"}} className='text-2xl lg:text-3xl text-white font-yekan mt-2 gap-1'>
                <p className='flex gap-1 items-center px-4'>
                    <p>
                        {full_name + " "}
                        عزیز با کلیک بر روی لینک های زیر می توانید موقعیت های مناسب خود را پیدا کنید
                    </p>
                </p>
                <div style={{direction:"rtl"}}>
                <div className='flex flex-col px-4 lg:px-0'>
                    <a className='mt-4' target='_blank' href="https://jobinja.ir/">jobinja</a>
                    <a className='mt-4' target='_blank' href="https://jobvision.ir/">jobvision</a>
                    <a className='mt-4' target='_blank' href="">sanjob</a>
                </div>
              </div>
              <div className='w-full flex justify-center mt-6'>
                <Link to={"/shop"}>
                    <p className='bg-white text-text-custom-gray px-4 py-2 rounded-2xl'>
                        فروشگاه لوازم دیجیتال کافنا
                    </p>
                </Link>
              </div>
            </div>
        </div>
    </div>
    )
}
