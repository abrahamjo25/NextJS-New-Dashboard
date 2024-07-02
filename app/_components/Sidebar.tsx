"use client"
import Image from 'next/image'
import ProfileImage from '../_components/assets/profile.png'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ArrowRight, Calendar, Folder, Headphones, LayoutDashboard, Notebook, Power, Settings2, Star, Timer, Triangle, UsersRound } from 'lucide-react'
import { signout } from '../_lib/actions/revenue'
export default async function Sidebar() {

    const pathname = usePathname()

    return (
        <div className='w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden'>
            <div className='w-full h-full bg-white border-r'>
                {/* logo */}
                <div className='p-4 md:p-6 flex cursor-pointer group items-center gap-2'>
                    <div className='h-10 outline outline-violet-300 w-10 flex items-center bg-gradient-to-br justify-center rounded-full from-violet-500 to-violet-400 text-white'>
                        <Triangle size={24} className='relative group-hover:scale-75 duration-200' />
                    </div>
                    <div>
                        <h1 className='text-sm font-bold text-gray-800'>Githr</h1>
                        <p className='text-xs text-gray-500 font-medium'>HR Management</p>
                    </div>
                </div>

                {/* section divider */}
                <hr className='bg-gray-400 mx-2' />

                {/* other section */}
                <div className='flex flex-col h-full justify-between'>
                    {/* top */}
                    <div className='pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs'>
                        <Link href={'/dashboard'} className={`flex ${pathname === '/dashboard/dashboard' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                            <LayoutDashboard size={16} />
                            Dashboard
                        </Link>

                        <Link href={'/dashboard/teams'} className={`flex ${pathname === '/dashboard/teams' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                            <UsersRound size={16} />
                            Teams
                        </Link>

                        <Link href={'/dashboard/integrations'} className={`flex ${pathname === '/dashboard/integrations' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                            <Settings2 size={16} />
                            Integrations
                        </Link>

                        <button disabled className={`flex ${pathname === '/dashboard/calendar' ? 'text-primary' : ''} hover:px-8 disabled:opacity-60 duration-200 px-6 py-2 items-center gap-2`}>
                            <Calendar size={16} />
                            Calendar
                        </button>

                        <button disabled className={`flex ${pathname === '/dashboard/timeoff' ? 'text-primary' : ''} hover:px-8 disabled:opacity-60 duration-200 px-6 py-2 items-center gap-2`}>
                            <Timer size={16} />
                            Time Off
                        </button>

                        <button disabled className={`flex ${pathname === '/dashboard/projects' ? 'text-primary' : ''} hover:px-8 disabled:opacity-60 duration-200 px-6 py-2 items-center gap-2`}>
                            <Folder size={16} />
                            Projects
                        </button>

                        <button disabled className={`flex ${pathname === '/dashboard/benefits' ? 'text-primary' : ''} hover:px-8 disabled:opacity-60 duration-200 px-6 py-2 items-center gap-2`}>
                            <Star size={16} />
                            Benefits
                        </button>

                        <button disabled className={`flex ${pathname === '/dashboard/documents' ? 'text-primary' : ''} hover:px-8 disabled:opacity-60 duration-200 px-6 py-2 items-center gap-2`}>
                            <Notebook size={16} />
                            Documents
                        </button>
                    </div>

                    <div>
                        <div className='text-gray-500 text-xs font-medium md:px-2'>

                            <button className={`flex ${pathname === '/dashboard/support' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                                <Headphones size={16} />
                                Support
                            </button>

                            {/* <form
                                action={ async() => {
                                    "use server"
                                     await signout()
                                }}
                                >
                                <button className="flex hover:px-8 duration-200 px-6 py-2 items-center gap-2" >
                                    <Power size={16} />
                                    Sign Out
                                </button>
                             </form> */}
                            </div>

                        <hr className='bg-gray-400 mx-2 my-4' />

                        {/* bottom */}
                        <div className='flex pb-28 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src={ProfileImage}
                                    alt='User'
                                    width={36}
                                    height={36}
                                    className='rounded-full'
                                />
                                <div className=''>
                                    <p className='text-sm font-semibold text-gray-800'>Abirhamy</p>
                                    <p className='text-xs font-medium text-gray-500'>abirhamy@ethiopian.com</p>
                                </div>
                            </div>

                            <button className='text-gray-500'>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


const NavbarLink = ({ href, active }: { href: string, active: boolean }) => {
    return (
        <Link
            href={href}

        >

        </Link>
    )
}

const NavLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({  href, ...props }, ref) => (
        <Link
            ref={ref}
            href={href!}
            className={`flex ${window.location.pathname === href! ? 'text-primary' : ''} hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
            {...props}
        />
    )
);
NavLink.displayName = 'NavLink';


