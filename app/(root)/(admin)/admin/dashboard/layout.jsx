import AppSidebar from '@/components/Application/admin/AppSidebar'
import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <SidebarProvider>
            <AppSidebar/>
            <main> {children}</main>
        </SidebarProvider>
            
      
     
    </div>
  )
}

export default layout
