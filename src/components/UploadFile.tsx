import React from 'react'
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
import Dropzone from 'react-dropzone'
import dropIcon from "../../public/dropFileIcon.svg"
import Image from 'next/image';
import { uploadToS3 } from '@/lib/s3';



const UploadFile = ({open, setOpen, closeModal}: any) => {

  const handleFileUpload = async ( acceptedFiles: any ) => {
    console.log("New:",acceptedFiles);
    const file = acceptedFiles[0];
    if(file.size > 200 * 1024 * 1024){
      alert('Please upload a smaller file');
      return
    }

    try {
      const data = await uploadToS3(file);
      console.log("File", data);
    } catch (error) {
      console.log("Error while uploading", error)
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[725px] bg-[#16181b] border-2 border-gray-700">
        <DialogHeader>
          <DialogTitle className='text-gray-100'>Upload File</DialogTitle>
          <DialogDescription className='py-4'>
            <Dropzone onDrop={handleFileUpload}>
              {({getRootProps, getInputProps}) => (
                <div className='flex items-center justify-center mt-1'>
                  <section className='border-[3px] border-dashed bg-[#1d2024] border-gray-500 rounded-[8px] px-5 py-4 h-56 w-10/12 flex items-center justify-center'>
                  <div {...getRootProps()} className='w-full flex items-center justify-center flex-col'>
                    <input {...getInputProps()} />
                    <Image src={dropIcon} height={75} width={75} alt='sample-drop-image' />
                    <p className='pt-2 pb-0'>Drag n Drop files here...</p>
                    {/* <p className='text-center px-4 py-[6px] mt-2 bg-[#457de6] text-gray-100 rounded-[4px] cursor-pointer'>Choose Files</p> */}
                  </div>
                </section>
                </div>
              )}
            </Dropzone>
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter>
          <Button onClick={closeModal} type="submit" className='bg-transparent border-2 border-[#277dff] text-sm'>Cancel</Button>
          <Button type="submit" className='bg-[#277dff] hover:bg-[#2775e9] text-sm'>Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default UploadFile