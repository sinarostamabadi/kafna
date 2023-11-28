import React, { useEffect } from 'react'
import BasicHeader from '../../components/BasicHeader/BasicHeader'
import BasicFooter from '../../components/BasicFooter/BasicFooter'
import whiteLogo from "../../assets/image/whiteLogo.png"
import image1White from "../../assets/image/image1White.png"
import image2White from "../../assets/image/image2White.png"
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '@chakra-ui/react'
import avatarWomen from "../../assets/image/avatarWomen.png"
import avatarMen from "../../assets/image/avatarMen.png"
import { getUserInfo } from '../../app/auth/getUserInformationByJWT/getUserInfoByJWTThunkFunctions'
import { Link } from 'react-router-dom'

export default function WelcomePage() {
    let dispatch=useDispatch();
    let jwt=localStorage.getItem("jwt");
    useEffect(() => {
        dispatch(getUserInfo({
            jwt
        }))
    } , []);

    let { loading , userInfo }=useSelector(state => state.getUserInfoByJWTSlice);
    let {full_name , gender}=userInfo;

  return (
    <>
    {loading ?
    <div className='w-full h-screen flex justify-center items-center'>
        <Spinner className='w-[50px] h-[50px]' />
    </div> :
    <div className='w-full min-h-screen bg-[#3A2244]'>
        <div className='min-h-screen flex flex-col justify-between'>
            <div>
                <BasicHeader logoImage={whiteLogo} className={"text-white"} />
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='flex justify-center'>
                        <img className='w-[90%]' src={gender==="FEMALE" ? avatarWomen : avatarMen} alt="" />
                    </div>
                    <div style={{direction:"rtl"}} className='text-4xl text-white font-yekan mt-2 flex gap-1'>
                        <p>
                            {full_name}
                        </p>
                        <p>
                            عزیز خوش اومدی
                        </p>
                    </div>
                    <div>
                        <Link to={"/choose-skill"}>
                            <button className='px-6 py-2 rounded-3xl bg-[#35CB00] text-2xl text-white font-yekan mt-2'>بریم کار رو شروع کنیم</button>
                        </Link>
                    </div>
                </div>
            </div>
            <BasicFooter image1={image1White} image2={image2White} />
        </div>
    </div>
    }
    </>
  )
}
