import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({image , title , description , price}) {
  return (
    <Link to={"/soon"}>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img class="rounded-t-lg" src={image} alt="" />
            </a>
            <div style={{direction:"rtl"}} class="px-5 pb-5">
                <a href="#">
                    <h5 class="mb-2 text-lg font-bold tracking-tight font-yekan text-gray-900">{title}</h5>
                </a>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-semibold text-center mt-4 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <p> تومان </p>
                    {Number(price).toLocaleString()}
                </a>
            </div>
        </div>
    </Link>

  )
}
