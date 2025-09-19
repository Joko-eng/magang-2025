import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function PublicLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Navbar />
    <div>{children}</div>
    <Footer/>
</>
  )
}
