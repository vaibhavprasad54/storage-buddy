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
    <div className='group'>
        <aside className='h-[90vh]'>

          {/* Desktop Sidebar */}
          <nav className={` ${open ? 'w-56 pl-12' : 'w-[5.3rem] pl-8'} hidden sm:flex rounded-r-[15px] h-full transition-all duration-500 pr-8 py-14 flex-col items-start justify-between border-r border-[#1d1d1d] bg-[#0f1013] shadow-xl`}>
            <div className='flex flex-col items-start gap-7'>
            <button className={`w-full flex mb-7 -mt-7 ${open ? 'justify-end' : 'justify-start'}`}>
                <ChevronLeft strokeWidth={2.5} onClick={toggleSidebar} className={`text-gray-500 w-6 h-6 ${open ? 'opacity-100' : 'opacity-0 hidden'} transition-all duration-300 flex hover:text-[#457de6]`} />
                <ChevronRight strokeWidth={2.5} onClick={toggleSidebar} className={`text-gray-500 -mr-2 w-6 h-6 ${open ? 'opacity-0 hidden' : 'opacity-100'} transition-all duration-300 flex hover:text-[#457de6]`} />
            </button>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md bg-[#277dff] ${open ? 'w-40' : 'max-w-max'} `}>
              <LayoutDashboard strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
                {open && (
                  <h1 className={`transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Dashboard</h1>
                )}
            </Link>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md hover:bg-[#277dff] ${open ? 'w-40' : 'max-w-max'} `}>
              <Star strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
              {open && (
                <h1 className={`transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Favourites</h1>
              )}
            </Link>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md hover:bg-[#277dff] ${open ? 'w-40' : 'max-w-max'} `}>
              <Trash strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
              {open && (
                <h1 className={`${open ? 'opacity-100' : 'opacity-0'} transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Deleted</h1>
              )}
            </Link>
            {/* <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md ${open ? 'w-40 hover:bg-[#457de6]' : 'max-w-max'} `}>
              <Settings strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
              <h1 className={`${open ? 'opacity-100' : 'opacity-0'} transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Settings</h1>
            </Link> */}
            </div>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md hover:bg-[#277dff] ${open ? 'w-40' : 'max-w-max'} `}>
             <CircleHelp strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
             {open && (
              <h1 className={`${open ? 'opacity-100' : 'opacity-0'} transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Help</h1>
             )}
            </Link>
          </nav>

          <nav className={`opacity-0 group-hover:opacity-100 group-hover:translate-x-0 w-14 fixed  z-50 flex rounded-r-[15px] h-full transition-all duration-500 pl-3 pr-3 pt-20 pb-28 flex-col items-start justify-between border-r border-[#1d1d1d] bg-[#121317] shadow-xl`}>
            <div className='flex flex-col items-start gap-7'>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 hover:bg-[#277dff] rounded-md `}>
              <LayoutDashboard strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
            </Link>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 hover:bg-[#277dff] rounded-md `}>
              <Star strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
            </Link>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 hover:bg-[#277dff] rounded-md `}>
              <Trash strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
            </Link>
            {/* <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 rounded-md ${open ? 'w-40 hover:bg-[#457de6]' : 'max-w-max'} `}>
              <Settings strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
              <h1 className={`${open ? 'opacity-100' : 'opacity-0'} transition-all duration-300 text-base text-gray-200 group-hover:text-[#f1f1f1]`}>Settings</h1>
            </Link> */}
            </div>
            <Link href="/" className={`p4 flex items-center justify-start gap-3 group  px-4 -ml-4 py-2 hover:bg-[#277dff] rounded-md `}>
             <CircleHelp strokeWidth={2.5} className='transition-all duration-300 text-gray-200 w-5 group-hover:text-[#f1f1f1]' />
            </Link>
          </nav>

        </aside>
    </div>
  )
}

export default Sidebar