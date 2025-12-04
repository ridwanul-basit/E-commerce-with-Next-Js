import { WEBSITE_HOME } from '@/routes/WebsiteRoute'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/assets/images/logo-black.png'
import { IoSearchOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";


const Header = () => {
  return (
    <div className='bg-white border-b lg:px-32 px-4'>
        <div className='flex justify-between items-center lg:py-5 py-3'>
            <Link href={WEBSITE_HOME} >
            <Image 
            src={logo}
            alt='logo'
            width={383}
            height={146}
            className='lg:w-32 w-24'
            />
            </Link>

            <div className='flex justify-between gap-20'>
                <nav>
                    <ul className='flex justify-between items-center gap-10 px-3 '>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={WEBSITE_HOME} className='block py-2'>
                            Home
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={WEBSITE_HOME} className='block py-2'>
                            About
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={WEBSITE_HOME} className='block py-2'>
                            Shop
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={WEBSITE_HOME} className='block py-2'>
                            T-shirt
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={WEBSITE_HOME} className='block py-2'>
                           Hoodies
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={WEBSITE_HOME} className='block py-2'>
                            Oversized
                            </Link>
                        </li>
                        <li className='text-gray-600 hover:text-primary hover:font-semibold'>
                            <Link href={WEBSITE_HOME} className='block py-2'>
                            T-shirt
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className='flex justify-between items-center gap-8'>
                 <button type='button'> 
                    <IoSearchOutline 
                    className='text-gray-500 hover:text-primary cursor-pointer'
                    size={25}
                    />
                 </button>
                 <button type='button'> 
                    <BsCart2 
                    className='text-gray-500 hover:text-primary cursor-pointer'
                    size={25}
                    />
                 </button>
                </div>

            </div>
        </div>
    
    </div>
  )
}

export default Header
