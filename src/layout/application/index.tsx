import React from 'react'
import Navbar from './nav/navbar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      
    </>
  )
}

export default Layout
