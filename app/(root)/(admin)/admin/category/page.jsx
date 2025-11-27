import BreadCrumb from '@/components/Application/admin/BreadCrumb';
import DatatableWrapper from '@/components/Application/admin/DatatableWrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ADMIN_CATEGORY_ADD, ADMIN_CATEGORY_SHOW, ADMIN_DASHBOARD, ADMIN_TRASH } from '@/routes/AdminPanelRoute';
import Link from 'next/link';
import React from 'react'
import { FiPlus } from 'react-icons/fi';


const breadcrumbData = [
  { href: ADMIN_DASHBOARD, label: "Home" },
  { href: ADMIN_CATEGORY_SHOW, label: "Category" },

];

const ShowCategory = () => {
  return (
    <div>
      <BreadCrumb breadcrumbData={breadcrumbData}  />
       <Card className="py-0 rounded shadow-sm">
        <CardHeader className="pt-3 py-2 px-3 border-b [.border-b]:py-2 ">
         <div className='flex justify-between items-center'>
          <h4 className='text-xl font-semibold'>Show Category</h4>
         <Button >
          <FiPlus/>
          <Link href={ADMIN_CATEGORY_ADD}>New Cattegory</Link>
         </Button>
         </div>
        </CardHeader>
        <CardContent className='pb-5'>
         <DatatableWrapper
         queryKey = "category-data"
         fetchUrl = '/api/category'
         intitialPageSize={10}
         columnsConfig={}
         exportEndPoint={'/api/category/export'}
         deleteEndPoint='/api/category/delete'
         deleteType="SD"
         trashView={`${ADMIN_TRASH}?.trashof=category`}
         createAction= {action}
         
         />
        </CardContent>
      </Card> 
    </div>
  )
}

export default ShowCategory
