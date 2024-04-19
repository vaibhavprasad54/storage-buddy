"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FolderOpen } from 'lucide-react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from '@clerk/nextjs';
import axios from "axios";
import FileDropZone from './FileDropZone';

type Inputs = {
  fileName: string
  fileUrl: string
  userId: string
}


const UploadFile = ({open, setOpen, closeModal}: any) => {

  const [fileS3Url, setFileS3Url] = useState("");

  const { user }  = useUser();
  console.log("af",user);

  const handleFileS3Url = (value: string) => {
    setFileS3Url(value);
  }

  //========= React Hook Form 
  const { register, handleSubmit, formState : { errors } } = useForm<Inputs>()

  const onSubmit : SubmitHandler<Inputs> = async(data) => {
    const formData = { ...data, fileUrl: fileS3Url, userId: user?.id, userName: user?.firstName };
    console.log("File data:", formData);

    try {
      if(fileS3Url !== undefined || fileS3Url !== null || fileS3Url !== ""){
        const response = await axios.post('/api/files/post', formData);
        console.log("Response:", response.data);
      }

    } catch (error) {
      console.log("Error:", error);
    }

  }


  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[725px] bg-[#16181b] border-2 border-gray-700">
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogHeader>
          <DialogTitle className='text-gray-100 flex items-center gap-2'>
            <p>Upload File</p>
            <FolderOpen className='text-green-400' />
          </DialogTitle>
          <DialogDescription className='py-4 mx-5'>

            <div className='flex flex-col items-start justify-center'>
              <label className='text-gray-300 font-semibold text-base'>File Name</label>
              <input type="text" {...register("fileName")} placeholder='Enter file name' className='px-5 py-3 rounded-[5px] mt-1 bg-[#23272c] shadow-xl w-full outline-none text-slate-200 font-semibold tracking-wider' />
            </div>

            <FileDropZone onStateChange={handleFileS3Url} />
            
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
          <Button onClick={closeModal} type="submit" className='bg-transparent border-2 border-[#277dff] text-sm'>Cancel</Button>
          <Button type="submit" className='bg-[#277dff] hover:bg-[#2775e9] text-sm'>Upload</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default UploadFile