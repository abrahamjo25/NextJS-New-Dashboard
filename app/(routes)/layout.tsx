"use client"

import React, { useState } from "react"
// import { AnimatePresence, motion } from "framer-motion"
import Sidebar from "@/app/_components/Sidebar"
import { useCentralStore } from "@/app/Store"

const AppLayout = ({ children }: { children: React.ReactNode }) => {

    const { isSidebarOpen, toggleSidebar, setIsSidebarOpen } = useCentralStore()

    return (
        <div  
            className={`${isSidebarOpen ? 'overflow-hidden' : ''} h-screen`}
        >

            {/* backdrop */}
                {isSidebarOpen && (
                    <div
                       
                        onClick={() => setIsSidebarOpen(false)}
                        className='bg-black/60 absolute top-0 left-0 md:hidden w-full h-screen z-20'
                    />
                )}

            {/* mobile sidebar */}
                {isSidebarOpen && (
                    <div
                        className='absolute md:hidden z-30 top-0 left-0'
                    >
                        <Sidebar />
                    </div>
                )}

            <div className='grid md:grid-cols-[240px_1fr] w-screen overflow-x-hidden'>
                <div className='hidden md:block'>
                    <Sidebar />
                </div>

                <div className='w-full overflow-x-auto max-w-[1440px] mx-auto'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default AppLayout;