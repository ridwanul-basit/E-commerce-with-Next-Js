import BreadCrumb from '@/components/Application/admin/BreadCrumb'
import UploadMedia from '@/components/Application/admin/UploadMedia'
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
      <UploadMedia/>
    </div>
  )
}

export default MediaPage
