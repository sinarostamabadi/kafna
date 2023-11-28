import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TbProgress } from "react-icons/tb";
import { Card } from 'flowbite-react';
import { HiOutlineLockOpen } from "react-icons/hi";
import { HiOutlineLockClosed } from "react-icons/hi";


export default function UserInfoCard({status}) {
  return (
    <Card className='w-full relative'>
            <div className='w-full flex justify-center'>
                <h5 className={`text-lg font-bold tracking-tight text-gray-900 font-yekan mt-2`}>
                    اول بیا اطلاعاتت و تکمیل کن
                </h5>
            </div>
            <div className='w-full flex justify-center mt-2'>
                {!status &&
                <button className='px-4 text-lg py-2 rounded-lg bg-[#70e000] text-white font-yekan'>
                <Link to={"/sign-up"}>
                    اینجا کلیک کنید
                </Link>
                </button>
                 }
            </div>

            <div className={`status p-[6px] rounded-xl ${status ? "bg-done-green" : "bg-text-custom-gray"} absolute top-0 -translate-y-[50%] left-[50%] -translate-x-[50%]`}>
                {status ?
                <MdOutlineDone className='w-7 h-7 text-white' /> :
                <HiOutlineLockOpen className='w-7 h-7 text-white' />
                }
            </div>
        </Card>
  )
}
