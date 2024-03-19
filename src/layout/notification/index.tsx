import React from 'react'
import Navbar from './nav/navbar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="p-4">{children}</div>
    </>
  )
}

export default Layout
