"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FolderOpen } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import FileDropZone from "./FileDropZone";
import Loader from "./Loader";
import { useToast } from "@/components/ui/use-toast"


type Inputs = {
  fileName: string;
  fileUrl: string;
  userId: string;
};

const UploadFile = ({ open, setOpen, closeModal }: any) => {
  const [fileS3Url, setFileS3Url] = useState("");
  const [loading, setLoading] = useState(false);


  const {toast} = useToast();
  const { user } = useUser();
  const userId = user?.id;
  console.log("af", user);

  const [files, setFiles] = useState<any[]>([]);

  const handleFileS3Url = (value: string) => {
    setFileS3Url(value);
  };


  //========= React Hook Form ==========
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const formData = {
      ...data,
      fileUrl: fileS3Url,
      userId: user?.id,
      userName: user?.firstName,
    };
    console.log("File data:", formData);
    
    try {
      if (fileS3Url !== undefined || fileS3Url !== null || fileS3Url !== "") {
        const response = await axios.post("/api/files/post", formData);
        console.log("Response:", response.data);
        if ((response.status = 201)) {
          setLoading(false);
          closeModal();
          fetchFiles();
          toast({
            title: "File uploaded successfully",
            description: "Come back anytime and access your files.",
          });
        }
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };


  const fetchFiles = async() => {
    try {
      const res = await axios.post("/api/files/get", { userId }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setFiles(res.data.reverse());
    } catch (error) {
      console.log("Cannot fetch files", error);
    }

}

  return (
    <div>
      <div>
        
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[725px] bg-[#16181b] border-2 border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-gray-100 flex items-center gap-2">
                <p>Upload File</p>
                <FolderOpen className="text-green-400" />
              </DialogTitle>
              <DialogDescription className="py-4 mx-5">
                <div className="flex flex-col items-start justify-center">
                  <label className="text-gray-300 font-semibold text-base">
                    File Name
                  </label>
                  <input
                    type="text"
                    {...register("fileName")}
                    placeholder="Enter file name"
                    className="px-5 py-3 rounded-[5px] mt-1 bg-[#23272c] shadow-xl w-full outline-none text-slate-200 font-semibold tracking-wider"
                  />
                  {/* {errors.fileName && <span>File name is required</span>} */}
                </div>

                <FileDropZone onStateChange={handleFileS3Url} />
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button
                onClick={(e) => { e.preventDefault(); 
                  closeModal(); 
                }}
                className="bg-transparent border-2 border-[#277dff] text-sm"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading || !fileS3Url || Object.keys(errors).length > 0}
                className="bg-[#277dff] hover:bg-[#2775e9] text-sm w-20"
              >
                {loading ? (
                  <Loader size={20} />
                ) : ( "Upload" )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UploadFile;
