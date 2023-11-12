import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCertificates } from '../../app/profile/getCertificates/getCertificatesThunkFunctions';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../app/auth/getUserInformationByJWT/getUserInfoByJWTThunkFunctions';
import avatarWomen from "../../assets/image/avatarWomen.png"
import avatarMen from "../../assets/image/avatarMen.png"

export default function FreelancerExamPage() {
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
      <div className='w-full min-h-screen bg-[#3A2244] py-10'>
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
                <img className='w-[70%]' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
            </div>
            <div style={{direction:"rtl"}} className='text-3xl text-white font-yekan mt-2 gap-1'>
                <p className='flex gap-1 items-center'>
                    <p>
                    {full_name}
                    </p>
                    <p>عزیز با کلیک بر روی لینک زیر میتوانید در آزمون فریلنسری دقت کنید</p>
                </p>
                <div className='w-full flex justify-center mt-10'>
                    <Link to={"/soon"}>
                        <p className='text-white bg-green-500 px-4 py-2 rounded-2xl'>
                            شرکت در آزمون فریلنسری
                        </p>
                    </Link>
                </div>
              <div className='w-full flex justify-center mt-10'>
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
