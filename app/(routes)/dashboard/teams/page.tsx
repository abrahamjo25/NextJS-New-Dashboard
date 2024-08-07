"use client"

import PageNavbar, { PageNavbarIconButton, PageNavbarLeftContent, PageNavbarRightContent } from '@/app/_components/layout/PageNavbar'
import { Add, ExportCurve, Notification, Profile, SearchNormal1 } from 'iconsax-react'
import PageContent from '@/app/_components/layout/PageContent'
import { PrimaryButton, OutlineButton } from '@/app/_components/ui/Button'
import MembersTable from '@/app/_components/teams/MembersTable'
import Breadcrumb from '@/app/_components/Breadcrumb'
import { UsersRound } from 'lucide-react'

function Teams() {

    return (
        <div className='text-gray-500 w-full'>
              <Breadcrumb breadcrumbs={[
                {label:'Dashboard', to:'/dashboard'},
                {
                    label: 'Teams',
                    to:'/dashboard/teams',
                    active:true,
                },
            ]}
            />
            <PageNavbar>
                <PageNavbarLeftContent>
                    <div className='border rounded-full w-10 h-10 all-center'>
                        <UsersRound size={18} />
                    </div>
                    <div>
                        <h1 className='text-sm font-semibold text-gray-800'>Teams</h1>
                        <p className='text-xs font-medium'>Manage and collaborate within your organization&apos;s teams</p>
                    </div>
                </PageNavbarLeftContent>

                <PageNavbarRightContent>
                    <PageNavbarIconButton>
                        <SearchNormal1 size={16} />
                    </PageNavbarIconButton>
                    <PageNavbarIconButton>
                        <Notification size={16} />
                    </PageNavbarIconButton>
                </PageNavbarRightContent>
            </PageNavbar>

            <PageContent>
                {/* header */}
                <div className='text-sm md:pb-2 flex items-center justify-between'>
                    <div>
                        <h1 className='text-gray-800 font-medium'>Available integrations</h1>
                        <p className='text-xs'>Display all the team members and essential details</p>
                    </div>

                    <div className='flex gap-2'>
                        <OutlineButton>
                            <ExportCurve size={16} />
                            <span className='hidden md:block'>
                                Export
                            </span>
                        </OutlineButton>
                        <PrimaryButton>
                            <Add size={16} />
                            Invite member
                        </PrimaryButton>
                    </div>
                </div>

                <hr className='-mx-4' />

                {/* members table */}
                <MembersTable />

            </PageContent>

        </div>
    )
}

export default Teams