import AppSidebar from '@/components/Application/admin/AppSidebar'
import TopBar from '@/components/Application/admin/TopBar'
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <SidebarProvider>
            <AppSidebar/>
            <main className='md:w-[calc(100vw-16rem)]'> 
              <div className='pt-[70px] px-5 min-h-[calc(100vh-40px)] pb-10 '>
                <TopBar/>
                {children}
              </div>
              
              <div className='border-t border-gray-300  h-[40px] flex justify-center items-center bg-gray-50 dark:bg-background text-sm '>
                    © 2025 Developed by Ridwanul Basit. All rights Reserved
              </div>
              </main>
        </SidebarProvider>
            
      
     
    </div>
  )
}

export default layout
