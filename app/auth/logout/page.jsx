
import React from 'react'
import {signOut} from '../../auth'
import { Power } from 'lucide-react';
const LogoutPage = () => {
  return (
    <form
    action={async () => {
        await signOut();
    }}
    >
    <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <Power className="w-6" />
        <div className="hidden md:block">Sign Out</div>
    </button>
    </form>
  )
}

export default LogoutPage
