"use client"
import React from 'react'
import { LayoutDashboard, Settings2,  UsersRound } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavLinks = () => {
    const pathname = usePathname()

    const links = [
        {lable:"Dashbaord",to:"/dashboard",icon:LayoutDashboard,claim:""},
        {lable:"Teams",to:"/dashboard/teams",icon:UsersRound,claim:""},
        {lable:"Integrations",to:"/dashboard/integrations",icon:Settings2,claim:""}
    ]

  return (
    <div className='pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs'>

        {
            links.map((nav,index)=>(
                <div className="" key={index}>
                <Link href={nav?.to} className={`flex ${pathname === nav?.to ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                 {React.createElement(nav?.icon, {size:16})}
                  {nav?.lable}
                </Link>
                </div>
            ))
        }
</div>
  )
}

export default NavLinks
