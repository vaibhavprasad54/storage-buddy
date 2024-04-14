"use client"

import { Search } from "lucide-react";
import React, { useState } from "react";
import CreateBtn from "./CreateBtn";
import UploadFile from "./UploadFile";

const Header = () => {

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  let date = new Date();
  let time = date.getHours(); 

  return (
    <div className="text-gray-300 w-full py-2 md:py-6 px-4 md:pl-16 md:pr-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 w-full">
        <div className="greeting">
          <h2 className="text-[#277dff] text-base md:text-lg font-semibold text-[1.04rem] text-wrap sm:text-nowrap">
            {`Good ${time < 12 ? 'Morning' : time >= 12 && time <=15 ? 'Afternoon' : 'Evening'},  Vaibhav`}
          </h2>
          <p className="text-[0.95rem] text-gray-400">Welcome back!</p> 
        </div>
        <div className="searchBar relative px-1 md:px-0">
          <input type="text" placeholder="Search files, folders, videos..." className="bg-[#16181b] border-2 border-gray-600 py-3 text-sm pl-9 pr-4 rounded-[8px] w-80 mr-12" />
          <Search className="absolute top-3 left-4 md:left-3 w-4 md:w-5 text-gray-400" />
        </div> 
        <div className="pr-[6px] flex">
         <CreateBtn handleOpenModal={handleOpenModal}/>
         <UploadFile open={open} setOpen={setOpen} closeModal={closeModal}/>
        </div>
      </div>
    </div>
  ); 
};

export default Header;
