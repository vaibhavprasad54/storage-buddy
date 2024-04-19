"use client"

import React, { useEffect, useState } from "react";
import shoeImg from "../../public/shoe.jpg"
import userImg from "../../public/demo-user.png"
import Image from 'next/image'
import { EllipsisVertical, Images, Star, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { getS3Url } from "@/lib/s3";
import pdfLogo from "../../public/pdfLogo.png";
import docxLogo from "../../public/docxLogo.png";
import videoPl from "../../public/videoPl.png";
import Loader from "./Loader";
import videoIcon from "../../public/video-icon.png";
import pdfIcon from "../../public/pdf-icon.png";
import docIcon from "../../public/doc-icon.png";
import imageIcon from "../../public/imageIcon.png";


const FilesInfo = () => {

  const [files, setFiles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  

  const { user }  = useUser();
  const userId: string = user?.id || '';
  const userImage = user?.imageUrl || '';

  const fetchFiles = async() => {

      try {
        setIsLoading(true);
        const res = await axios.post("/api/files/get", { userId }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setFiles(res.data.reverse());
        setIsLoading(false);
      } catch (error) {
        console.log("Cannot fetch files", error);
      }

  }

  useEffect(() => {
    if (!userId) {
      console.log('User ID is not available.');
      return;
    }
  
    fetchFiles();
  }, [userId]);
  

  console.log("Fetched:", files);

  if(isLoading){
    return (
      <div className="mt-20">
        <Loader size={70} />
      </div>
    )
  }

  return (
    <div className="w-full flex justify-center sm:items-start sm:justify-start flex-wrap gap-7 py-9 sm:pl-16 sm:pr-7 pt-2 h-[500px] overflow-y-auto mt-4">
      {files.length > 0 && files.map((file) => (
        <div className="card sm:w-64 w-full mx-5 sm:mx-0 rounded-[12px] p-4 cursor-pointer bg-[#1b1e23] bg-opacity-35 border-2 border-[#22262b] shadow-xl">
        <div className="card-header w-full flex items-center justify-between">
        <div className="flex items-start justify-start gap-2">
        {file.fileUrl.split('.').pop() == "png" || file.fileUrl.split('.').pop() == 'jpg' ? (
            <>
          <Image src={imageIcon} height={50} width={50} alt="sampleImg" className="h-5 w-5" />
            </>
          ) : file.fileUrl.split('.').pop() == "pdf" ? (
            <Image src={pdfIcon} height={50} width={50} alt="sampleImg" className="h-5 w-5" />
          ) : file.fileUrl.split('.').pop() == "txt" ? (
            <Image src={docIcon} height={50} width={50} alt="sampleImg" className="h-5 w-5" />
          ) : file.fileUrl.split('.').pop() == "mp4" ? (
            <Image src={videoIcon} height={50} width={50} alt="sampleImg" className="h-5 w-5" />
          ) : (
            <Image src={docIcon} width={50} height={50} alt="sampleImg" className="w-5 h-5" />
          )}
    
        <p className="text-sm text-gray-200">{file?.fileName ? file?.fileName : "File"}</p>
        </div>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <EllipsisVertical className="text-gray-200" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48 mr-44">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer group">
            <span className="">Profile</span>
            <DropdownMenuShortcut className="opacity-100"> <Star strokeWidth={2.5} className="w-4 group-hover:text-yellow-400" /> </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer group">
            <span className="">Billing</span>
            <DropdownMenuShortcut className="opacity-100"> <Trash strokeWidth={2.5} className="w-4" /> </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>     
      </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="card-content w-full py-4 px-3">
          {file.fileUrl.split('.').pop() == "png" || file.fileUrl.split('.').pop() == 'jpg' ? (
            <>
          <Image src={getS3Url(file.fileUrl)} width={400} height={400} alt="sampleImg" className="w-full h-36 object-cover rounded-[5px]" />
            </>
          ) : file.fileUrl.split('.').pop() == "pdf" ? (
          <Image src={pdfLogo} width={400} height={400} alt="sampleImg" className="w-full h-36 object-cover rounded-[5px]" />
          ) : file.fileUrl.split('.').pop() == "txt" ? (
          <Image src={docxLogo} width={400} height={400} alt="sampleImg" className="w-full h-36 object-cover rounded-[5px]" />
          ) : file.fileUrl.split('.').pop() == "mp4" ? (
          <Image src={videoPl} width={400} height={400} alt="sampleImg" className="w-full h-36 object-cover rounded-[5px]" />
          ) : (
            <Image src={docxLogo} width={400} height={400} alt="sampleImg" className="w-full h-36 object-cover rounded-[5px]" />
          )}
        </div>
        <div className="card-footer flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center rounded-full w-8 h-8">
           <Image src={userImage} width={30} height={30} alt="sampleImg" className="rounded-full border-2 border-[#277dff]" />
          </div>
          <p className="text-gray-300 text-xs">{file?.userName}</p>
          </div>
          <div className="time">
            <p className="text-xs text-gray-300">{new Date(file.uploadedAt).toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric', })}</p>
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default FilesInfo;
