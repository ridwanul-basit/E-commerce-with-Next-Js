import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

const ModalMediaBlock = ({media,selecteMedia,setSelecteMedia,isMultiple}) => {
  return (
    <label htmlFor={media._id} className='border border-gray-200 dark:border-gray-800 relative group rounded overflow-hidden' >

      <div className='absolute top-2 left-2 z-20'> 
        <Checkbox id={media._id} checked={selecteMedia.find(m=> m._id === media._id ) ? true : false} />
      </div>

    </label>
  )
}

export default ModalMediaBlock
