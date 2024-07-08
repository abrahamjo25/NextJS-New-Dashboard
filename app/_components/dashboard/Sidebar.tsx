import Image from 'next/image'
import ProfileImage from '../../_components/assets/profile.png'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import { ArrowRight, Headphones, Power, Triangle } from 'lucide-react'
import NavLinks from './NavLinks'
import {  logOut } from '@/app/_lib/actions/auth'
import { useSession } from 'next-auth/react';

export  default   function Sidebar() {
const {data: session} = useSession()
console.log(session?.user)
    return (
        <div className='w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden'>
            <div className='w-full h-full bg-white border-r'>
                {/* logo */}
                <div className='p-4 md:p-6 flex cursor-pointer group items-center gap-2'>
                    <div className='h-10 outline outline-cyan-300 w-10 flex items-center bg-gradient-to-br justify-center rounded-full from-primary to-cyan-700 text-white'>
                        <Triangle size={24} className='relative group-hover:scale-75 duration-200' />
                    </div>
                    <div>
                        <h1 className='text-sm font-bold text-gray-800'>ET</h1>
                        <p className='text-xs text-gray-500 font-medium'>Case Management</p>
                    </div>
                </div>

                {/* section divider */}
                <hr className='bg-gray-400 mx-2' />

                {/* other section */}
                <div className='flex flex-col h-full justify-between'>
                    {/* top */}
                    
                    <NavLinks/>
                    <div>
                        <div className='text-gray-500 text-xs font-medium md:px-2'>

                            <button className={`flex hover:text-primary hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                                <Headphones size={16} />
                                Support
                            </button>

                            <form action={logOut}>
                                <button className="flex hover:text-primary hover:px-8 duration-200 px-6 py-2 items-center gap-2">
                                    <Power size={16} />
                                    Sign Out
                                </button>
                            </form>
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
                                    <p className='text-sm font-semibold text-gray-800'>Abirham Y</p>
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


