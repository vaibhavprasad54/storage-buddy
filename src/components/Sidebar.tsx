"use client"

import { ChevronLeft, ChevronRight, CircleHelp, LayoutDashboard, Settings, Star, Trash, Users } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Sidebar = () => {

    const [open, setOpen] = useState(true);

    const toggleSidebar = () => {
        setOpen(prevState => !prevState);
    }

  return (
    <div>
        <aside className='h-[90vh]'>

          {/* Desktop Sidebar */}
          <nav className={` ${open ? 'w-64 pl-16' : 'w-[5.3rem] pl-8'} hidden sm:flex rounded-r-[15px] h-full transition-all duration-500 pr-8 py-14 flex-col items-start justify-between border-r border-[#1d1d1d] bg-[#13151b] shadow-xl`}>
            <div className='flex flex-col items-start gap-7'>
            <button className={`w-full flex mb-7 -mt-7 ${open ? 'justify-end' : 'justify-start'}`}>
                <ChevronLeft strokeWidth={2.5} onClick={toggleSidebar} className={`text-gray-500 w-6 h-6 ${open ? 'opacity-100' : 'opacity-0 hidden'} transition-all duration-300 flex hover:text-[#457de6]`} />
                <ChevronRight strokeWidth={2.5} onClick={toggleSidebar} className={`text-gray-500 -mr-2 w-6 h-6 ${open ? 'opacity-0 hidden' : 'opacity-100'} transition-all duration-300 flex hover:text-[#457de6]`} />
            </button>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md ${open ? 'w-40 hover:bg-[#277dff]' : 'max-w-max'} `}>
              <LayoutDashboard strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
                <h1 className={`${open ? 'opacity-100' : 'opacity-0'} transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Dashboard</h1>
            </Link>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md ${open ? 'w-40 hover:bg-[#277dff]' : 'max-w-max'} `}>
              <Star strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
              <h1 className={`${open ? 'opacity-100' : 'opacity-0'} transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Favourites</h1>
            </Link>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md ${open ? 'w-40 hover:bg-[#277dff]' : 'max-w-max'} `}>
              <Trash strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
              <h1 className={`${open ? 'opacity-100' : 'opacity-0'} transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Deleted</h1>
            </Link>
            {/* <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md ${open ? 'w-40 hover:bg-[#457de6]' : 'max-w-max'} `}>
              <Settings strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
              <h1 className={`${open ? 'opacity-100' : 'opacity-0'} transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Settings</h1>
            </Link> */}
            </div>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md ${open ? 'w-40 hover:bg-[#277dff]' : 'max-w-max'} `}>
             <CircleHelp strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
             <h1 className={`${open ? 'opacity-100' : 'opacity-0'} transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Help</h1>
            </Link>
          </nav>

        </aside>
    </div>
  )
}

export default Sidebar