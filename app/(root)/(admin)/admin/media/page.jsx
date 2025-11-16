import BreadCrumb from '@/components/Application/admin/BreadCrumb'
import UploadMedia from '@/components/Application/admin/UploadMedia'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ADMIN_DASHBOARD, ADMIN_MEDIA_SHOW } from '@/routes/AdminPanelRoute'
import React from 'react'

const MediaPage = () => {

    const breadcrumbData = [
        {href: ADMIN_DASHBOARD, label: 'Home' },
        {href: '', label: 'Media' },
    ]
  return (
    <div>
      <BreadCrumb breadcrumbData={breadcrumbData}/>
     
      <Card className=' py-0 rounded shadow-sm'>
        <CardHeader className='pt-3 py-2 px-3 border-b [.border-b]:py-2 '> 
            <div className='flex justify-between items-center'>
                <h4>Media</h4>
                <div className='flex items-center gap-5'>
                     <UploadMedia/>
                </div>

            </div>
        </CardHeader>
        <CardContent>

        </CardContent>
      </Card>
    </div>
  )
}

export default MediaPage
