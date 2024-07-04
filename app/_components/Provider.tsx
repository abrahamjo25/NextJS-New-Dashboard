"use client"
import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react'


type ChildrenProp = {
    children : ReactNode;
}
const Provider = ({children} : ChildrenProp) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default Provider
