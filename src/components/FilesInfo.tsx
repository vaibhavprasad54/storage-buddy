import React from "react";
import CreateBtn from "./CreateBtn";
import Chart from "./Chart";
import shoeImg from "../../public/shoe.jpg"
import img2 from "../../public/pdf.jpg"
import img3 from "../../public/imgg.png"
import userImg from "../../public/demo-user.png"
import Image from 'next/image'
import { Clapperboard, EllipsisVertical, FileBarChart2, Files, Images, Star, Trash } from "lucide-react";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const FilesInfo = () => {
  return (
    <div className="w-full flex items-center justify-start flex-wrap gap-3 pl-16 pr-[60px] pt-10 h-96 overflow-y-auto">
      <div className="card w-80 rounded-[15px] p-5 cursor-pointer bg-[#2c3039] shadow-xl">
        <div className="card-header w-full flex items-center justify-between">
        <div className="flex items-start justify-start gap-2">
        <Images className="text-gray-200" />
        <p className="text-sm text-gray-200">Testing Image</p>
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
            <DropdownMenuShortcut className="opacity-100"> <Trash strokeWidth={2.5} className="w-4 group-hover:text-red-800" /> </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>     
      </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="card-content w-full py-5 px-4">
          <Image src={shoeImg} width={400} height={400} alt="sampleImg" className="w-full h-44 object-cover rounded-[5px]" />
        </div>
        <div className="card-footer flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center bg-blue-300 rounded-full p-2 w-10 h-10">
           <Image src={userImg} width={30} height={30} alt="sampleImg" />
          </div>
          <p className="text-gray-300 text-xs">Vaibhav Prasad</p>
          </div>
          <div className="time">
            <p className="text-xs text-gray-300">35 mins ago</p>
          </div>
        </div>
      </div>
      <div className="card w-80 rounded-[15px] p-5 cursor-pointer bg-[#2c3039]">
        <div className="card-header w-full flex items-center justify-between">
        <div className="flex items-start justify-start gap-2">
        <Images className="text-gray-200" />
        <p className="text-sm text-gray-200">Resume</p>
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
            <DropdownMenuShortcut className="opacity-100"> <Trash strokeWidth={2.5} className="w-4 group-hover:text-red-800" /> </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>     
      </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="card-content w-full py-5 px-4">
          <Image src={img2} width={400} height={400} alt="sampleImg" className="w-full h-44 object-cover rounded-[5px]" />
        </div>
        <div className="card-footer flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center bg-blue-300 rounded-full p-2 w-10 h-10">
           <Image src={userImg} width={30} height={30} alt="sampleImg" />
          </div>
          <p className="text-gray-300 text-xs">Vaibhav Prasad</p>
          </div>
          <div className="time">
            <p className="text-xs text-gray-300">35 mins ago</p>
          </div>
        </div>
      </div>
      <div className="card w-80 rounded-[15px] p-5 cursor-pointer bg-[#2c3039]">
        <div className="card-header w-full flex items-center justify-between">
        <div className="flex items-start justify-start gap-2">
        <Images className="text-gray-200" />
        <p className="text-sm text-gray-200">Screenshot</p>
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
            <DropdownMenuShortcut className="opacity-100"> <Trash strokeWidth={2.5} className="w-4 group-hover:text-red-800" /> </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>     
      </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="card-content w-full py-5 px-4">
          <Image src={img3} width={400} height={400} alt="sampleImg" className="w-full h-44 object-cover rounded-[5px]" />
        </div>
        <div className="card-footer flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center bg-blue-300 rounded-full p-2 w-10 h-10">
           <Image src={userImg} width={30} height={30} alt="sampleImg" />
          </div>
          <p className="text-gray-300 text-xs">Vaibhav Prasad</p>
          </div>
          <div className="time">
            <p className="text-xs text-gray-300">35 mins ago</p>
          </div>
        </div>
      </div>
      <div className="card w-80 rounded-[15px] p-5 cursor-pointer bg-[#2c3039]">
        <div className="card-header w-full flex items-center justify-between">
        <div className="flex items-start justify-start gap-2">
        <Images className="text-gray-200" />
        <p className="text-sm text-gray-200">Testing Image</p>
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
            <DropdownMenuShortcut className="opacity-100"> <Trash strokeWidth={2.5} className="w-4 group-hover:text-red-800" /> </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>     
      </DropdownMenuContent>
        </DropdownMenu>
        </div>
        <div className="card-content w-full py-5 px-4">
          <Image src={shoeImg} width={400} height={400} alt="sampleImg" className="w-full h-44 object-cover rounded-[5px]" />
        </div>
        <div className="card-footer flex items-center justify-between w-full">
          <div className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center bg-blue-300 rounded-full p-2 w-10 h-10">
           <Image src={userImg} width={30} height={30} alt="sampleImg" />
          </div>
          <p className="text-gray-300 text-xs">Vaibhav Prasad</p>
          </div>
          <div className="time">
            <p className="text-xs text-gray-300">35 mins ago</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default FilesInfo;
