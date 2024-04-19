"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

const CreateBtn = ({ handleOpenModal }: any) => {

  return (
    <div className=''>
      <Button onClick={handleOpenModal} className="text-sm bg-[#277dff] hover:bg-[#2b74e3] px-6 py-5 flex items-center justify-center gap-3 rounded-[6px]">
      <Plus className='w-5 h-5 bg-blue-400 rounded-full p-[3px] shadow-xl bg-opacity-50' />
      <p className='font-normal'>Upload</p>
    </Button>
    </div>
  )
}

export default CreateBtn