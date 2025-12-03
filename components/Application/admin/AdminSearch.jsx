import { Input } from '@/components/ui/input'
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const AdminSearch = () => {
  return (
    <div className='md:w-[350px]'>
        <div className='flex justify-between items-center relative'>
            <Input
            readOnly
            className='rounded-full cursor-pointer'
            placeholder='Search...'
            
            />
          <button type='button' className='absolute right-3 cursor-default'>
            <IoSearchSharp />
          </button>
        </div>
      
    </div>
  )
}

export default AdminSearch
