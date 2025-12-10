"use client"
import useFetch from '@/hooks/useFetch'
import React from 'react'

const Filter = () => {
   
    const {data:categoryData} = useFetch('/api/category/get-category')


  return (
    <div>
      Filter
    </div>
  )
}

export default Filter
