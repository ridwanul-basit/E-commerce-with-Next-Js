import useFetch from '@/hooks/useFetch'
import React, { use } from 'react'

const EditMedia = ({params}) => {
  const {id} = use(params)
  const {data : mediaData} = useFetch(`api/media/get/${id}`)

  return (
    <div>
      
    </div>
  )
}

export default EditMedia
