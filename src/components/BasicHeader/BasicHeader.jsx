import React from 'react'
import { Link } from 'react-router-dom'

export default function BasicHeader({color , logoImage , className}) {
  return (
    <div className="header w-full py-4 px-custom-padding-x flex justify-between items-center">
                <div className={className}>
                    <ul className='flex gap-16'>
                        <li className={`text-3xl ${color} font-yekan`}>
                            <Link to={"/about"}>
                                درباره ما
                            </Link>
                        </li>
                        <li className={`text-3xl ${color} font-yekan`}>
                            <Link to={"/support"}>
                                پشتیبانی
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={logoImage} alt="" />
                </div>
            </div>
  )
}
