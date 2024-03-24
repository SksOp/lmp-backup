import { BackIcon } from '@/components/svgs/icon'
import { paths } from '@/router'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({backFn}:{backFn:()=>void}) {
  return (
        
    <nav className="w-full bg-background flex justify-between items-center z-10 px-4 py-3 sticky top-0 ">
        <div className="flex items-center gap-1">
          {/* <Link to={paths.home}> */}
            <div onClick={backFn} className='p-0 m-0'>

            <BackIcon   />
            </div>
          {/* </Link> */}
        </div>
        <div className="flex-grow flex justify-center">
    <h3 className="text-base font-bold mr-6">New Leasing Application</h3>
  </div>
      </nav>
  )
}

export default Navbar
