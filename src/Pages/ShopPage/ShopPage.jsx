import React from 'react'
import grayLogo from "../../assets/image/grayLogo.png"
import Card from './components/Card/Card'
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  return (
    <div className='w-full'>
        {/* <header className='shadow-sm'>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div class="flex items-center">
                <img src={grayLogo} class="mr-3 h-6 sm:h-9" alt="" />
                <span class="self-center text-xl font-semibold whitespace-nowrap capitalize">kafna shop</span>
            </div>
            <div class="flex items-center lg:order-2">
                <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </header> */}

<Navbar fluid className='shadow-sm sticky top-0'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={grayLogo} className="mr-3 h-9 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold capitalize">kafna shop</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='capitalize'>
            <Link to={"/"}>
                back to kafna
            </Link>
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

        <div className='w-full p-6 mt-4'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                <Card image={"https://dkstatics-public.digikala.com/digikala-products/bb9e4dc651e6ab3710c7bfcf6b552ecfa8178050_1692515948.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"}
                title={"لپ تاپ 14.5 اینچی ایسوس مدل ZenBook Pro Duo 14 UX8402ZE-M3026W-i7 16GB 1SSD"}
                price={"100100000"}
                 />
                <Card image={"https://dkstatics-public.digikala.com/digikala-products/15c2aa6c5e49c73c30a876730a3c151e4dda5e46_1677332503.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"}
                title={"لپ تاپ 15.6 اینچی اچ‌پی مدل Pavilion x360 15t-ER100-i5 8GB 1TB Iris Xe"}
                price={"46360000"}
                 />
                <Card image={"https://dkstatics-public.digikala.com/digikala-products/ebeda406cc0a142c05a11d19a18425ffc9ef19e7_1693913885.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"}
                title={"لپ تاپ 15.6 اینچی دل مدل Vostro 3520-i7 64GB 1SSD MX550 - کاستوم شده"}
                price={"47500000"}
                 />
                <Card image={"https://dkstatics-public.digikala.com/digikala-products/c58a49f0d5bf64daebcd2755e11efd916e8fd5c4_1695710326.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"}
                title={"لپ تاپ 15.6 اینچی ایسر مدل Aspire 3 A315-510P-3652-i3 4GB 512SSD - کاستوم شده"}
                price={"14400000"}
                 />
                <Card image={"https://dkstatics-public.digikala.com/digikala-products/48c8c09ab3a81567f0dc986d4abce4590bcc8759_1683705124.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"}
                title={"لپ تاپ 15.6 اینچی دل مدل Vostro 3510-i3 8GB 1HDD 256SSD Linux - کاستوم شده"}
                price={"19500000"}
                 />
                <Card image={"https://dkstatics-public.digikala.com/digikala-products/d8ef898a532ee095d6a1f7780baa79c8014e41fb_1683455790.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"}
                title={"لپ تاپ 15.6 اینچی ایسر مدل Aspire A315-23-R3PE-R5 8GB 1HDD VEGA 8 - کاستوم شده"}
                price={"24100000"}
                 />
                <Card image={"https://dkstatics-public.digikala.com/digikala-products/2459dc73d762eb1c0400733ecf286fe6921689e5_1677392904.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"}
                title={"لپ تاپ 14 اینچی اچ‌پی مدل Pavilion x360 14t-EK000-i5 8GB 1TB Iris Xe"}
                price={"46780000"}
                 />
                <Card image={"https://dkstatics-public.digikala.com/digikala-products/48c8c09ab3a81567f0dc986d4abce4590bcc8759_1686990869.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"}
                title={"لپ تاپ 15.6 اینچی دل مدل Vostro 3510-i3 8GB 256SSD Linux - کاستوم شده"}
                price={"17600000"}
                 />
            </div>
        </div>

        <footer class="bg-white shadow dark:bg-gray-800">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline capitalize">kafna</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
            </div>
        </footer>
    </div>
  )
}
