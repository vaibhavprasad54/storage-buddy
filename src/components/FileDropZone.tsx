"use client";

import React, { useState } from "react";
import Dropzone from "react-dropzone";
import dropIcon from "../../public/dropFileIcon.svg";
import Image from "next/image";
import { uploadToS3 } from "@/lib/s3";

interface ChildProps {
    onStateChange: (value: string) => void; 
  }

const FileDropZone: React.FC<ChildProps> = ({ onStateChange }) => {
    
  const [fileS3Url, setFileS3Url] = useState("");
  const [fileS3Name, setFileS3Name] = useState("");

  const handleFileUpload = async (acceptedFiles: any) => {
    console.log("New:", acceptedFiles);
    const file = acceptedFiles[0];
    if (file.size > 10 * 1024 * 1024) {
      alert("Please upload a smaller file");
      return;
    }
    setFileS3Name(acceptedFiles[0].name);

    try {
      const data = await uploadToS3(file);
      console.log("File", data);
    //   setFileS3Url(data?.file_key!);
      onStateChange(data?.file_key!);
    } catch (error) {
      console.log("Error while uploading", error);
    }
  };

  return (
    <div>
      <Dropzone onDrop={handleFileUpload}>
        {({ getRootProps, getInputProps }) => (
          <div className="flex flex-col items-start justify-center mt-4">
            <label className="text-gray-300 font-semibold text-base">
              Drop File
            </label>
            <section className="border-[3px] border-dashed bg-[#1d2024] border-gray-500 rounded-[8px] mt-[6px] px-5 py-4 h-40 w-full flex items-center justify-center cursor-pointer">
              <div
                {...getRootProps()}
                className="w-full flex items-center justify-center flex-col"
              >
                <input {...getInputProps()} />
                <Image
                  src={dropIcon}
                  height={75}
                  width={75}
                  alt="sample-drop-image"
                />
                <p
                  className={` ${
                    fileS3Name ? "text-green-400" : "text-gray-500"
                  } pt-2 pb-0`}
                >
                  {fileS3Name ? fileS3Name : "Drag n Drop files here..."}
                </p>
                {/* <p className='text-center px-4 py-[6px] mt-2 bg-[#457de6] text-gray-100 rounded-[4px] cursor-pointer'>Choose Files</p> */}
              </div>
            </section>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default FileDropZone;
