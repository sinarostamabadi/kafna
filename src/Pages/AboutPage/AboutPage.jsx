import React from 'react'
import about from "../../assets/image/about.png"
import BasicHeader from '../../components/BasicHeader/BasicHeader'
import whiteLogo from "../../assets/image/whiteLogo.png"
import { FiInstagram } from "react-icons/fi"
import { FaTelegramPlane , FaLinkedinIn } from "react-icons/fa"
import BasicFooter from '../../components/BasicFooter/BasicFooter'
import image1White from "../../assets/image/image1White.png"
import image2White from "../../assets/image/image2White.png"

export default function AboutPage() {
  return (
    <div style={{backgroundImage:`url(${about})`}} className='w-full h-screen bg-cover'>
        <BasicHeader logoImage={whiteLogo} className={"text-white"} />
        <div className='w-full px-4 sm:px-custom-padding-x mt-4 sm:mt-8 flex flex-col items-center sm:flex-row-reverse'>
            <div style={{direction:"rtl"}} className='w-full sm:w-2/3 py-6 text-center sm:text-right sm:px-6 border-b-4 sm:border-l-4 sm:border-b-0 border-white'>
                <p className='text-4xl sm:text-5xl text-white font-yekan'>درباره کافنا</p>
                <p className='text-base sm:text-lg text-white font-yekan mt-4'>
                اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود.
                </p>
            </div>
            <div style={{direction:"rtl"}} className='px-6 mt-4 sm:mt-0'>
                <p className='text-4xl sm:text-5xl text-white font-yekan'>تماس با ما</p>
                <div className='text-base sm:text-lg text-white font-yekan mt-4'>
                    <p>فـــروش  :   0263442434</p>
                    <p>پشتیبانی  :   0263442434</p>
                    <p>مدیـریت  :   0263442434</p>
                    <p>ایمیـــل  :   info@techtrip.ir</p>
                </div>
                <div className='w-full flex justify-between sm:justify-start gap-2 mt-4'>
                    <div className='p-1 rounded-xl bg-white'>
                        <FiInstagram className='w-7 h-7' />
                    </div>
                    <div className='p-1 rounded-xl bg-white'>
                        <FaTelegramPlane className='w-7 h-7' />
                    </div>
                    <div className='p-1 rounded-xl bg-white'>
                        <FaLinkedinIn className='w-7 h-7' />
                    </div>
                </div>
            </div>
        </div>
        <BasicFooter image1={image1White} image2={image2White} />
    </div>
  )
}
