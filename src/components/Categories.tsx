"use client"

import { Clapperboard, FileBarChart2, Files, Images } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Categories = ({ files, images, videos, others }: any) => {

  console.log("File", files, "Images:",  images, "Videos:", videos, "Others:", others);

  return (
    <div className='main w-full pb-2 pt-4 px-2 sm:px-2 flex'>
      <div className="flex items-start justify-start gap-3 w-full flex-wrap">
        <div className="files flex items-center justify-start gap-3 cursor-pointer bg-[#1b1e23] bg-opacity-35 border-2 border-[#22262b] p-[10px] w-32 sm:w-32 rounded-[8px]">
            <Files className='text-green-500 w-10 h-9 bg-green-800 bg-opacity-15 p-2 rounded-[6px] shadow-[0_5px_15px_rgb(0,0,0,0.4)]' />
            <div className="text">
                <h2 className='text-gray-200 sm:text-sm text-xs'>Files</h2>
                <p className='text-gray-500 text-xs whitespace-nowrap'>{files ? files : 0} Files</p>
            </div>
        </div>
        <div className="videos flex items-center justify-start gap-3 cursor-pointer bg-[#1b1e23] bg-opacity-35 border-2 border-[#22262b] p-[10px] w-32 sm:w-32 rounded-[8px]">
            <Clapperboard className='text-blue-500 w-10 h-9 bg-blue-800 bg-opacity-15 p-2 rounded-[6px] shadow-[0_5px_15px_rgb(0,0,0,0.4)]'/>
            <div className="text">
                <h2 className='text-gray-200 sm:text-sm text-xs'>Videos</h2>
                <p className='text-gray-500 text-xs whitespace-nowrap'>{videos ? videos : 0} Videos</p>
            </div>
        </div>
        <div className="images flex items-center justify-start gap-3 cursor-pointer bg-[#1b1e23] bg-opacity-35 border-2 border-[#22262b] p-[10px] w-32 sm:w-32 rounded-[8px]">
            <Images className='text-orange-500 w-10 h-9 bg-orange-800 bg-opacity-15 p-2 rounded-[6px] shadow-[0_5px_15px_rgb(0,0,0,0.4)]'/>
            <div className="text">
                <h2 className='text-gray-200 sm:text-sm text-xs'>Images</h2>
                <p className='text-gray-500 text-xs whitespace-nowrap'>{images ? images : 0} Images</p>
            </div>
        </div>
        <div className="others flex items-center justify-start gap-3 cursor-pointer bg-[#1b1e23] bg-opacity-35 border-2 border-[#22262b] p-[10px] w-32 sm:w-32 rounded-[8px]">
            <FileBarChart2 className='text-red-500 w-10 h-9 bg-red-800 bg-opacity-15 p-2 rounded-[6px] shadow-[0_5px_15px_rgb(0,0,0,0.4)]'/>
            <div className="text">
                <h2 className='text-gray-200 sm:text-sm text-xs'>Others</h2>
                <p className='text-gray-500 text-xs whitespace-nowrap'>{others ? others : 0} Others</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories