"use client"

import PageNavbar, { PageNavbarIconButton, PageNavbarLeftContent, PageNavbarPrimaryButton, PageNavbarRightContent } from '@/app/_components/layout/PageNavbar'
// import { Add, CalendarEdit, DirectNotification, Notification, SearchNormal1, Setting4 } from 'iconsax-react'
import PageContent from '@/app/_components/layout/PageContent'
import Tabs from '@/app/_components/Cards/ui/tabs'
import IntegrationsList from '@/app/_components/integrations/IntegrationsList'
import TraningAnalysis from '@/app/_components/Cards/TraningAnalysis'
import CourseProgress from '@/app/_components/Cards/CourseProgress'
import EmployeeSpotlight from '@/app/_components/Cards/EmployeeSpotlight'
import TimeTracker from '@/app/_components/Cards/TimeTracker'
import Notes from '@/app/_components/Cards/Notes'
import StatusTracker from '@/app/_components/Cards/StatusTracker'
import CurrentProject from '@/app/_components/Cards/CurrentProject'
import ProfileImage from '@/app/_components/assets/profile.png'
import Image from 'next/image'
import { OutlineButton } from '@/app/_components/ui/Button'
import { AlertCircle, Calendar, Plus, Search } from 'lucide-react'

function Dashboard() {

    return (
        <div>
            <PageNavbar>
                <PageNavbarLeftContent>
                    {/* <div className='flex items-center justify-between gap-2'> */}
                        <Image
                            src={ProfileImage}
                            alt='User'
                            width={40}
                            height={40}
                            className='rounded-full'
                        />
                        <div className=''>
                            <p className='text-sm font-semibold text-gray-800'>Admin User</p>
                            <p className='text-xs font-medium text-gray-500'>Welcome back</p>
                        </div>
                    {/* </div> */}
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <PageNavbarIconButton className='all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-lg'>
                        <Search size={16} />
                    </PageNavbarIconButton>

                    <PageNavbarIconButton className='all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-lg'>
                        <AlertCircle size={16} />
                    </PageNavbarIconButton>

                    <OutlineButton className='h-8 w-8 gap-1 md:w-auto md:border py-1 px-2 duration-200 hover:bg-gray-100 rounded-lg text-xs all-center'>
                        <Calendar size={16} />
                        <span className='hidden md:inline'>Schedule</span>
                    </OutlineButton>

                    <PageNavbarPrimaryButton className='h-8 gap-1 bg-primary hidden py-1 px-2 duration-200 text-white rounded-lg text-xs md:flex items-center justify-center'>
                        <Plus size={16} />
                        <span className='hidden md:inline'>Create request</span>
                    </PageNavbarPrimaryButton>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                <div className='space-y-4 columns-1 sm:columns-2 lg:columns-3'>
                    <div className='break-inside-avoid-column space-y-4'>
                        <TraningAnalysis />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <CourseProgress />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <EmployeeSpotlight />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <TimeTracker />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <Notes />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <StatusTracker />
                    </div>

                    <div className='break-inside-avoid-column space-y-4'>
                        <CurrentProject />
                    </div>
                </div>

            </PageContent>

        </div>
    )
}

export default Dashboard