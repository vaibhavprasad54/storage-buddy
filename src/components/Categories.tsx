import { Clapperboard, FileBarChart2, Files, Images } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <div className='main w-full py-6 px-16 flex'>
      <div className="flex items-start justify-between gap-4 w-full flex-wrap">
        <div className="files flex items-center justify-start gap-3 cursor-pointer bg-[#2c3039] hover:bg-[#1b1f22] p-[10px] w-40 rounded-[8px]">
            <Files className='text-green-500 w-10 h-9 bg-green-800 bg-opacity-15 p-2 rounded-[6px] shadow-[0_5px_15px_rgb(0,0,0,0.4)]' />
            <div className="text">
                <h2 className='text-gray-200 text-sm'>Files</h2>
                <p className='text-gray-500 text-xs'>4 Files</p>
            </div>
        </div>
        <div className="videos flex items-center justify-start gap-3 cursor-pointer bg-[#2c3039] hover:bg-[#1b1f22] p-[10px] w-40 rounded-[8px]">
            <Clapperboard className='text-blue-500 w-10 h-9 bg-blue-800 bg-opacity-15 p-2 rounded-[6px] shadow-[0_5px_15px_rgb(0,0,0,0.4)]'/>
            <div className="text">
                <h2 className='text-gray-200 text-sm'>Videos</h2>
                <p className='text-gray-500 text-xs'>24 Videos</p>
            </div>
        </div>
        <div className="images flex items-center justify-start gap-3 cursor-pointer bg-[#2c3039] hover:bg-[#1b1f22] p-[10px] w-40 rounded-[8px]">
            <Images className='text-orange-500 w-10 h-9 bg-orange-800 bg-opacity-15 p-2 rounded-[6px] shadow-[0_5px_15px_rgb(0,0,0,0.4)]'/>
            <div className="text">
                <h2 className='text-gray-200 text-sm'>Images</h2>
                <p className='text-gray-500 text-xs'>17 Images</p>
            </div>
        </div>
        <div className="others flex items-center justify-start gap-3 cursor-pointer bg-[#2c3039] hover:bg-[#1b1f22] p-[10px] w-40 rounded-[8px]">
            <FileBarChart2 className='text-red-500 w-10 h-9 bg-red-800 bg-opacity-15 p-2 rounded-[6px] shadow-[0_5px_15px_rgb(0,0,0,0.4)]'/>
            <div className="text">
                <h2 className='text-gray-200 text-sm'>Others</h2>
                <p className='text-gray-500 text-xs'>34 Others</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Categories