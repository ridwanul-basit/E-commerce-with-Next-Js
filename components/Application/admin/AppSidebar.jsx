import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import logoBlack from '@/public/assets/images/logo-black.png'
import logoWhite from '@/public/assets/images/logo-white.png'
import { Button } from "@/components/ui/button"
import { LuChevronRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { adminAppSidebarMenu } from "@/lib/adminSidebarMenu"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"

const AppSidebar = () => {
  return (
     <Sidebar>
        <SidebarHeader className='border-b h-14 p-0'>
            <div className="flex justify-between items-center px-4">
                <Image src={logoBlack.src} height={50} width={logoBlack.width} alt="Logo Dark" className="block dark:hidden h-[50px] w-auto " />
                <Image src={logoWhite.src} height={50} width={logoWhite.width} alt="Logo Light" className="hidden dark:block h-[50px] w-auto " />
                <Button type='button' size='icon'  >
                    <IoMdClose/>
                </Button>
            </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarMenu>
                {adminAppSidebarMenu.map((menu,index)=>(
                    <Collapsible key={index} className='group/collapsible'> 
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                        <SidebarMenuButton asChild>
                            <Link href={menu?.url}>
                            <menu.icon/>
                            {menu.title}
                            </Link>
                        </SidebarMenuButton>
                        </CollapsibleTrigger>
                    </SidebarMenuItem>
                    
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarContent>
        <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
