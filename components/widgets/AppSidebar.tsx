import React from 'react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { StudioSidebarMenu } from '@/lib/constants'
import Link from 'next/link'
import { LucideProps } from 'lucide-react'

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {StudioSidebarMenu.map((menu: StudioSidebarMenu) => {
                const SidebarIcon = menu.icon;
                return (
                  <SidebarMenuItem key={menu.title}>
                    <SidebarMenuButton asChild>
                      <Link href={menu.url}>
                        <SidebarIcon className='w-5 h-5 text-neutral-700'/>
                        <span className=''>{menu.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar