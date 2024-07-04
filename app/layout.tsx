import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { SessionProvider } from 'next-auth/react';
import Provider from './_components/Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Githr - Dashboard",
  description: "Githr - Dashboard",
  keywords: "Githr - Dashboard, dashboard ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
        <Toaster position="top-right" expand={true} richColors/>
        {children}
        </Provider>
        </body>
    </html>
  )
}
