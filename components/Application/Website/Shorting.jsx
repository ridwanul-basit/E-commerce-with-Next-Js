import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Shorting = ({limit,setLimit,sorting,setSorting,mobileFilterOpen,setMobileFilterOpen}) => {
  return (
    <div className='flex justify-between items-center flex-wrap gap-2 p-4 bg-gray-50'>
      <ul className='flex items-center gap-4'>
        <li className='font-semibold '>Show</li>
        {[9,12,18,24].map(limitNumber=>(
            <li key={limitNumber} >
                <button type='button' onClick={()=> setLimit(limitNumber)} className={`${limitNumber === limit ? 'w-8 h-8 flex justify-center items-center rounded-full bg-primary text-white text-sm' : ''}`} >
                     {limitNumber}
                </button>
            </li>
        ))}
      </ul>

      <Select>
  <SelectTrigger className='md:w-[180px] w-full bg-white' >
    <SelectValue placeholder="Default Sorting" />
  </SelectTrigger>
  <SelectContent>
    sortings
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
     
    </div>
  )
}

export default Shorting
