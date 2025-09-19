import NavbarLayout from '@/components/layouts/navbar-layouts'
import React from 'react'

export default function PublicLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <NavbarLayout/>
    <div>{children}</div>
</>
  )
}
