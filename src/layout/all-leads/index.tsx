import React from 'react'
import Navbar from './nav/navbar'
import NavBottom from '../main/nav/navBottom'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Navbar />
        {children}
        <NavBottom />
    </>
  )
}

export default Layout
