"use client"
import Link from 'next/link';
import NavLinks from '@/app/_components/dashboard/navigation';
import AcmeLogo from '@/app/_components/acme-logo';
import { signOut } from '@/app/auth';
import { Power } from 'lucide-react';
import { useSidebarContext } from '@/context/SidebarContext';
import { twMerge } from 'tailwind-merge';
import { isSmallScreen } from '@/helpers/is-small-screen';
export default function SideNav() {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();

  return (
    <div className={twMerge("flex h-full flex-col px-3 py-4 md:px-2",
      isSidebarCollapsed?"hidden":"block"
    )}>
      <div className={twMerge("flex grow flex-col justify-between space-x-2 md:space-x-0 md:space-y-2",
        isSidebarCollapsed?"hidden":"block"
      )}>
        <NavLinks />
        <div className="h-auto w-full grow rounded-md bg-gray-50 block"></div>
        <form
          // action={async () => {
          //   'use server';
          //   await signOut();
          // }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <Power className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}