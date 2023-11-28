import React, { useState } from 'react'
import { MdOutlineDone } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TbProgress } from "react-icons/tb";
import { Card, Spinner } from 'flowbite-react';
import { HiOutlineLockOpen } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";
import { MdErrorOutline } from "react-icons/md";
import { client } from '../../../services/client/client';
import { api } from '../../../services/api/api';
import { getCertificates } from '../../../app/profile/getCertificates/getCertificatesThunkFunctions';
import { useDispatch } from 'react-redux';


export default function UserExamCard({disabled , status , certificates}) {
    const [loading , setLoading]=useState(false);


    let dispatch=useDispatch();


    async function removeHandler() {
        setLoading(true);
        let response=await client.delete(api.deleteSkill + certificates[0].id + "/" , {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`
            }
        })

        if(response.status===201) {
            setLoading(false);
            dispatch(getCertificates());
        }
    }

  return (
    <Card className='w-full relative'>
            <div className='w-full flex justify-center'>
                <h5 className={`text-lg font-bold tracking-tight ${disabled ? "text-gray-300" : "text-gray-900"} font-yekan mt-2`}>
                    انتخاب مهارت و آزمون
                </h5>
            </div>
            {!status &&
            <div className='w-full flex justify-center mt-2'>
                <button className={`px-4 py-2 rounded-lg ${disabled ? "bg-green-200" : "bg-[#70e000]"} text-lg text-white font-yekan`} disabled={disabled}>
                    {disabled ?
                    "اینجا کلیک کنید" :
                    <Link to={"/choose-skill"}>
                        اینجا کلیک کنید
                    </Link>
                    }
                </button>
            </div>
            }
            {status ?
            <div style={{direction:"rtl"}} className='w-full flex flex-col justify-center items-center mt-2 font-yekan'>
            <div className='w-full flex justify-between items-center font-yekan mt-2'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='pb-1 border-b border-gray-200'>
                        مهارت
                    </div>
                    <div className='mt-1'>
                        {certificates[0].skill && certificates[0].skill.name}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='pb-1 border-b border-gray-200'>
                        نمره
                    </div>
                    <div className='mt-1'>
                        {certificates[0].percentage}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='pb-1 border-b border-gray-200'>
                        وضعیت
                    </div>
                    <div className='mt-1'>
                        {certificates[0].mark}
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center mt-4'>
                <button onClick={() => removeHandler()} className='px-4 py-2 rounded-xl text-white bg-red-600'>
                    {loading ?
                    <Spinner /> :
                    "پاک کردن آزمون"
                    }
                </button>
            </div>
            </div> :
            <div></div>
            }

            <div className={`status p-[6px] rounded-xl ${disabled ? "bg-text-custom-gray" : status ? certificates[0].mark==="F" ? "bg-red-600" : "bg-done-green" : "bg-text-custom-gray"} absolute top-0 -translate-y-[50%] left-[50%] -translate-x-[50%]`}>
                {disabled ?
                <HiOutlineLockClosed className='w-7 h-7 text-white' /> :
                status ? certificates[0].mark==="F" ? <MdErrorOutline className='w-7 h-7 text-white' /> :<MdOutlineDone className='w-7 h-7 text-white' /> :<HiOutlineLockOpen className='w-7 h-7 text-white' />
                }
            </div>
        </Card>
  )
}
