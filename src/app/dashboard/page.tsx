"use client"

import Categories from '@/components/Categories'
import FilesInfo from '@/components/FilesInfo'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'
// import Overview from '@/components/Overview'

const Page = () => {

  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <div className='w-full'>
      <div className='flex items-start justify-start sm:h-[72vh]'>
        <Sidebar />
        <div className='flex flex-1 flex-col mt-2 min-w-[63%] px-5'>
        <Header setSearchInput={setSearchInput} />
        {/* <div className='flex sm:hidden'>
        <Categories />
        </div> */}
        <FilesInfo searchInput={searchInput} />
        </div>
        {/* <div className='graph-section hidden md:flex border-l-2 border-[#1d1d1d] h-[41.4rem]'>
         <Overview />
        </div> */}
      </div>
    </div> 
  )
}

export default Page