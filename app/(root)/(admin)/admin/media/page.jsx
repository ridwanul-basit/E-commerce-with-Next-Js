'use client'
import BreadCrumb from '@/components/Application/admin/BreadCrumb'
import Media from '@/components/Application/admin/Media'
import UploadMedia from '@/components/Application/admin/UploadMedia'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ADMIN_DASHBOARD, ADMIN_MEDIA_SHOW } from '@/routes/AdminPanelRoute'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
// import React, { useState } from 'react'


    const breadcrumbData = [
        {href: ADMIN_DASHBOARD, label: 'Home' },
        {href: '', label: 'Media' },
    ]
const MediaPage = () => {

  const [deleteType,setdeleteType]= useState('SD')
  const [selectedMedia,setSelectedMedia]= useState([])

  
    const fetchMedia = async (page, deleteType) => {
    const { data } = await axios.get(
      `/api/media?page=${page}&limit=10&deleteType=${deleteType}`
    )
    return data
  }
  
      const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status
    } = useInfiniteQuery({
        queryKey: ['media-data',deleteType],
        queryFn: async ({ pageParam }) => fetchMedia(pageParam, deleteType),
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            const nextPage = pages.length
            return lastPage.hasMore ? nextPage : undefined
        }
    })

    const handleDelete = () =>{

    }



  return (
    <div>
      <BreadCrumb breadcrumbData={breadcrumbData}/>
      <Card className='py-0 rounded shadow-sm'>
        <CardHeader className='pt-3 py-2 px-3 border-b [.border-b]:py-2 '> 
            <div className='flex justify-between items-center'>
                <h4>Media</h4>
                <div className='flex items-center gap-5'>
                      <UploadMedia/>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            {status === 'pending' ? 
            <>
            <div>Loading...</div>
            </>
            :
            status === 'error' ?
            <div className='text-red-500 text-sm'>
              {error.message}

            </div>
            :
            <div className='grid lf:grid-cols-5 grid-cols-2 gap-2 mb-5'>
              {
                 data?.pages?.map( (page,index) => (
                  <React.Fragment key={index}>
                    {
                        page?.mediaData?.map((media)=>(
                          <Media key={media._id}
                          media={media}
                          handleDelete={handleDelete}
                          deleteType={deleteType}
                          selectedMedia={selectedMedia}
                          />
                        ))
                    }
                  </React.Fragment>
                 ))
              }
            </div>
            
          }
        </CardContent>
      </Card>
    </div>
  )
}
export default MediaPage
