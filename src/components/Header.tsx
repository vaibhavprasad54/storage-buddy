"use client"

import { Search } from "lucide-react";
import React, { useState } from "react";
import CreateBtn from "./CreateBtn";
import UploadFile from "./UploadFile";

interface HeaderProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setSearchInput }) => {

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  let date = new Date();
  let time = date.getHours(); 

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  }

  return (
    <div className="text-gray-300 w-full py-2 md:py-6 px-4 md:pl-16 md:pr-24">
      <div className="flex flex-col md:flex-row items-start justify-between gap-3 sm:gap-16 w-full">
        <div className="greeting">
          <h2 className="text-[#3f88f5] text-base md:text-lg font-semibold text-[1.04rem] text-wrap sm:text-nowrap">
            {`Good ${time < 12 ? 'Morning' : time >= 12 && time <=15 ? 'Afternoon' : 'Evening'},  Vaibhav`}
          </h2>
          <p className="text-[0.95rem] text-gray-400">Welcome back!</p> 
        </div>
        <div className="searchBar relative px-1 md:px-0">
          <input type="text" onChange={handleInputChange} placeholder="Search files, folders, videos..." className="bg-[#16181b] border-2 border-gray-600 py-3 text-sm pl-9 pr-4 rounded-[8px] sm:w-80 w-full sm:mr-16" />
          <Search className="absolute top-3 left-4 md:left-3 w-4 md:w-5 text-gray-400" />
        </div> 
        <div className="pr-[6px] flex ml-1">
         <CreateBtn handleOpenModal={handleOpenModal}/>
         <UploadFile open={open} setOpen={setOpen} closeModal={closeModal}/>
        </div>
      </div>
    </div>
  ); 
};

export default Header;
