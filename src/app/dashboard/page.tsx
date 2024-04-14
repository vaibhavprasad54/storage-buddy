import Categories from '@/components/Categories'
import FilesInfo from '@/components/FilesInfo'
import Header from '@/components/Header'
import MobileMenu from '@/components/MobileMenu'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import FilesList from '@/components/FilesList'

const Page = () => {
  return (
    <div className='w-full'>
      <div className='flex items-start justify-start h-[72vh]'>
        <Sidebar />
        <div className='flex flex-1 flex-col mt-2 min-w-[63%]'>
        <Header />
        <Categories />
        <FilesInfo />
        </div>
      </div>
      <div className='absolute bottom-0 w-full'>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Page