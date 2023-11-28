import React from 'react'
import { Navbar } from 'flowbite-react';
import { Avatar, Dropdown } from 'flowbite-react';
import grayLogo from "../../../assets/image/grayLogo.png"
import { FaUser } from "react-icons/fa";



export default function DashboardHeader({profile}) {
  return (
    <Navbar fluid className='shadow-sm'>
      <Navbar.Brand>
        <img src={grayLogo} className="mr-3 h-9 sm:h-10" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold capitalize">kafna</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div>
                <FaUser className='w-7 h-7' />
            </div>
            // <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{profile && profile.full_name}</span>
            <span className="block truncate text-sm font-medium">{profile && profile.email}</span>
          </Dropdown.Header>
          <Dropdown.Item onClick={() => {
            localStorage.setItem("jwt" , "");
            location.reload();
          }}>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  )
}
