import React from 'react'

export default function BasicFooter({image1 , image2}) {
  return (
    <div className='w-fit flex justify-start p-4'>
        <div>
            <img src={image1} alt="" />
        </div>
        <div>
            <img src={image2} alt="" />
        </div>
    </div>
  )
}
