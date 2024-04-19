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


const FilesInfo = () => {

  const [files, setFiles] = useState([]);

  const { user }  = useUser();
  const userId: string = user?.id || '';
  console.log("Asdd", userId);

  const fetchFiles = async() => {

      try {

        const res = await axios.post("/api/files/get", { userId }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setFiles(res.data);
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

  return (
    <div className="w-full flex justify-center sm:items-start sm:justify-start flex-wrap gap-7 py-9 sm:pl-16 sm:pr-7 pt-2 h-[500px] overflow-y-auto mt-4">
      {files.length > 0 && files.map((file) => (
        <div className="card sm:w-64 w-full mx-5 sm:mx-0 rounded-[12px] p-4 cursor-pointer bg-[#1b1e23] bg-opacity-35 border-2 border-[#22262b] shadow-xl">
        <div className="card-header w-full flex items-center justify-between">
        <div className="flex items-start justify-start gap-2">
        <Images className="text-gray-200" />
        <p className="text-sm text-gray-200">{file?.fileName}</p>
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
          <div className="flex items-center justify-center bg-blue-300 rounded-full p-[6px] w-8 h-8">
           <Image src={userImg} width={30} height={30} alt="sampleImg" />
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
