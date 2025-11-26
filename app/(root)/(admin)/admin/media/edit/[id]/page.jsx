'use client'
import BreadCrumb from '@/components/Application/admin/BreadCrumb';
import useFetch from '@/hooks/useFetch'
import { ADMIN_DASHBOARD, ADMIN_MEDIA_SHOW } from '@/routes/AdminPanelRoute';
import React, { use } from 'react'

const breadcrumbData = [
  { href: ADMIN_DASHBOARD, label: "Home" },
  { href: ADMIN_MEDIA_SHOW, label: "Media" },
  { href: "", label: "Edit Media" },
];

const EditMedia = ({params}) => {
  const {id} = use(params)
  const {data : mediaData} = useFetch(`/api/media/get/${id}`)

  return (
    <div>
      <BreadCrumb breadcrumbData={breadcrumbData}/>
    </div>
  )
}

export default EditMedia
