"use client"
import useFetch from '@/hooks/useFetch'
import React from 'react'

const Filter = () => {
   
    const {data:categoryData} = useFetch('/api/category/get-category')
    const {data:sizeData} = useFetch('/api/product-variant/sizes')
    const {data:colorData} = useFetch('/api/product-variant/colors')


  return (
    <div>
      Filter
    </div>
  )
}

export default Filter
