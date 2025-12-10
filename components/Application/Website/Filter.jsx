"use client"
import useFetch from '@/hooks/useFetch'
import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Filter = () => {
   
    const {data:categoryData} = useFetch('/api/category/get-category')
    const {data:sizeData} = useFetch('/api/product-variant/sizes')
    const {data:colorData} = useFetch('/api/product-variant/colors')


  return (
    <div>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default Filter
