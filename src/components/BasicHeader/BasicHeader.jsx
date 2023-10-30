import React from 'react'
import { Link } from 'react-router-dom'

export default function BasicHeader({color , logoImage , className}) {
  return (
    <div className="header w-full py-4 px-4 sm:px-custom-padding-x flex justify-between items-center">
                <div className={className}>
                    <ul className='flex gap-4 sm:gap-16'>
                        <li className={`text-xl sm:text-3xl ${color} font-yekan`}>
                            <Link to={"/about"}>
                                درباره ما
                            </Link>
                        </li>
                        <li className={`text-xl sm:text-3xl ${color} font-yekan`}>
                            <Link to={"/support"}>
                                پشتیبانی
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to={"/login"}>
                        <img className='w-20 sm:w-auto' src={logoImage} alt="" />
                    </Link>
                </div>
            </div>
  )
}
