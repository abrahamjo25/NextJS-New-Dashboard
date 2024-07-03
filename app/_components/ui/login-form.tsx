'use client';

import { useActionState, useEffect } from 'react';
import { authenticate } from '@/app/_lib/actions/auth';
import {  CircleAlert, CircleUserRound,   Eye } from 'lucide-react';
import Image from 'next/image';
import { clientLogin } from '@/app/_services/axiosInstance';
 
export default function LoginForm() {
  const [errorMessage, formAction, isPending ] = useActionState(authenticate, undefined);

  useEffect(() => {
    const authenticateClient = async () => {
        const response = await clientLogin();
        localStorage.setItem("accessToken", response?.data?.accessToken )
    };
    authenticateClient();
}, []);
 
  return (
    <>
  <form action={formAction} className="">
  <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
    <div className="max-w-md w-full">
      <a href="#"><Image src="/images/ethiopian.png" alt="logo" width={400} height={300} className="w-40 mb-8 mx-auto block" />
      </a>
      <div className="p-8 rounded-2xl bg-white shadow">
        <h2 className="text-gray-800 text-center text-lg font-bold">Sign in</h2>
        <div className="mt-8 space-y-4">
          <div>
            <label className="text-gray-800  mb-2 block text-sm font-semibold">User name</label>
            <div className="relative flex items-center">
            <input
                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-xl outline-primary"
                id="userId"
                type="text"
                name="userId"
                placeholder="Enter your userId address"
              />
            <CircleUserRound  className="w-4 h-4 absolute right-4 text-primary"/>
            </div>
          </div>
          <div>
            <label className="text-gray-800 text-sm font-semibold mb-2 block">Password</label>
            <div className="relative flex items-center">
            <input
                className="w-full text-gray-800 text-sm border rounded-xl border-gray-300 px-4 py-3 outline-primary"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                minLength={6}
              />
             <Eye className="w-4 h-4 absolute right-4 cursor-pointer  text-primary"/>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 accent-primary rounded-2xl text-primary focus:ring-cyan-600 border-gray-300" />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="text-primary hover:underline font-semibold">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="!mt-8">

            <button   className="w-full py-3 px-4 text-sm tracking-wide rounded-xl text-white bg-primary hover:bg-cyan-600 focus:outline-none">
             Sign In
            </button>
          </div>
          <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <CircleAlert className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  </div>
</form>
    </>
  );
}